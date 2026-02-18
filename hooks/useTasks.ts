"use client";

import { useState, useEffect, useCallback } from "react";
import pb from "../lib/pocketbase";
import { Task } from "../types";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    try {
      const records = await pb.collection("tasks").getFullList({
        sort: "-created",
      });
      setTasks(records as unknown as Task[]);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Subscribe to real-time updates
  useEffect(() => {
    fetchTasks();

    // Subscribe to changes
    pb.collection("tasks").subscribe("*", (e) => {
      setTasks((prev) => {
        if (e.action === "create") {
          return [e.record as unknown as Task, ...prev];
        } else if (e.action === "update") {
          return prev.map((t) =>
            t.id === e.record.id ? (e.record as unknown as Task) : t
          );
        } else if (e.action === "delete") {
          return prev.filter((t) => t.id !== e.record.id);
        }
        return prev;
      });
    });

    return () => {
      pb.collection("tasks").unsubscribe("*");
    };
  }, [fetchTasks]);

  // Create task
  const createTask = async (data: Omit<Task, "id" | "created" | "updated">) => {
    return await pb.collection("tasks").create(data);
  };

  // Update task
  const updateTask = async (id: string, data: Partial<Task>) => {
    return await pb.collection("tasks").update(id, data);
  };

  // Delete task
  const deleteTask = async (id: string) => {
    return await pb.collection("tasks").delete(id);
  };

  return { tasks, loading, createTask, updateTask, deleteTask };
}
