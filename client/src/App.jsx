import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfileDetails from "./pages/ProfileDetails";
import RequestProfile from "./pages/RequestProfile";

const App = () => {
  return (
    <div>
      {/* <Login /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/RequestProfile" element={<RequestProfile />} />
      </Routes>
    </div>
  );
};

export default App;
