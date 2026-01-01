import React from 'react';
import { Routes, Route, Link, Navigate, BrowserRouter, Outlet } from 'react-router-dom';

// Import Pages
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import TeamManagement from './pages/TeamManagement';
import TeamDetail from './pages/TeamDetail';
import TaskDetail from './pages/TaskDetail';

import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

// Public Layout (Login/Signup/Home) - Centered with Gradient
const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex flex-col">
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-blue-600">Task Manager</h2>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  const HomeRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />;
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Protected Routes (Dashboard & Details) */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/teams" 
            element={
              <ProtectedRoute>
                <TeamManagement />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/teams/:teamName" 
            element={
              <ProtectedRoute>
                <TeamDetail />
              </ProtectedRoute>
            } 
          />

          {/* FIX: Added Task Detail Route */}
          <Route 
            path="/tasks/:id" 
            element={
              <ProtectedRoute>
                <TaskDetail />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;