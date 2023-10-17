import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/Main_page";
import ControlMain from "./components/Control_main";
import Login from "./components/Login";
import Join from "./components/Join";
import Notice_main from "./components/Notice_main";
import Notice_detail from "./components/Notice_detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/controlMain" element={<ControlMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Notice_main" element={<Notice_main />} />
        <Route path="/Notice_detail" element={<Notice_detail />} />
      </Routes>
    </Router>
  );
}

export default App;
