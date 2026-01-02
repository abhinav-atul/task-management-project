import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

// Layout
import DashboardLayout from './components/DashboardLayout';

// FIX: Import Dashboard from 'components' instead of 'pages'
import Dashboard from './components/Dashboard';

// Other Pages
import Login from './components/Login';
import Signup from './components/Signup';
import TeamManagement from './pages/TeamManagement';
import TeamDetail from './pages/TeamDetail';
import TaskDetail from './pages/TaskDetail';

// Component Pages
import Tasks from './components/Tasks';
import Reports from './components/Reports';
import Settings from './components/Settings';

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
          <Route path="/" element={<HomeRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes (Wrapped in DashboardLayout) */}
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="/teams" element={<TeamManagement />} />
            <Route path="/teams/:teamName" element={<TeamDetail />} />
            
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;