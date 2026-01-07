
import React, { useState } from 'react';
import { UserRole } from '../types';

interface AuthProps {
  onLogin: (role: UserRole) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);

  return (
    <div className="min-h-screen bg-indigo-600 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center bg-indigo-50 border-b border-indigo-100">
          <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">E</div>
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Sign in to your dashboard</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Login as</label>
            <div className="grid grid-cols-3 gap-2">
              {[UserRole.STUDENT, UserRole.TEACHER, UserRole.ADMIN].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                    role === r 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                    : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Email Address</label>
              <input 
                type="email" 
                defaultValue="demo@educonnect.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase">Password</label>
              <input 
                type="password" 
                defaultValue="password"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              />
            </div>
          </div>

          <button 
            onClick={() => onLogin(role)}
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all"
          >
            Enter Dashboard
          </button>

          <p className="text-center text-slate-400 text-sm">
            Don't have an account? <span className="text-indigo-600 font-bold cursor-pointer hover:underline">Sign up now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
