import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isMobileOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/teams', label: 'Teams', icon: 'group' },
    { path: '/tasks', label: 'Tasks', icon: 'task_alt' },
    { path: '/reports', label: 'Reports', icon: 'bar_chart' },
    { path: '/settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 h-full
        border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 
        flex flex-col justify-between overflow-y-auto
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:border-r
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex flex-col gap-8">
        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose} // Close sidebar on nav item click
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="text-sm font-medium">{item.label}</p>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        <div className="h-px bg-slate-200 dark:bg-slate-700" />
        <div className="flex items-center gap-3 px-3">
          <div
            className="w-10 h-10 rounded-full bg-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk7knAm4JPHfFIktcugd4z5lCBtLD2vtJnmjsyH5lMaVFRZitkdWADzwFiV74jrtLYnFD6I0xkHbasJEz0tX5Qc4u3cxNwDTON9aSJ6UivTolOyTSJnDj1-jLea6dJ9o2v8v065WWbwnfaC7rbyc21bMujOKG8vByQqOVcvLq0JjMtp9L_bhGcL9W10MG6Bttoif1rYymoIcluxwr-1eDfUPa4pPtFugEMaK_64zufBVjgzhtSjsqbqCi_XSFqMeS4DMZ5Z1CMO7o")'
            }}
          />
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Alex Turner</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">alex.t@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
