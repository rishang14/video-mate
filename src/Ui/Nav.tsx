import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <nav className="w-full p-4 bg-black backdrop:blur-lg  shadow-transparent">
      <div className=" w-full  px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
        
            <h1 className="text-xl font-bold font-primary text-white cursor-pointer">
              {" "}
              VidoeMate
            </h1> 

            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
