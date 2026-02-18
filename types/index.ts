export type TaskStatus = "todo" | "in-progress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high";
export type TaskAssignee = "gregoire" | "clawd";

export interface Task {
  _id: string;
  _creationTime: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: TaskAssignee;
  createdAt: number;
  updatedAt: number;
  completedAt?: number;
  tags?: string[];
}
