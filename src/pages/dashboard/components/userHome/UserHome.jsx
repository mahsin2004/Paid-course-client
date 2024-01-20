import { useEffect } from "react";


const UserHome = () => {
    useEffect(() => {
        document.title = 'Dashboard | Paid Courses'
      },[])
    return (
        <div className="px-10 pt-8 pb-10">
            <h1>Hello</h1>
        </div>
    );
};

export default UserHome;