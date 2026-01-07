
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, role, onLogout, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getMenuItems = () => {
    switch(role) {
      case UserRole.STUDENT:
        return [
          { id: 'dashboard', label: 'Dashboard', icon: <ICONS.BarChart3 size={20} /> },
          { id: 'search', label: 'Find Teachers', icon: <ICONS.Search size={20} /> },
          { id: 'classes', label: 'My Classes', icon: <ICONS.Calendar size={20} /> },
          { id: 'attendance', label: 'Attendance', icon: <ICONS.CheckCircle2 size={20} /> },
          { id: 'wallet', label: 'My Wallet', icon: <ICONS.Wallet size={20} /> },
        ];
      case UserRole.TEACHER:
        return [
          { id: 'dashboard', label: 'Overview', icon: <ICONS.BarChart3 size={20} /> },
          { id: 'schedule', label: 'My Schedule', icon: <ICONS.Clock size={20} /> },
          { id: 'students', label: 'My Students', icon: <ICONS.Users size={20} /> },
        ];
      case UserRole.ADMIN:
        return [
          { id: 'dashboard', label: 'Admin Panel', icon: <ICONS.Settings size={20} /> },
          { id: 'users', label: 'Manage Users', icon: <ICONS.Users size={20} /> },
          { id: 'verification', label: 'Approvals', icon: <ICONS.CheckCircle2 size={20} /> },
        ];
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <aside className={`bg-white border-r border-slate-200 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">E</div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight text-slate-800">EduConnect</span>}
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-2">
          {getMenuItems().map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' 
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`}
            >
              {item.icon}
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <ICONS.LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
          >
            <ICONS.Filter size={20} />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Demo User</p>
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{role}</p>
            </div>
            <div className="relative group cursor-pointer">
              <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
