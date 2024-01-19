import { Routes, Route } from 'react-router-dom';
import HomePage from '@/Pages/Homepage';
import CategoryPage from '@/Pages/Categorypage';
import LoginPage from '@/Pages/auth/LoginPage';
import SignUp from '@/Pages/auth/SignupPage';
import AdminLogin from '@/Pages/auth/AdminLogin';
import AdminSignin from '@/Pages/auth/AdminSignUp';
import Dashboard from '@/Pages/Dashboard';
import AdminUserPage from '@/Pages/AdminUserPage';
import React from 'react';
import LessonAnswerPage from '@/Pages/LessonAnswerPage';
import AdminDashboard from '@/Pages/AdminDashboard';
import CategoryListPage from '@/Pages/CategoryListPage';
import AddWordPage from '@/Pages/AddWordPage';

const Main: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-register" element={<AdminSignin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/users-list" element={<AdminUserPage />} />
      <Route path="/student/category/:id/" element={<LessonAnswerPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/categories" element={<CategoryListPage />} />
      <Route path="/admin/category/:id/add-word" element={<AddWordPage />} />
    </Routes>
  );
};

export default Main;
