import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InovaCG from "./inova/inova";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InovaCG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;