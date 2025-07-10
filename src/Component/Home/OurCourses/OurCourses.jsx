import React from "react";
import "./OurCourses.css";
import course1 from "../../../assets/backgroundpic.jpg";
import { courses } from "../../../assets/assests";

const OurCourses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="All-courses">
        {courses.map((course, index) => (
          <div className="course" key={course.id}>
            <img src={course.img} alt="" />
            <h3>{course.name}</h3>
            <h4>{course.level}</h4>
            <h4>Language:{course.language}</h4>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
