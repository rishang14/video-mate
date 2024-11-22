import { useLocation } from 'react-router-dom';
import Nav from '../Ui/Nav';
import React from 'react';
import SideBar from '../Ui/SideBar';


export default function Layout({ children }:{children:React.ReactNode}) {
  const location = useLocation();
  
  // Define routes where the Sidebar should not appear
  const noSidebarRoutes = ['/login', '/signup'];

  return (
    <>
      <Nav />
      <div className='flex '>
      <div className="flex  ">
        {!noSidebarRoutes.includes(location.pathname) && <SideBar />}
        </div>
        <div className='md:flex md:flex-1'>
      {children}
        </div>
        </div>
    </>
  );
}
