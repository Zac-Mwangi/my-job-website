import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";
import JobList from "./components/JobList/JobList";
import JobDetails from "./components/JobDetails/JobDetails";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddJob from "./components/AddJob/AddJob";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-job" element={<AddJob />} />
      </Routes>
    </div>
  );
}
