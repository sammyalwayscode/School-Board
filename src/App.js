import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/AdminDashboard/BoardRoutes/Dashboard/Dashboard";
import Teachers from "./components/AdminDashboard/BoardRoutes/Teachers/Teachers";
import Header from "./components/Header/Header";
import Home from "./components/AdminDashboard/Home";
import { MainGlobal } from "./ContexGlobal/Global";
import Students from "./components/AdminDashboard/BoardRoutes/Students/Students";
import Parents from "./components/AdminDashboard/BoardRoutes/Parents/Parents";
import Account from "./components/AdminDashboard/BoardRoutes/Accounts/Account";
import Class from "./components/AdminDashboard/BoardRoutes/Class/Class";
import Subject from "./components/AdminDashboard/BoardRoutes/Subject/Subject";
import Routine from "./components/AdminDashboard/BoardRoutes/Routine/Routine";
import Attendance from "./components/AdminDashboard/BoardRoutes/Attendance/Attendance";
import Events from "./components/AdminDashboard/BoardRoutes/Events/Events";

const App = () => {
  return (
    <MainGlobal>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/account" element={<Account />} />
          <Route path="/class" element={<Class />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </MainGlobal>
  );
};

export default App;
