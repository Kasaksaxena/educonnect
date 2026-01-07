
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Search, 
  BarChart3, 
  Settings, 
  LogOut, 
  UserCircle, 
  Clock, 
  Star, 
  CheckCircle2,
  Filter,
  ArrowRight,
  MapPin,
  Map,
  ShieldCheck,
  LayoutDashboard,
  MessageSquare,
  Wallet,
  Download,
  AlertCircle,
  MoreVertical,
  Plus
} from 'lucide-react';
import { TeacherProfile, Booking, Attendance, User, UserRole, Message, Transaction } from './types';

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Aman Kumar', email: 'aman@demo.com', role: UserRole.STUDENT, avatar: 'https://i.pravatar.cc/150?u=u1', status: 'Active' },
  { id: 'u2', name: 'Dr. Sarah Wilson', email: 'sarah@edu.com', role: UserRole.TEACHER, avatar: 'https://i.pravatar.cc/150?u=u2', status: 'Active' },
  { id: 'u3', name: 'Admin User', email: 'admin@educonnect.com', role: UserRole.ADMIN, avatar: 'https://i.pravatar.cc/150?u=u3', status: 'Active' }
];

export const MOCK_TEACHERS: TeacherProfile[] = [
  {
    id: 't1',
    userId: 'u2',
    name: 'Dr. Sarah Wilson',
    bio: 'PhD in Mathematics with 10 years of experience in competitive exams prep. Specialized in Calculus and Algebra.',
    rating: 4.9,
    pricePerHour: 800,
    subjects: ['Mathematics', 'Physics'],
    classes: ['10th', '11th', '12th'],
    mode: 'Online',
    availability: ['Mon 4:00 PM', 'Wed 4:00 PM', 'Fri 4:00 PM'],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    experience: 12,
    location: { area: 'Bandra West', city: 'Mumbai' },
    totalStudents: 120
  },
  {
    id: 't2',
    userId: 'u11',
    name: 'Prof. James Miller',
    bio: 'Language expert specializing in English Literature and Creative Writing for high school students.',
    rating: 4.7,
    pricePerHour: 600,
    subjects: ['English', 'Literature'],
    classes: ['8th', '9th', '10th'],
    mode: 'Hybrid',
    availability: ['Tue 5:00 PM', 'Thu 5:00 PM'],
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    experience: 8,
    location: { area: 'Hauz Khas', city: 'Delhi' },
    totalStudents: 85
  },
  {
    id: 't3',
    userId: 'u12',
    name: 'Anjali Sharma',
    bio: 'Coding enthusiast teaching Python and Java to young learners. Former software engineer at Google.',
    rating: 4.8,
    pricePerHour: 1200,
    subjects: ['Computer Science', 'Python'],
    classes: ['11th', '12th'],
    mode: 'Offline',
    availability: ['Sat 10:00 AM', 'Sun 10:00 AM'],
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    experience: 5,
    location: { area: 'Koramangala', city: 'Bangalore' },
    totalStudents: 45
  },
  {
    id: 't4',
    userId: 'u13',
    name: 'Rahul Mehta',
    bio: 'Expert in Chemistry and Biology. Helps students with NEET preparation and foundation courses.',
    rating: 4.6,
    pricePerHour: 750,
    subjects: ['Chemistry', 'Biology'],
    classes: ['9th', '10th', '11th'],
    mode: 'Online',
    availability: ['Mon 6:00 PM', 'Tue 6:00 PM', 'Wed 6:00 PM'],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    experience: 7,
    location: { area: 'Salt Lake', city: 'Kolkata' },
    totalStudents: 92
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'b1', studentId: 'u1', teacherId: 't1', subject: 'Mathematics', date: '2024-05-20', time: '04:00 PM', status: 'Upcoming', price: 800, location: 'Online' },
  { id: 'b2', studentId: 'u1', teacherId: 't2', subject: 'English', date: '2024-05-18', time: '05:00 PM', status: 'Completed', price: 600, location: 'Hauz Khas, Delhi' }
];

export const MOCK_ATTENDANCE: Attendance[] = [
  { id: 'a1', bookingId: 'b2', studentId: 'u1', teacherId: 't2', date: '2024-05-18', status: 'Present', feedback: 'Great performance in the quiz today!' },
  { id: 'a2', bookingId: 'b3', studentId: 'u1', teacherId: 't1', date: '2024-05-15', status: 'Present', feedback: 'Excellent grasp of trigonometry.' },
  { id: 'a3', bookingId: 'b4', studentId: 'u1', teacherId: 't1', date: '2024-05-12', status: 'Absent' },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', senderId: 'u2', receiverId: 'u1', text: 'Hi Aman, please complete the assignment before today\'s session.', timestamp: '10:30 AM', isRead: false },
  { id: 'm2', senderId: 'u1', receiverId: 'u2', text: 'Sure Dr. Sarah, I am almost done with it.', timestamp: '10:45 AM', isRead: true }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tr1', amount: 800, type: 'Debit', description: 'Payment for Math session', date: '2024-05-20' },
  { id: 'tr2', amount: 2000, type: 'Credit', description: 'Wallet Top-up', date: '2024-05-19' },
  { id: 'tr3', amount: 600, type: 'Debit', description: 'Payment for English session', date: '2024-05-18' }
];

export const ICONS = {
  Users, Calendar, BookOpen, Search, BarChart3, Settings, LogOut, UserCircle, Clock, Star, CheckCircle2, Filter, ArrowRight, MapPin, Map, ShieldCheck, LayoutDashboard, MessageSquare, Wallet, Download, AlertCircle, MoreVertical, Plus
};
