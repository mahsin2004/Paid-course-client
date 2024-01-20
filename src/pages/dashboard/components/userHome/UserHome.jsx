import { useEffect, useState } from "react";
import Cart1 from "./Cart1";


const UserHome = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      document.title = "Course Details | Paid Courses";
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
  
    const course = courses?.filter(course => course.enrollmentStatus === "True" && course.completeCourse === "none")
    console.log(course)
    return (
        <div className="px-10 pt-8 pb-10">
            {course.map(course => <Cart1 key={course.id} course={course}></Cart1>)}
        </div>
    );
};

export default UserHome;