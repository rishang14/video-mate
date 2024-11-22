import { useLocation } from 'react-router-dom';
import Nav from '../Ui/Nav';
import React from 'react';


export default function Layout({ children }:{children:React.ReactNode}) {
  const location = useLocation();
  
  // Define routes where the Sidebar should not appear
  const noSidebarRoutes = ['/login', '/signup'];

  return (
    <>
      <Nav />
      {/* <div className="content-wrapper"> */}
        {/* Show Sidebar unless on Login/Signup routes */}
        {/* {!noSidebarRoutes.includes(location.pathname) && <Sidebar />} */}
      {children}
    </>
  );
}
