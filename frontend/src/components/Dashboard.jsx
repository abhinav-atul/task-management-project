import { useState } from "react";
import SummaryCard from "./SummaryCard";
import KanbanColumn from "./KanbanColumn";

const Dashboard = () => {
  // Added some dummy data so the dashboard isn't empty on first load
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design System Update", status: "inProgress" },
    { id: 2, title: "Fix Login Redirect", status: "completed" },
    { id: 3, title: "Database Migration", status: "todo" },
    { id: 4, title: "Client Meeting", status: "todo" },
    { id: 5, title: "Accessibility Audit", status: "inProgress" }
  ]);

  const moveTask = (taskId, newStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const todo = tasks.filter(t => t.status === "todo");
  const inProgress = tasks.filter(t => t.status === "inProgress");
  const completed = tasks.filter(t => t.status === "completed");

  return (
    // Replaced 'dashboard-container' with a standard container
    <div className="max-w-7xl mx-auto">
      
      {/* Removed <Sidebar /> and <Header /> - handled by DashboardLayout */}

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>

        {/* Replaced 'summary-grid' with Tailwind Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard title="Total Tasks" count={tasks.length} />
          <SummaryCard title="To Do" count={todo.length} />
          <SummaryCard title="In Progress" count={inProgress.length} />
          <SummaryCard title="Completed" count={completed.length} />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Task Board</h2>

          {/* Replaced 'kanban-board' with Tailwind Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <KanbanColumn
              title="To Do"
              status="todo"
              tasks={todo}
              moveTask={moveTask}
            />
            <KanbanColumn
              title="In Progress"
              status="inProgress"
              tasks={inProgress}
              moveTask={moveTask}
            />
            <KanbanColumn
              title="Completed"
              status="completed"
              tasks={completed}
              moveTask={moveTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;