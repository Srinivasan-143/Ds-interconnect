import React from "react";
import "./home.css";
import MainBanner from "./MainBanner/MainBanner";
import OurCourses from "./OurCourses/OurCourses";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="entire-home">
      <MainBanner />
      <OurCourses />
      <Projects />
    </div>
  );
};

export default Home;
