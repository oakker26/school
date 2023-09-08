import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Banner from "./components/home/Banner";
import Cards from "./components/home/Cards";
import Why from "./components/home/Why";
import AboutUs from "./components/home/AboutUs";
import PopularCourse from "./components/home/PopularCourse";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Cards />
      <PopularCourse/>
      <Why />
      <AboutUs/>
      <Footer />
    </div>
  );
}

export default App;
