"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { TaskCard } from "./TaskCard";
import { TaskModal } from "./TaskModal";
import { Task } from "../../types";

const columns = [
  { id: "todo", label: "À faire", color: "bg-slate-500" },
  { id: "in-progress", label: "En cours", color: "bg-blue-500" },
  { id: "review", label: "En revue", color: "bg-amber-500" },
  { id: "done", label: "Terminé", color: "bg-green-500" },
] as const;

export function TaskBoard() {
  const tasks = useQuery(api.tasks.getAll) || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const getTasksByStatus = (status: string) =>
    tasks.filter((t) => t.status === status);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Task Board</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          + Nouvelle tâche
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100vh-180px)]">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${column.color}`} />
              <h2 className="font-semibold text-slate-200">{column.label}</h2>
              <span className="ml-auto text-sm text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-full">
                {getTasksByStatus(column.id).length}
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3">
              {getTasksByStatus(column.id).map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={() => handleEdit(task)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <TaskModal task={editingTask} onClose={handleCloseModal} />
      )}
    </div>
  );
}
