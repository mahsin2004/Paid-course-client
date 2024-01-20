
import { useEffect, useState } from "react";
import Cart from "../component/Cart";
import axios from "axios";


const AllJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
      axios.get("/jobs").then((res) => {
        setJobs(res.data);
        console.log(res);
      });
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                jobs.map(job => <Cart key={job._id} job={job}></Cart>)
            }
        </div>
    );
};

export default AllJobs;