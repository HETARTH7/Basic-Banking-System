import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View";
import Transfer from "./Transfer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
