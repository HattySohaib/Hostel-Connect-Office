import React from "react";
import "./Dashboard.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Complaints from "../../components/Complaints/Complaints.jsx";
import Notices from "../../components/Notices/Notices";
import NoticeInput from "../../components/Notices/NoticeInput";
import Outpasses from "../../components/Outpasses/Outpasses";
import Mess from "../../components/Mess/Mess";
import Login from "../Login/Login";

function Dashboard() {
  return (
    <div id="dashboard">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Routes>
          <Route index path="/" element={<Complaints />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/notices" element={<Notices />} />
          <Route index path="/out-pass" element={<Outpasses />} />
          <Route index path="/mess-feedback" element={<Mess />} />
          <Route index path="/add-notice" element={<NoticeInput />} />
          <Route path="*" element={<h1>NO PAGES FOUND</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
