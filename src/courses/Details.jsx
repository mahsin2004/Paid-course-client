import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    document.title = "Course Details | Paid Courses";
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const course = courses?.find(course => course.id === parseInt(id))
  console.log(course)


  return (
    <div className="max-w-5xl mx-auto px-10 pt-6 pb-14">
     <div className=" bg-white border shadow-sm">
        <div className="p-4 grid gap-5 items-center justify-center">
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src={course?.thumbnail}
              alt="Thumbnail"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {course?.name}
            </h1>
            <h1 className="text-xl md:text-3xl font-medium text-gray-700">
              {course?.description}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-500">
              Instructor Name : {course?.instructor}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-500">
              Course Duration: {course?.duration}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-600">
              Course Schedule: {course?.schedule}
            </h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
