
import React, { useState, useMemo } from 'react';
import { ICONS, MOCK_TEACHERS, MOCK_BOOKINGS, MOCK_ATTENDANCE, MOCK_TRANSACTIONS, MOCK_MESSAGES } from '../constants';
import { TeacherProfile, Filters, Booking } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const DashboardHome = ({ onFindTeacher }: { onFindTeacher: () => void }) => {
  const stats = [
    { label: 'Next Session', value: '4:00 PM', sub: 'Today', icon: <ICONS.Calendar className="text-indigo-600" />, color: 'bg-indigo-50' },
    { label: 'Attendance', value: '88%', sub: 'Avg last 30d', icon: <ICONS.CheckCircle2 className="text-emerald-600" />, color: 'bg-emerald-50' },
    { label: 'Classes Left', value: '12', sub: 'In active packs', icon: <ICONS.Clock className="text-orange-600" />, color: 'bg-orange-50' },
    { label: 'Wallet', value: '₹2,400', sub: 'Available Credit', icon: <ICONS.BarChart3 className="text-blue-600" />, color: 'bg-blue-50' },
  ];

  const attendanceData = [
    { name: 'Present', value: 88, color: '#10b981' },
    { name: 'Absent', value: 12, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Student Dashboard</h2>
          <p className="text-slate-500">Track your progress and upcoming lessons</p>
        </div>
        <button 
          onClick={onFindTeacher}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
        >
          <ICONS.Search size={18} />
          <span>Find New Tutor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
              <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800">{stat.value}</h3>
              <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-800">Learning Intensity</h3>
             <select className="text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Mon', hrs: 2 }, { name: 'Tue', hrs: 1.5 }, { name: 'Wed', hrs: 3 },
                { name: 'Thu', hrs: 0.5 }, { name: 'Fri', hrs: 2.5 }, { name: 'Sat', hrs: 4 }, { name: 'Sun', hrs: 1 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="hrs" fill="#4f46e5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

         <div className="space-y-8">
         {/* Attendance Mix Box */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Attendance Mix</h3>
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={attendanceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-black text-slate-800">88%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Score</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50">
                <span className="text-xs font-bold text-emerald-700">Present Sessions</span>
                <span className="text-sm font-black text-emerald-700">12</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-rose-50">
                <span className="text-xs font-bold text-rose-700">Missed Sessions</span>
                <span className="text-sm font-black text-rose-700">2</span>
              </div>
            </div>
          </div>

          {/* Downloadable Resources Box */}
          <StudyResources />
          
        </div>
      </div>
    </div>
  );
};


export const StudentWallet = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl shadow-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <ICONS.Wallet className="mb-6 opacity-80" size={32} />
          <p className="text-xs font-bold uppercase tracking-widest opacity-70">Available Balance</p>
          <h2 className="text-4xl font-black mt-1">₹2,400.00</h2>
          <button className="w-full bg-white text-indigo-700 font-black py-4 rounded-2xl mt-8 shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <ICONS.Plus size={18} />
            Top Up Wallet
          </button>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200">
          <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-6">Payment Methods</h3>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px] text-white font-bold">VISA</div>
                <span className="text-sm font-bold text-slate-700">•••• 4242</span>
              </div>
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase">Primary</span>
            </div>
            <button className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-all">
              + Add New Card
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-xl font-black text-slate-800">Transaction History</h3>
          <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400">
            <ICONS.Download size={20} />
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {MOCK_TRANSACTIONS.map(tr => (
            <div key={tr.id} className="px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tr.type === 'Credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {tr.type === 'Credit' ? <ICONS.Plus size={18} /> : <ICONS.ArrowRight size={18} className="rotate-90" />}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800">{tr.description}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tr.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-black ${tr.type === 'Credit' ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {tr.type === 'Credit' ? '+' : '-'}₹{tr.amount.toFixed(2)}
                </p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">ID: TXN-{tr.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TeacherSearch = () => {
  const [filters, setFilters] = useState<Filters>({
    subject: '',
    class: '',
    mode: '',
    priceRange: [0, 2000],
    rating: 0,
    area: ''
  });
  
  const [bookingTeacher, setBookingTeacher] = useState<TeacherProfile | null>(null);
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);

  const filteredTeachers = MOCK_TEACHERS.filter(t => {
    if (filters.subject && !t.subjects.includes(filters.subject)) return false;
    if (filters.mode && t.mode !== filters.mode) return false;
    if (t.pricePerHour < filters.priceRange[0] || t.pricePerHour > filters.priceRange[1]) return false;
    if (filters.area && !t.location.area.toLowerCase().includes(filters.area.toLowerCase())) return false;
    return true;
  });

  const handleFinalizeBooking = () => {
    setIsBookingInProgress(true);
    // Simulate API call
    setTimeout(() => {
      setIsBookingInProgress(false);
      setBookingTeacher(null);
      // In a real app, we would add to MOCK_BOOKINGS here
      alert(`Success! Session booked with ${bookingTeacher?.name}`);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Booking Confirmation Modal */}
      {bookingTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tight">Confirm Booking</h3>
                <p className="text-slate-500 text-sm mt-1">Review session details before finalizing</p>
              </div>
              <button 
                onClick={() => setBookingTeacher(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
              >
                <ICONS.AlertCircle size={24} className="rotate-45" />
              </button>
            </div>

            <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100 mb-8">
              <div className="flex items-center gap-5 mb-6">
                <img src={bookingTeacher.avatar} className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white" />
                <div>
                  <h4 className="text-lg font-black text-slate-800">{bookingTeacher.name}</h4>
                  <div className="flex items-center gap-1.5">
                    <ICONS.Star className="text-amber-400 fill-amber-400" size={14} />
                    <span className="text-xs font-bold text-slate-600">{bookingTeacher.rating} Rating</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</p>
                  <p className="text-sm font-bold text-indigo-600">{bookingTeacher.subjects[0]}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Selected Slot</p>
                  <p className="text-sm font-bold text-slate-700">{bookingTeacher.availability[0]}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mode</p>
                  <p className="text-sm font-bold text-slate-700">{bookingTeacher.mode}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="text-sm font-bold text-slate-700">1 Hour Session</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                <span>Session Fee</span>
                <span>₹{bookingTeacher.pricePerHour}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                <span>Service Fee (5%)</span>
                <span>₹{(bookingTeacher.pricePerHour * 0.05).toFixed(0)}</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-lg font-black text-slate-800">Total Amount</span>
                <span className="text-2xl font-black text-indigo-600">₹{(bookingTeacher.pricePerHour * 1.05).toFixed(0)}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setBookingTeacher(null)}
                disabled={isBookingInProgress}
                className="flex-1 py-4 bg-white border-2 border-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-50 transition-all disabled:opacity-50"
              >
                Back
              </button>
              <button 
                onClick={handleFinalizeBooking}
                disabled={isBookingInProgress}
                className="flex-[2] py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all flex items-center justify-center gap-3 disabled:opacity-80"
              >
                {isBookingInProgress ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <ICONS.ShieldCheck size={20} />
                    Confirm & Pay
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Find Your Perfect Tutor</h2>
          <p className="text-slate-500">Browse through top-rated verified educators</p>
        </div>
        <div className="relative w-full md:w-96">
          <ICONS.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, subject or area..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            onChange={(e) => setFilters({...filters, area: e.target.value})}
            value={filters.area}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ICONS.Filter size={18} />
              Filters
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Subject</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm"
                  onChange={(e) => setFilters({...filters, subject: e.target.value})}
                  value={filters.subject}
                >
                  <option value="">All Subjects</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Python">Python</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Location Area</label>
                <div className="relative">
                  <ICONS.MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input 
                    type="text" 
                    placeholder="Enter area..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    onChange={(e) => setFilters({...filters, area: e.target.value})}
                    value={filters.area}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Teaching Mode</label>
                <div className="space-y-2">
                  {['Online', 'Offline', 'Hybrid'].map(m => (
                    <label key={m} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="mode"
                        checked={filters.mode === m}
                        onChange={() => setFilters({...filters, mode: m})}
                        className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" 
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{m}</span>
                    </label>
                  ))}
                  <button 
                    onClick={() => setFilters({...filters, mode: ''})}
                    className="text-[10px] font-black text-indigo-600 uppercase tracking-tighter hover:underline"
                  >
                    Clear Mode
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Max Price (₹/hr)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="2000" 
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)]})}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400">
                  <span>₹0</span>
                  <span className="text-indigo-600">₹{filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTeachers.map(teacher => (
            <div key={teacher.id} className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-xl transition-all group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <img src={teacher.avatar} className="w-16 h-16 rounded-2xl object-cover shadow-md" />
                <div className="text-right">
                  <p className="text-lg font-black text-slate-800">₹{teacher.pricePerHour}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Per Hour</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-black text-slate-800 group-hover:text-indigo-600 transition-colors">{teacher.name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <ICONS.Star className="text-amber-400 fill-amber-400" size={14} />
                  <span className="text-xs font-bold text-slate-700">{teacher.rating}</span>
                  <span className="text-[10px] text-slate-400">({teacher.totalStudents} students)</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-slate-400">
                  <ICONS.MapPin size={12} />
                  <span className="text-[10px] font-medium">{teacher.location.area}, {teacher.location.city}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 mb-6">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {teacher.subjects.map(s => (
                  <span key={s} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2">
                <button 
                  onClick={() => setBookingTeacher(teacher)}
                  className="flex-1 bg-indigo-600 text-white text-xs font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  Book Session
                </button>
                <button 
                  onClick={() => setBookingTeacher(teacher)}
                  className="p-3 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-colors"
                >
                  <ICONS.Plus size={18} />
                </button>
              </div>
            </div>
          ))}
          {filteredTeachers.length === 0 && (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-slate-200 border-dashed">
              <ICONS.Users className="mx-auto mb-4 text-slate-200" size={48} />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No Tutors Found</h3>
              <p className="text-slate-400 text-sm">Try adjusting your filters or area search</p>
              <button 
                onClick={() => setFilters({subject: '', class: '', mode: '', priceRange: [0, 2000], rating: 0, area: ''})}
                className="mt-6 text-indigo-600 font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const TeacherProfileView = ({ teacher, onBack }: { teacher: TeacherProfile, onBack: () => void }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="animate-in slide-in-from-right duration-300">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-6 group transition-all">
        <ICONS.ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" size={20} />
        Back to Results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Info Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img src={teacher.avatar} className="w-32 h-32 rounded-3xl object-cover shadow-xl border-4 border-white" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-black text-slate-800">{teacher.name}</h2>
                    <p className="text-indigo-600 font-bold mt-1 flex items-center gap-2">
                      <ICONS.ShieldCheck size={18} />
                      Verified Professional Educator
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 justify-end">
                      <ICONS.Star size={20} fill="currentColor" />
                      <span className="text-xl font-black">{teacher.rating}</span>
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase mt-1 tracking-wider">from {teacher.totalStudents}+ students</p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                    <ICONS.MapPin size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">{teacher.location.area}, {teacher.location.city}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                    <ICONS.Clock size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">{teacher.experience} Years Experience</span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed text-lg italic">
                  "{teacher.bio}"
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Expertise & Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Teaching Subjects</label>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map(s => (
                    <span key={s} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-bold border border-indigo-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Weekly Slots</label>
                <div className="space-y-2">
                  {teacher.availability.map(slot => (
                    <div key={slot} className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50/50 p-2 rounded-lg">
                      <ICONS.Clock size={14} className="text-emerald-500" />
                      <span className="font-bold">{slot}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl shadow-indigo-200 sticky top-8">
            <h3 className="text-xl font-bold mb-2">Book a Trial Session</h3>
            <p className="text-indigo-100 text-sm mb-6">Experience the teaching style before committing to a full course.</p>
            
            <div className="flex justify-between items-center mb-8 bg-white/10 p-4 rounded-2xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Rate per hour</p>
                <p className="text-3xl font-black">${teacher.pricePerHour}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Status</p>
                <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Available Now</span>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => setShowConfirm(true)}
                className="w-full bg-white text-indigo-700 font-black py-4 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-lg">
                <ICONS.Calendar size={20} />
                Confirm Booking
              </button>
              <button className="w-full bg-indigo-500/50 text-white font-bold py-3 rounded-xl hover:bg-indigo-500 transition-all border border-indigo-400/30">
                Contact Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <BookingModal 
          teacher={teacher} 
          onClose={() => setShowConfirm(false)} 
        />
      )}
    </div>
  );
};

export const StudentClasses = () => {
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [cancellingBooking, setCancellingBooking] = useState<Booking | null>(null);

  const handleCancelClick = (booking: Booking) => {
    setCancellingBooking(booking);
    setOpenMenuId(null);
  };

  const confirmCancellation = () => {
    if (cancellingBooking) {
      setBookings(bookings.filter(b => b.id !== cancellingBooking.id));
      setCancellingBooking(null);
    }
  };

  const getCancellationPolicy = (date: string, time: string) => {
    // Basic date parsing logic for demo (Expects YYYY-MM-DD and "HH:MM AM/PM")
    const bookingDate = new Date(`${date} ${time}`);
    const now = new Date();
    const diffInHours = (bookingDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (diffInHours > 24) {
      return { 
        eligible: true, 
        message: "You are eligible for a full refund as your session is more than 24 hours away.",
        type: 'success'
      };
    } else {
      return { 
        eligible: true, 
        message: "Cancellation within 24 hours incurs a 50% convenience fee as per platform policy.",
        type: 'warning'
      };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      {/* Cancellation Confirmation Modal */}
      {cancellingBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ICONS.AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-800 text-center mb-2">Cancel Session?</h3>
            <p className="text-slate-500 text-sm text-center mb-6 leading-relaxed">
              {getCancellationPolicy(cancellingBooking.date, cancellingBooking.time).message}
            </p>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tutor</span>
                <span className="text-xs font-black text-slate-700">{MOCK_TEACHERS.find(t => t.id === cancellingBooking.teacherId)?.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</span>
                <span className="text-xs font-black text-indigo-600 uppercase">{cancellingBooking.subject}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setCancellingBooking(null)}
                className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
              >
                Go Back
              </button>
              <button 
                onClick={confirmCancellation}
                className="flex-1 px-4 py-3 bg-rose-600 text-white font-black rounded-xl hover:bg-rose-700 shadow-lg shadow-rose-100 transition-all"
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Classes</h2>
          <p className="text-slate-500">Keep track of your learning schedule</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200">
          <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-md">Upcoming</button>
          <button className="px-4 py-2 text-slate-500 text-xs font-bold rounded-lg hover:bg-slate-50">Completed</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.filter(b => b.status === 'Upcoming').map(booking => {
          const teacher = MOCK_TEACHERS.find(t => t.id === booking.teacherId);
          const isMenuOpen = openMenuId === booking.id;

          return (
            <div key={booking.id} className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-md transition-all relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={teacher?.avatar} className="w-12 h-12 rounded-xl" />
                <div>
                  <h4 className="font-bold text-slate-800">{teacher?.name}</h4>
                  <p className="text-xs text-indigo-600 font-bold uppercase">{booking.subject}</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-500">
                  <ICONS.Calendar size={16} />
                  <span className="text-xs font-medium">{booking.date}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <ICONS.Clock size={16} />
                  <span className="text-xs font-medium">{booking.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <ICONS.MapPin size={16} />
                  <span className="text-xs font-medium">{booking.location}</span>
                </div>
              </div>
              <div className="flex gap-2 pt-6 border-t border-slate-50">
                <button className="flex-1 bg-indigo-50 text-indigo-700 text-xs font-bold py-3 rounded-xl hover:bg-indigo-100 transition-all">Join Session</button>
                <div className="relative">
                  <button 
                    onClick={() => setOpenMenuId(isMenuOpen ? null : booking.id)}
                    className={`px-4 py-3 rounded-xl transition-all ${isMenuOpen ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 hover:text-slate-600'}`}
                  >
                    <ICONS.MoreVertical size={18} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isMenuOpen && (
                    <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-10 animate-in slide-in-from-bottom-2 duration-200">
                      <button className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all flex items-center gap-2">
                        <ICONS.Settings size={14} />
                        Reschedule
                      </button>
                      <button 
                        onClick={() => handleCancelClick(booking)}
                        className="w-full text-left px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-all flex items-center gap-2"
                      >
                        <ICONS.AlertCircle size={14} />
                        Cancel Session
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {bookings.filter(b => b.status === 'Upcoming').length === 0 && (
          <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-slate-200 border-dashed">
            <ICONS.Calendar className="mx-auto mb-4 text-slate-200" size={48} />
            <p className="text-slate-400 font-medium">No upcoming classes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export const StudyResources = () => {
  const resources = [
    { title: 'Algebra Basics', subject: 'Mathematics', type: 'PDF', size: '2.4 MB', color: 'bg-indigo-50 text-indigo-600' },
    { title: 'Force & Motion', subject: 'Physics', type: 'PDF', size: '1.8 MB', color: 'bg-blue-50 text-blue-600' },
    { title: 'Grammar Guide', subject: 'English', type: 'DOCX', size: '4.2 MB', color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-black text-slate-800 tracking-tight">Learning Materials</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available to Download</p>
        </div>
        <button className="text-xs font-bold text-indigo-600 hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {resources.map((res, i) => (
          <div key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-300">
            <div className="flex items-center gap-4">
              {/* Type Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black shadow-sm ${res.color}`}>
                {res.type}
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">{res.subject}</p>
                <h4 className="text-sm font-bold text-slate-800 leading-none">{res.title}</h4>
                <p className="text-[10px] text-slate-400 mt-1 font-medium">{res.size} • Updated Oct 12</p>
              </div>
            </div>
            {/* Safe Download Button (Using Search icon as placeholder) */}
            <button 
              onClick={() => alert(`Demo: Started downloading ${res.title}`)}
              className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
            >
              <ICONS.Search size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const BookingModal = ({ teacher, onClose }: { teacher: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 animate-in zoom-in-95 duration-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ICONS.Calendar size={32} />
          </div>
          <h3 className="text-xl font-black text-slate-800">Confirm Session</h3>
          <p className="text-slate-500 text-sm mt-1">Review your booking with {teacher.name}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
            <span className="text-xs font-bold text-slate-400 uppercase">Date</span>
            <span className="text-xs font-black text-slate-700">Jan 15, 2026</span>
          </div>
          <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
            <span className="text-xs font-bold text-slate-400 uppercase">Time Slot</span>
            <span className="text-xs font-black text-slate-700">{teacher.availability[0]}</span>
          </div>
          <div className="flex justify-between p-3 bg-slate-50 rounded-xl border-2 border-indigo-100">
            <span className="text-xs font-bold text-indigo-400 uppercase">Total Price</span>
            <span className="text-sm font-black text-indigo-600">${teacher.pricePerHour}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <button 
            onClick={onClose}
            className="py-3 text-sm font-bold text-slate-400 hover:bg-slate-50 rounded-xl transition-colors"
          >
            Go Back
          </button>
          <button 
            onClick={() => { alert("Demo: Session Booked!"); onClose(); }}
            className="py-3 bg-indigo-600 text-sm font-black text-white rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export const StudentAttendance = () => {
  const days = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.2 ? 'present' : Math.random() > 0.5 ? 'absent' : 'holiday'
  }));

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Professional Tile Calendar */}
        <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10 px-2">
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">January 2026</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Monthly Status Report</p>
            </div>
            <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
               <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-white shadow-sm rounded-lg">Month</button>
               <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">Year</button>
            </div>
          </div>

          {/* Clean Tile Grid */}
          <div className="grid grid-cols-7 gap-3">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">{d}</div>
            ))}
            
            {days.map((d) => (
              <div key={d.day} className="relative group">
                {/* Modern Tile Layout */}
                <div className={`
                  h-16 rounded-2xl border transition-all flex flex-col items-center justify-center
                  ${d.status === 'present' ? 'bg-slate-50 border-slate-100 border-l-4 border-l-emerald-500' : 
                    d.status === 'absent' ? 'bg-slate-50 border-slate-100 border-l-4 border-l-rose-500' : 
                    'bg-white border-slate-50 text-slate-300'}
                `}>
                  <span className={`text-sm font-black ${d.status === 'holiday' ? 'text-slate-200' : 'text-slate-700'}`}>
                    {d.day}
                  </span>
                  {d.status !== 'holiday' && (
                    <span className={`text-[8px] font-bold uppercase mt-1 ${d.status === 'present' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {d.status === 'present' ? 'On' : 'Off'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The White Sidebar Report (Keep as requested) */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-1">Performance Summary</h4>
            
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Attendance Score</p>
                <h3 className="text-4xl font-black text-indigo-600 mt-2">88%</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <span className="text-xs font-bold text-emerald-700">Total Present</span>
                  <span className="text-sm font-black text-emerald-700">24</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <span className="text-xs font-bold text-rose-700">Days Missed</span>
                  <span className="text-sm font-black text-rose-700">03</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 group mt-4">
                 <span className="text-xs uppercase tracking-widest">Download PDF</span>
                 <ICONS.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 border-dashed text-center">
             <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">
               Next Class: <span className="text-indigo-600">Maths at 4:00 PM</span>
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};