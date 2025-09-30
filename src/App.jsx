// import React from "react";
// import WelcomePage from "./components/LoginPage/WelcomePage";
// import OTP from "./components/LoginPage/OTP";
// import LoginSuccessful from "./components/LoginPage/LoginSuccessful";
// // import ToggleBox from "./Component/LoginPage/ToggleBox";

// function App() {
//   return (
//     <>
//       <WelcomePage />
//       <OTP />
//       <LoginSuccessful />
//       {/* <ToggleBox /> */}
//     </>
//   );
// }

// export default App;
// --------------------------------------------------------
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./shared/Sidebar.jsx";
import Navbar from "./shared/Navbar.jsx";
import StudentPage from "./pages/admin/StudentPage.jsx";
import StudentDetail from "./pages/admin/StudentDetail.jsx";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ConfigurationPage from "./pages/admin/ConfigurationPage.jsx";
import TeacherDetails from "./pages/admin/TeacherDetails.jsx";

import DetailStudentConfiguration from "./components/admin/Configuration/DetailStudentConfiguration.jsx";

import { FormConfigProvider } from "../src/context/FormConfigContext.jsx"; // adjust path
import ClassesPage from "./pages/admin/ClassesPage.jsx";
import ClassesDetail from "./pages/admin/ClassesDetail.jsx";
import SubjectsPage from "./pages/admin/SubjectsPage.jsx";
import ReviewManagement from "./pages/admin/ReviewManagement.jsx";
import FeesManagementPage from "./pages/admin/FeesManagementPage.jsx";
import NoticeManagementPage from "./pages/admin/NoticeManagementPage.jsx";
import ParentsPage from "./pages/admin/ParentsPage.jsx";
import DonorsPage from "./pages/admin/DonorsPage.jsx";
import PayrollManagement from "./pages/admin/PayrollManagement.jsx";
import AttendanceManagementPage from "./pages/admin/AttendanceManagementPage.jsx";
import TeacherPage from "./pages/admin/TeacherPage.jsx";
import SuperAdminDashboardPage from "./pages/superAdmin/SuperAdminDashboardPage.jsx";
import SuperAdminCustomer from "./pages/superAdmin/SuperAdminCustomer.jsx";
import SuperAdminPricingPage from "./pages/superAdmin/SuperAdminPricingPage.jsx";
import SuperAdminBillingPage from "./pages/superAdmin/SuperAdminBillingPage.jsx";
import SuperAdminRenewelsPage from "./pages/superAdmin/SuperAdminRenewelsPage.jsx";
import SuperAdminInvoices from "./pages/superAdmin/SuperAdminInvoices.jsx";
import SuperAdminSettingPage from "./pages/superAdmin/SuperAdminSettingPage.jsx";
import DivisionPage from "./pages/admin/DivisionPage.jsx";

const App = () => {
  return (
    <FormConfigProvider>
      <div className="flex h-screen bg-gray-50 w-full">
        <Sidebar />
        <div className="flex-1  flex flex-col  w-full md:w-100 lg:w-100">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-4 no-scrollbar">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/students" element={<StudentPage />} />
              <Route path="/division" element={<DivisionPage />} />
              <Route path="/students/:grNo" element={<StudentDetail />} />
              <Route path="/teachers" element={<TeacherPage />} />
              <Route path="/teachers/:id" element={<TeacherDetails />} />
              <Route path="/configuration" element={<ConfigurationPage />} />
              <Route
                path="/configuration/student-form"
                element={<DetailStudentConfiguration />}
              />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/classes/:classname" element={<ClassesDetail />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/review-management" element={<ReviewManagement />} />
              <Route path="/fees-management" element={<FeesManagementPage />} />
              <Route
                path="notice-management"
                element={<NoticeManagementPage />}
              />
              <Route path="/parents" element={<ParentsPage />} />
              <Route path="/donors" element={<DonorsPage />} />
              <Route
                path="payroll-management"
                element={<PayrollManagement />}
              />
              <Route
                path="attendance-management"
                element={<AttendanceManagementPage />}
              />

              <Route
                path="/superadmin/dashboard"
                element={<SuperAdminDashboardPage />}
              />
              <Route
                path="/superadmin/customer"
                element={<SuperAdminCustomer />}
              />
              <Route
                path="/superadmin/billing"
                element={<SuperAdminBillingPage />}
              />
              <Route
                path="/superadmin/pricing"
                element={<SuperAdminPricingPage />}
              />
              <Route
                path="/superadmin/renewals"
                element={<SuperAdminRenewelsPage />}
              />
              <Route
                path="/superadmin/invoices"
                element={<SuperAdminInvoices />}
              />
              <Route
                path="/superadmin/setting"
                element={<SuperAdminSettingPage />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </FormConfigProvider>
  );
};

export default App;
