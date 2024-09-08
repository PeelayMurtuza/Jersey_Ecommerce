import React from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Premium from "./components/Premium"
import MasterCopy from "./components/MasterCopy"
import FirstCopy from "./components/FirstCopy"

function App() {



  return (
    <>
      <BrowserRouter>

        <div className="bg-red-500 flex justify-between items-center pr-60 h-12 ">

          <div className="">Jersey Mania</div>

          <div className=" bg-red-100 flex gap-52 h-10 items-center px-5 rounded-full">
            <NavLink to="/premium">Premium</NavLink>
            <NavLink to="/mastercopy">MasterCopy</NavLink>
            <NavLink to="/firstcopy">FirstCopy</NavLink>
          </div>
        </div>

        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/mastercopy" element={<MasterCopy />} />
          <Route path="/firstcopy" element={<FirstCopy />} />
        </Routes>

      </BrowserRouter>
    </>
  );

}

export default App;
