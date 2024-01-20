import { TbEdit } from "react-icons/tb";
import { BsPinAngle } from "react-icons/bs";
import { RiShieldStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClientGuide = () => {
  return (
    <div className="py-10 lg:py-28 px-8 max-w-[1440px] mx-auto ">
      <div className="lg:flex lg:gap-6 lg:justify-between lg:items-center">
        <div className="">
          <img
            className="lg:w-[550px]"
            src="https://i.postimg.cc/7ZRGBvC7/client-Guide.gif"
            alt="animation"
          />
        </div>
        <div className="space-y-6 mt-10 lg:m-0">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-700">
          For every type of learner
          </h2>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div>
                <TbEdit className="text-2xl"></TbEdit>
              </div>
              <div>
                <h4>No cost to join</h4>
                <p>
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </p>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <BsPinAngle className="text-2xl"></BsPinAngle>
              </div>
              <div>
                <h4>Top talent</h4>
                <p>
                All of us are unique learners, we study at our own speed and with different
                </p>
              </div>
            </div>
            <div className="flex  gap-2">
              <div>
                <RiShieldStarFill className="text-2xl"></RiShieldStarFill>
              </div>
              <div>
                <h4>One-on-one guidance</h4>
                <p>
                My monthly performance is tracked by a dedicated mentor who provides my parents and me with regular counselling.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 lg:flex lg:items-center">
            <div className="">
            <Link to="/register" className="text-xl bg-gray-700 text-white px-6 py-3 rounded-full mr-4">
              Register for free
            </Link>
            </div>
            <button className="text-xl mt-5 lg:mt-0 border-gray-800 border-2 text-gray-700 px-6 py-2 rounded-full">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGuide;
