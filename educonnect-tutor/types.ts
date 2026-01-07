
export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  status: 'Active' | 'Suspended';
}

export interface TeacherProfile {
  id: string;
  userId: string;
  name: string;
  bio: string;
  rating: number;
  pricePerHour: number;
  subjects: string[];
  classes: string[];
  mode: 'Online' | 'Offline' | 'Hybrid';
  availability: string[];
  avatar: string;
  experience: number;
  location: {
    area: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  totalStudents: number;
}

export interface StudentProfile {
  id: string;
  userId: string;
  name: string;
  grade: string;
  parentContact: string;
  attendanceRate: number;
  joinedTeachers: string[]; 
  balance: number;
}

export interface Booking {
  id: string;
  studentId: string;
  teacherId: string;
  subject: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  price: number;
  location: string;
}

export interface Attendance {
  id: string;
  bookingId: string;
  studentId: string;
  teacherId: string;
  date: string;
  status: 'Present' | 'Absent';
  feedback?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'Credit' | 'Debit';
  description: string;
  date: string;
}

export interface Filters {
  subject: string;
  class: string;
  mode: string;
  priceRange: [number, number];
  rating: number;
  area: string;
}
