import React from "react";
import { View } from "react-native";
import LoginPage from "./pages/LoginPage";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </NativeRouter>
  );
}
