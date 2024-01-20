import { useEffect, useState } from "react";
import Cart2 from "./Cart2";

const CompleteCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    document.title = "Complete Courses | Paid Courses";
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const course = courses?.filter(
    (course) => course.completeCourse === "done"
  );
  console.log(course);
  return (
    <div className="px-10 pt-8 pb-10">
      {course.map((course) => (
        <Cart2 key={course.id} course={course}></Cart2>
      ))}
    </div>
  );
};

export default CompleteCourses;
