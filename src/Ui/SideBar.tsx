import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome, HiHome } from "react-icons/hi";
import {
  MdOutlineSubscriptions,
  MdSubscriptions,
  MdOutlineHistory,
  MdPlaylistAddCheck,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const data = [
  {
    para: "Home",
    icon: <HiOutlineHome color="white" className="text-icons" />,
    ActiveIcon: <HiHome color="white" className="text-icons" />,
    link: "/",
  },
  {
    para: "Subscriptions",
    icon: <MdOutlineSubscriptions color="white" className="text-icons" />,
    ActiveIcon: <MdSubscriptions color="white" className="text-icons" />,
    link: "/subscription/videos",
  },
  {
    para: "Playlist",
    icon: <MdPlaylistAddCheck color="white" className="text-icons" />,
    link: "/playlist",
  },
  {
    para: "My-Vidoes",
    icon: <MdOutlineVideoLibrary color="white" className="text-icons" />,
    link: "/myvideos",
  },
  {
    para: "History",
    icon: <MdOutlineHistory color="white" className="text-icons" />,
    link: "/history",
  },
  {
    para: "Liked-Videos",
    icon: <AiOutlineLike color="white" className="text-icons" />,
    link: "/liked-videos",
  },
];

const SideBar = () => {
  const activePath = useLocation();
  console.log(activePath);
  return (
    <div className="md:w-[250px] flex flex-col bg-foreground max-h-screen  p-4 cursor-pointer">
      <div className="flex flex-col md:gap-3 gap-2  flex-wrap">
        {data.map((item) => (
          <Link
            to={item.link}
            className={`flex items-center md:flex-row flex-col md:justify-normal justify-center ${
              item.link === activePath.pathname && "bg-hover"
            } hover:bg-hover rounded-lg gap-3  md:p-4  p-2 h-[50px]`}
            key={item.para}
          >
            <span className="">{item.link === activePath.pathname ? (item?.ActiveIcon) ?? item.icon : item.icon }</span>
            <p className="text-sideText md:block hidden text-white">{item.para}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
