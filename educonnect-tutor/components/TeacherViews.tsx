
import React, { useState } from 'react';
import { ICONS, MOCK_BOOKINGS, MOCK_TEACHERS, MOCK_MESSAGES } from '../constants';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const TeacherHome = () => {
  const stats = [
    { label: 'Total Earnings', value: '₹24,500', icon: <ICONS.BarChart3 className="text-indigo-600" />, color: 'bg-indigo-50' },
    { label: 'Total Students', value: '12', icon: <ICONS.Users className="text-green-600" />, color: 'bg-green-50' },
    { label: 'Classes this Week', value: '8', icon: <ICONS.Calendar className="text-orange-600" />, color: 'bg-orange-50' },
    { label: 'Avg Rating', value: '4.8', icon: <ICONS.Star className="text-amber-500" />, color: 'bg-amber-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Student Progress Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[
                { name: 'Week 1', revenue: 4000 }, { name: 'Week 2', revenue: 6000 }, 
                { name: 'Week 3', revenue: 5500 }, { name: 'Week 4', revenue: 9000 }
              ]}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Quick Messages</h3>
          <div className="space-y-4">
            {MOCK_MESSAGES.map(m => (
              <div key={m.id} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase text-slate-800">Aman Kumar</span>
                    <span className="text-[10px] text-slate-400">10:45 AM</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-tight">{m.text}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-2 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-xs hover:bg-indigo-100 transition-all mt-4">Go to Inbox</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeacherStudents = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Students</h2>
        <p className="text-slate-500">Managing {MOCK_TEACHERS[0].totalStudents} learners currently</p>
      </div>
      <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
        <ICONS.Filter size={18} />
        Filters
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-6">
            <img src={`https://i.pravatar.cc/150?u=s${i}`} className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-white group-hover:scale-105 transition-transform" />
            <button className="p-2 text-slate-400 hover:text-slate-600">
              <ICONS.MoreVertical size={20} />
            </button>
          </div>
          <div>
            <h4 className="text-lg font-black text-slate-800">Student Name {i + 1}</h4>
            <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest mt-1">Class 10th • Physics</p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Attendance</p>
              <p className="font-black text-slate-700">94%</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Session</p>
              <p className="font-black text-slate-700">Tue, 5 PM</p>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="flex-1 bg-indigo-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
              <ICONS.MessageSquare size={14} />
              Message
            </button>
            <button className="flex-1 bg-slate-50 text-slate-600 text-xs font-bold py-3 rounded-xl hover:bg-slate-100 transition-all">Report</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Added TeacherSchedule component to fix "Cannot find name 'TeacherSchedule'"
export const TeacherSchedule = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Teaching Schedule</h2>
        <p className="text-slate-500">Your upcoming sessions with students</p>
      </div>
      <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 flex items-center gap-2">
        <ICONS.Plus size={18} />
        Add Block-out Time
      </button>
    </div>

    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="divide-y divide-slate-100">
        {MOCK_BOOKINGS.filter(b => b.status === 'Upcoming').map(booking => (
          <div key={booking.id} className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-all">
            <div className="flex items-center gap-6">
              <div className="bg-indigo-50 w-20 h-20 rounded-2xl flex flex-col items-center justify-center border border-indigo-100">
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{booking.date.split('-')[1]}</p>
                <p className="text-2xl font-black text-indigo-700">{booking.date.split('-')[2]}</p>
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-800">{booking.subject} with Aman Kumar</h4>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    <ICONS.Clock size={14} />
                    {booking.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    <ICONS.MapPin size={14} />
                    {booking.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white border border-slate-200 text-slate-600 px-6 py-2.5 rounded-xl text-xs font-black hover:bg-slate-50 transition-all">Reschedule</button>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-indigo-700 transition-all shadow-md">Join Class</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export { };
