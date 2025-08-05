import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import ProfileDetails from "./pages/ProfileDetails";
import RequestProfile from "./pages/RequestProfile";
import Layout from "./Layout/Layout";



const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/RequestProfile" element={<RequestProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
