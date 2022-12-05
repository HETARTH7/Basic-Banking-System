import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View";
import Transfer from "./Transfer";
import Info from "./Info";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
