export type TaskStatus = "todo" | "in-progress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high";
export type TaskAssignee = "gregoire" | "clawd";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: TaskAssignee;
  created: string;
  updated: string;
  tags?: string[];
}
