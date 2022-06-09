import React from "react";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectDetail from "./ProjectDetail";
import StandardNavMenu from "./components/StandardNavMenu";

const App = () => {
  return (
    <div className=" bg-[#242933] relative">
      <StandardNavMenu></StandardNavMenu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/projectdetail"
          element={<ProjectDetail></ProjectDetail>}
        ></Route>
      </Routes>
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
