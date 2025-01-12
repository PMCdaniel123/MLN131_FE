import { useEffect, useState } from "react";
import { courses } from "../constants/constants";
import Course from "./Course";

function CourseList() {
  const [renderedCourses, setRenderedCourses] = useState([]);

  useEffect(() => {
    const timeouts = [];
    courses.forEach((course, index) => {
      const timeout = setTimeout(() => {
        setRenderedCourses((prev) => [...prev, course]);
      }, index * 1000);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <div className="bg-gray-50 py-10 mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Khóa học trực tuyến
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {renderedCourses.map((course, index) => (
          <Course key={index} index={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
