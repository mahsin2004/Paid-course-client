import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-tr from-gray-800 to-gray-800 ">
      <div className="max-w-[1440px] px-16 py-14 mx-auto ">
        <div className="">
          <div className="flex justify-center">
            <div className="">
              <div className="flex flex-col items-center">
                <img
                  className="w-20 mb-1"
                  src="https://i.postimg.cc/ydJtjh0Q/education-White.png"
                  alt="logo"
                />
                <p className=" text-3xl font-medium text-white">Paid Courses</p>
              </div>
            </div>
          </div>
          <div className="text-white mt-8 text-center"></div>
        </div>
        
        <h1 className="h-[.5px] rounded-full bg-white/30 my-4"></h1>
        <section className="flex flex-col lg:flex gap-3 justify-between">
          <div className="flex justify-center text-white">
            <div className="lg:flex lg:gap-8 text-center space-y-2">
              <div className="flex justify-center">
                <div className="flex items-center gap-1">
                  <span className="text-md">
                    <BsTelephoneFill></BsTelephoneFill>
                  </span>
                  <p>+8801741156408</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-1">
                  <span className="text-xl">
                    <MdEmail></MdEmail>
                  </span>
                  <p>info@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">
                  <MdLocationOn></MdLocationOn>
                </span>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
          <div className="text-center text-white">
            <p>© 2023 Paid Courses. All Rights Reserved.</p>
          </div>
          <div className="flex justify-center gap-1 lg:gap-3">
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800 transition">
              <BsInstagram></BsInstagram>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <BsTwitter></BsTwitter>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <FaLinkedin></FaLinkedin>
            </button>
            <button className="text-gray-800 bg-white rounded-full p-2 hover:text-white hover:bg-gray-800  transition">
              <BsYoutube></BsYoutube>
            </button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
