// routes/AppRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import { Suspense } from 'react';
import Loading from '../components/Loader/Loader'; // Import the loading component
import Login from '../pages/Login/login';
import Dashboard from '../pages/Dashboard/dashboard';
import Advising from '../pages/Advising/advising';
import GradeHistory from '../pages/GradeHistory/gradehistory';
import Payments from '../pages/Payments/payment';
import Attendance from '../pages/Attendence/Attendance';
import AcademicProgress from '../pages/AcademicProgress/academicprogress';
import DegreeApply from '../pages/DegreeApply/degreeapply';
import CourseDrop from '../pages/CourseDrop/coursedrop';
import UserGuide from '../pages/UserGuide/UserGuide';
import FacultyEvaluation from '../pages/FacultyEvaluation/facultyevaluation';
import Services from '../pages/Services/services';
import Settings from '../pages/Settings/settings';

const AppRoutes = () => (
  
  <Routes>
    {/* Public Route */}
    <Route element={<PublicLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} /> {/* Show login at root */}
    </Route>

    {/* Private Routes */}
    <Route element={<PrivateLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/advising" element={<Advising />} />
      <Route path="/grade-history" element={<GradeHistory />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/academic-progress" element={<AcademicProgress />} />
      <Route path="/degree-apply" element={<DegreeApply />} />
      <Route path="/course-drop" element={<CourseDrop />} />
      <Route path="/user-guide" element={<UserGuide />} />
      <Route path="/faculty-evaluation" element={<FacultyEvaluation />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settings" element={<Settings />} />
      
      {/* Redirect any unmatched private routes to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Route>
  </Routes>
  
);

export default AppRoutes;