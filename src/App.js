import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

import Javapage from './components/java/JavaPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DsaPage from './components/dsa/DsaPage';
import ProjectsPage from './components/ProjectsPage';
import Array from './pages/dsapages/Array';
import Stack from './pages/dsapages/Stack';
import PracticePage from './components/PracticePage';
import DsaProblems from './components/dsa/DsaProblems';
import ProfilePage from './components/ProfilePage';
import PreviousSubmissionsPage from './components/PreviousSubmissionsPage';
import SiteHomePage from './components/SiteHomePage';
import DBMSOverviewPage from './components/dbms/DBMSOverviewPage';
import MySQLPage from './components/dbms/mysql/MySQLPage';
import MongoDBPage from './components/dbms/MongoDBPage';
import HibernatePage from './components/frameworks/hibernate/HibernatePage';
import InterviewHomePage from './components/interviewprep/InterviewHomePage';
import MockInterviewQuestionsPage from './components/interviewprep/MockInterviewQuestionsPage';
import MockInterviewPracticePage from './components/interviewprep/MockInterviewPracticePage';
import CodingChallengePractice from './components/interviewprep/codingchallenge/CodingChallengePractice';
import ReverseString from './pages/dsaproblemsolutions/ReverseString';
import EditProfile from './components/EditProfile';
import SpringbootPage from './components/frameworks/springboot/SpringbootPage';
import SQLPracticeQuestions from './components/dbms/mysql/SQLQueryQuestions';
import SQLPractice from './components/dbms/mysql/SQLPractice';
import SQLSubmission from './components/dbms/mysql/SQLSubmission';
import JobSearchPage from './components/job/JobSearchPage';
import AbstractionTest from './tests/java/AbstractionTest';
import JavaDashboard from './components/java/JavaDashboard';
import ClassTest from './tests/java/ClassTest';
import JavaOverviewTest from './tests/java/JavaOverviewTest';
import ObjectInJava from './pages/javapages/Object';
import { Outlet } from 'react-router-dom';
import ObjectTestPage from './tests/java/ObjectTest';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdminPanel from './components/admin-panel/AdminPanel';
import AdminDashboard from './components/admin-panel/AdminDashboard';
import ManageUsers from './components/admin-panel/ManageUsers';
import Messages from './components/admin-panel/Messages';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsandConditions';
import FAQ from './components/FAQ';
import HelpCenter from './components/HelpCenter';
import ReportBug from './components/ReportBug';
import BugReports from './components/admin-panel/BugReports';
import ComingSoonPage from './pages/ComingSoonPage';


function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                {/* Add ToastContainer just below BrowserRouter */}
                <ToastContainer /> {/* This will allow toasts to show globally */}

                <Routes>
                    <Route path="/" element={<SiteHomePage />} />
                    <Route path="/javapage" element={<Javapage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/array" element={<Array />} />
                    <Route path="/stack" element={<Stack />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/dsa/intro" element={<ComingSoonPage />} />
                    <Route path="/dsa/problems" element={<DsaProblems />} />
                    <Route path="/dsa/problems/practice" element={<PracticePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path='/previous-submissions' element={<PreviousSubmissionsPage />} />
                    <Route path="/dbmsoverview" element={<ComingSoonPage />} />
                    <Route path="/mysql" element={<ComingSoonPage />} />
                    <Route path="/mongodb" element={<ComingSoonPage />} />
                    <Route path='/hibernate' element={<ComingSoonPage />} />
                    <Route path='/springboot' element={<ComingSoonPage />} />
                    <Route path='/interview' element={<InterviewHomePage />} />
                    <Route path='/mock-interview' element={<MockInterviewQuestionsPage />} />
                    <Route path='/mock-interview-practice' element={<MockInterviewPracticePage />} />
                    <Route path='/coding-challenge' element={<CodingChallengePractice />} />
                    <Route path='/solutions' element={<ReverseString />} />
                    <Route path='/edit-profile' element={<EditProfile />} />
                    <Route path='/sql-questions' element={<SQLPracticeQuestions />} />
                    <Route path='/sql-practice' element={<SQLPractice />} />
                    <Route path="/sql-submission" element={<SQLSubmission />} />
                    <Route path="/jobsearch" element={<JobSearchPage />} />
                    <Route path="/java/abstraction/test" element={<AbstractionTest />} />
                    <Route path="/java/javadashboard" element={<JavaDashboard />} />

                    <Route path="/class-test" element={<ClassTest />} />
                    <Route path="/javaoverview-test" element={<JavaOverviewTest />} />
                    <Route path="/object-test" element={<ObjectTestPage />} />

                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path='/report-bug' element={<ReportBug/>}/>


                    <Route path="admin" element={<AdminPanel />}>
                        <Route index element={<AdminDashboard />} /> {/* 👈 This is the fix */}
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="users" element={<ManageUsers />} />
                        <Route path="messages" element={<Messages />} />
                        <Route path='bugs' element={<BugReports/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
