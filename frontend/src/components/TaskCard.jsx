import React from 'react';
import { Link } from 'react-router-dom'; // FIX: Import Link
import { Calendar, Flag } from 'lucide-react';

const TaskCard = ({ task, status }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-red-500 bg-red-100',
      medium: 'text-amber-500 bg-amber-100',
      low: 'text-green-500 bg-green-100'
    };
    return colors[priority] || colors.medium;
  };

  return (
    // FIX: Add Link wrapper to enable navigation
    <Link to={`/tasks/${task.id}`} className="block">
      <div className="task-card bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="mb-2">
          <h4 className="font-bold text-slate-800">{task.title}</h4>
        </div>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{task.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <Calendar size={14} />
            <span>{task.dueDate}</span>
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${getPriorityColor(task.priority)}`}>
            <Flag size={12} />
            <span className="capitalize">{task.priority}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;