
import React, { useState } from 'react';
import { UserRole } from './types';
import Layout from './components/Layout';
import Auth from './components/Auth';
import { DashboardHome, TeacherSearch, StudentClasses, StudentAttendance, StudentWallet } from './components/StudentViews';
import { TeacherHome, TeacherSchedule, TeacherStudents } from './components/TeacherViews';
import { AdminDashboard, AdminUserManagement } from './components/AdminViews';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!userRole) {
    return <Auth onLogin={(role) => setUserRole(role)} />;
  }

  const handleLogout = () => {
    setUserRole(null);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (userRole) {
      case UserRole.STUDENT:
        switch (activeTab) {
          case 'dashboard': return <DashboardHome onFindTeacher={() => setActiveTab('search')} />;
          case 'search': return <TeacherSearch />;
          case 'classes': return <StudentClasses />;
          case 'attendance': return <StudentAttendance />;
          case 'wallet': return <StudentWallet />;
          default: return <DashboardHome onFindTeacher={() => setActiveTab('search')} />;
        }
      case UserRole.TEACHER:
        switch (activeTab) {
          case 'dashboard': return <TeacherHome />;
          case 'schedule': return <TeacherSchedule />;
          case 'students': return <TeacherStudents />;
          default: return <TeacherHome />;
        }
      case UserRole.ADMIN:
        switch (activeTab) {
          case 'dashboard': return <AdminDashboard />;
          case 'users': return <AdminUserManagement />;
          case 'verification': return <div className="p-12 text-center text-slate-400">Document verification module coming soon...</div>;
          default: return <AdminDashboard />;
        }
      default:
        return <div>Invalid Role</div>;
    }
  };

  return (
    <Layout 
      role={userRole} 
      onLogout={handleLogout} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
