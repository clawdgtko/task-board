"use client";

import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onStatusChange: (status: string) => void;
  onDelete: () => void;
}

const priorityColors = {
  low: "bg-slate-600",
  medium: "bg-amber-600",
  high: "bg-red-600",
};

const priorityLabels = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

const assigneeLabels = {
  gregoire: "Grégoire",
  clawd: "Clawd",
};

const assigneeColors = {
  gregoire: "bg-emerald-600/30 text-emerald-300 border-emerald-500/30",
  clawd: "bg-violet-600/30 text-violet-300 border-violet-500/30",
};

const nextStatus: Record<string, string> = {
  todo: "in-progress",
  "in-progress": "review",
  review: "done",
  done: "todo",
};

export function TaskCard({ task, onEdit, onStatusChange, onDelete }: TaskCardProps) {
  const handleStatusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onStatusChange(nextStatus[task.status]);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div
      onClick={onEdit}
      className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 rounded-lg p-3 cursor-pointer transition-all group"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-slate-200 text-sm leading-tight">
          {task.title}
        </h3>
        <button
          onClick={handleDelete}
          className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-400 transition-opacity text-xs"
        >
          ×
        </button>
      </div>

      {task.description && (
        <p className="text-xs text-slate-400 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full border ${assigneeColors[task.assignee]}`}
          >
            {assigneeLabels[task.assignee]}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`}
            title={`Priorité: ${priorityLabels[task.priority]}`}
          />
        </div>

        <button
          onClick={handleStatusClick}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          title="Avancer le statut"
        >
          →
        </button>
      </div>

      {task.tags && task.tags.length > 0 && (
        <div className="flex gap-1 mt-2 flex-wrap">
          {task.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 bg-slate-600/50 text-slate-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-[10px] text-slate-500 mt-2">
        {formatDate(task.created)}
      </div>
    </div>
  );
}
