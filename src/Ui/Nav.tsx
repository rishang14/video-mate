import React from "react";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { Input } from "../components/ui/input";
// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <nav className="w-full p-4 bg-foreground backdrop:blur-lg  shadow-transparent">
      <div className=" w-full   lg:px-8">
        <div className="flex  items-center md:gap-0 gap-2 justify-between">
          <div className=" md:flex md:items-center md:gap-12">
            <Link to={"/"}>
            <h1 className="text-xl font-bold font-primary text-white cursor-pointer">
              {" "}
              VidoeMate
            </h1>
            </Link>
          </div>
          <div className=" flex  flex-1 items-center justify-center md:px-4  ">
            <div className="md:flex  relative  hidden flex-1 justify-center">
              <Input
                className="text-white relative lg:w-[500px]  rounded-2xl md:w-[300px] pl-[30px] "
                placeholder="Search Channel Name" />
                <IoIosSearch className="text-gray-200 lg:block hidden absolute top-2 left-[290px] text-xl" />
            </div>
            <div className="flex md:gap-6 gap-3 items-center justify-between ">
            <div className="flex md:px-3 md:py-1 rounded-2xl items-center gap-2   hover:bg-hover">
            <RxAvatar color="white" className="text-icons"/> 
            <Link className="text-white " to={"/signup"}>SignUp</Link>  
            </div>
              <span className="flex items-center justify-center  cursor-pointer w-10 h-10 rounded-full hover:bg-hover">
                <RiVideoUploadLine color="white" className="text-icons" />
              </span>
              <span className="flex items-center justify-center  cursor-pointer w-10 h-10 rounded-full hover:bg-hover">
                <IoIosNotificationsOutline color="white" className="text-icons" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>  
    {/* <Outlet/> */}
    </>
  );
};

export default Nav;
