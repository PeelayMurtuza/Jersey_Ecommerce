import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Premium from "./components/Premium";
import MasterCopy from "./components/MasterCopy";
import FirstCopy from "./components/FirstCopy";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    
      <div className=" flex flex-col md:flex-row justify-between items-center h-16 px-4 md:px-8 shadow-lg bg-gradient-to-r from-slate-900 to-slate-900
">
        <NavLink to="/" className="text-white text-2xl font-bold py-2">
         Premium Pitch Wear
        </NavLink>
        <div className="bg-red-100 flex flex-wrap gap-4 md:gap-10 items-center px-4 md:px-5 py-2 md:py-1 rounded-full mt-2 md:mt-0">
          <NavLink
            to="/premium"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            Premium
          </NavLink>
          <NavLink
            to="/mastercopy"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            MasterCopy
          </NavLink>
          <NavLink
            to="/firstcopy"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            FirstCopy
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/mastercopy" element={<MasterCopy />} />
        <Route path="/firstcopy" element={<FirstCopy />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
