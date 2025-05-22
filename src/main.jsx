import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import KakaoLogin from "./components/KakaoLogin";
import NaverLogin from "./components/NaverLogin";
import AdminDashboard from "./components/AdminDashboard";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/kakao-login" element={<KakaoLogin />} />
      <Route path="/naver-login" element={<NaverLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
