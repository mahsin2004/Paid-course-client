import { useEffect } from "react";


const CompleteCourses = () => {
    useEffect(() => {
        document.title = 'Complete Courses | Paid Courses'
      },[])
    return (
        <div className="px-10 pt-8 pb-10">
            <h1>hello</h1>
        </div>
    );
};

export default CompleteCourses;