import React from 'react';
import { Search, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    // FIX: Added bg-white and text-slate-800 to ensure visibility
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center px-3 py-2 bg-slate-100 rounded-lg">
          <Search size={20} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="ml-2 bg-transparent border-none focus:outline-none text-slate-700 placeholder-slate-400 w-48"
          />
        </div>
        
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={20} />
        </button>

        {isAuthenticated && (
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                  alt={user?.name || 'User'} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-medium text-slate-700">{user?.name || 'User'}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="text-sm font-medium text-red-600 hover:text-red-700 ml-2"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;  