import React from "react";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { RiVideoUploadLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";

const Popoverdata = [
  {
    para: "My Profile",
    href: "/",
    icon: <RxAvatar color="white" className="text-icons" />,
  },
  {
    para: "Log-out",
    href: "/",
    icon: <LiaSignOutAltSolid color="white" className="text-icons" />,
  },
];

const TooltipData = [
  {
    icon: <RiVideoUploadLine color="white" className="text-icons" />,
    para: "Upload",
  },
  {
    icon: <IoIosNotificationsOutline color="white" className="text-icons" />,
    para: "Notifications",
  },
];

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
                  placeholder="Search Channel Name"
                />
                <IoIosSearch className="text-gray-200 lg:block hidden absolute top-2 left-[290px] text-xl" />
              </div>
              <div className="flex md:gap-6 gap-3 items-center justify-between ">
                <div className="flex md:px-3 md:py-1 rounded-2xl items-center gap-2   hover:bg-hover">
                  <RxAvatar color="white" className="text-icons" />
                  <Link className="text-white " to={"/signup"}>
                    SignUp
                  </Link>
                </div>
                <IconWithToolTip data={TooltipData}/>
                {/* <AvatarWithPopOver /> */}
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

const AvatarWithPopOver = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className=" w-8 h-8 cursor-pointer">
          {/* <AvatarImage /> */}
          <AvatarFallback className="text-icons">A</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] bg-foreground">
        <div className="flex flex-col ">
          {Popoverdata.map((item) => (
            <Link
              to={item.href}
              className={`flex items-center md:flex-row   hover:bg-hover rounded-lg  gap-2   p-2 `}
              key={item.para}
            >
              <span className="">{item.icon}</span>
              <p className="text-sideText  text-white">{item.para}</p>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

type TooltipData={
icon:JSX.Element,
para:string
}


const IconWithToolTip=({data}:{data:TooltipData[]})=>{
  return(
    <TooltipProvider>
   {
    data.map(item=>(
      <Tooltip key={item.para}>
      <TooltipTrigger asChild>
        <span className="flex items-center justify-center  cursor-pointer w-10 h-10 rounded-full hover:bg-hover">
          {item.icon}
        </span>
      </TooltipTrigger>
      <TooltipContent className="bg-secondarybg p-2">
        <p className="text-paraText">{item.para}</p>
      </TooltipContent>
    </Tooltip>
    ))
   }
  </TooltipProvider>
  )
}