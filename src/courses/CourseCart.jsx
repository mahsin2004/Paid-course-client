import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseCart = ({ course }) => {
  // const {
    // application_deadline,
    // course_posting_date,
    // course_title,
    // salary_range,
    // user_name,
  //   id,
  // } = course;

  return (
    <div>
      <div className=" bg-white border shadow-sm">
        <div className="p-4 grid lg:grid-cols-7 gap-5 items-center justify-center">
          <div className="lg:col-span-3">
            <img
              className="w-full h-full rounded-lg"
              src={course.thumbnail}
              alt="Thumbnail"
            />
          </div>
          <div className="lg:col-span-4 space-y-1">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              {course.name}
            </h1>
            <h1 className="text-xl md:text-3xl font-medium text-gray-700">
              {course.description}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-500">
              Instructor Name : {course.instructor}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-500">
              Course Duration: {course.duration}
            </h1>
            <h1 className="text-md lg:text-xl font-medium text-gray-600">
              Course Schedule: {course.schedule}
            </h1>
            <div className="grid grid-cols-2 gap-5 pt-2">
              <div >
                <Link to={`/details/${course.id}`} className="flex justify-center items-center py-2 text-base md:text-lg font-medium bg-gray-700 text-yellow-400 rounded-lg hover:text-white">
                  <button>View Details</button>
                </Link>
              </div>
              <div className="flex justify-center items-center py-2 text-base lg:text-lg font-medium bg-green-500  text-white rounded-lg hover:text-gray-600 cursor-pointer">
                <button >Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCart.propTypes = {
  course: PropTypes.object,
};

export default CourseCart;
