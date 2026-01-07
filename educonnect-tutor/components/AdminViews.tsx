
import React, { useState } from 'react';
import { ICONS, MOCK_TEACHERS, MOCK_USERS } from '../constants';

export const AdminDashboard = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Total Platform Revenue</h3>
        <p className="text-3xl font-black text-slate-800">₹1,42,500</p>
        <span className="text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
          <ICONS.ArrowRight size={12} className="-rotate-45" />
          +12.5% from last month
        </span>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Platform Users</h3>
        <p className="text-3xl font-black text-slate-800">1,204</p>
        <div className="flex gap-4 mt-2">
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">800 Students</span>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">404 Teachers</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Active Classes</h3>
        <p className="text-3xl font-black text-slate-800">42</p>
        <span className="text-xs text-slate-400 font-bold flex items-center gap-1 mt-1">
          <ICONS.Clock size={12} />
          Currently ongoing
        </span>
      </div>
    </div>

    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="text-xl font-black text-slate-800">Teacher Approval Queue</h3>
        <button className="text-indigo-600 font-black text-xs hover:underline uppercase tracking-widest">View Full Archive</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
              <th className="px-8 py-4">Applicant</th>
              <th className="px-8 py-4">Specialization</th>
              <th className="px-8 py-4">Applied On</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_TEACHERS.map(t => (
              <tr key={t.id} className="text-sm hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform shadow-sm" />
                    <div>
                      <p className="font-black text-slate-800">{t.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">user_{t.id}@educonnect.in</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-wrap gap-1">
                    {t.subjects.slice(0, 2).map(s => (
                      <span key={s} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold border border-indigo-100">{s}</span>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-5 text-slate-500 font-medium text-xs">May 12, 2024</td>
                <td className="px-8 py-5">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-700 flex items-center gap-1.5 w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Pending Review
                  </span>
                </td>
                <td className="px-8 py-5 text-right space-x-2">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-black hover:bg-indigo-700 shadow-sm transition-all">Approve</button>
                  <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-black hover:bg-slate-50 transition-all">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const AdminUserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">User Management</h2>
          <p className="text-slate-500">Search and manage student/teacher accounts</p>
        </div>
        <div className="relative w-64">
          <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search email or name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <th className="px-8 py-4">User</th>
              <th className="px-8 py-4">Role</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Last Login</th>
              <th className="px-8 py-4 text-right">Settings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_USERS.map(user => (
              <tr key={user.id} className="hover:bg-slate-50 transition-all group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img src={user.avatar} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <p className="font-bold text-slate-800">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${
                    user.role === 'ADMIN' ? 'bg-indigo-100 text-indigo-700' :
                    user.role === 'TEACHER' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-slate-400 text-xs">2 hours ago</td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                    <ICONS.Settings size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
