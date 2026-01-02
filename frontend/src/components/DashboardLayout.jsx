import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import NewTaskModal from './NewTaskModal';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Helper to determine title based on current path
  const getTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path) return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopHeader 
          title={getTitle()}
          onMenuClick={() => setIsSidebarOpen(true)}
          onAddTask={() => setShowModal(true)}
        />
        
        {/* <Outlet /> renders the current route's component (Dashboard, Teams, etc.) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <Outlet />
        </div>
      </main>

      {/* Global Modal */}
      {showModal && <NewTaskModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DashboardLayout;