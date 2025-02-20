import React from "react";
import { Button } from "@/components/ui/button";
import img from "../assets/CG_Logo.png";
import { authStore } from "../Stores/store.js"
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from "react-router-dom";


const Revamp = () => {

  const { isAuthenticated, user, token, Temp } = authStore();
  console.log("Current Zustand State:", authStore.getState());

  const menuItems = [
    { Title: "Portfolio", Link: "port" },
    { Title: "CG Community", Link: "cg-community" },
    { Title: "Resources", Link: "resources" },
    { Title: "Events", Link: "event" },
    { Title: "Projects", Link: "project" }
  ];

  return (

    <>

      <div className="flex">
        <div className="bg-[#101426] h-screen flex w-[300px] fixed rounded-r-2xl">

          {/* Sidebar */}
          <div className="bg-[#121729] h-screen border-r border-[#7e22ce] rounded-2xl flex flex-col">

            {/* Logo */}
            <div className="scale-75 pt-3 pb-1 flex justify-center">
              <img className="border-red-50 z-10" src={img} alt="CG Logo" />
            </div>

            {/* Divider */}
            <div className="border-b border-[#7e22ce]  w-full"></div>


            {/* Links and Footer Button */}

            <div className="p-3 flex flex-col flex-1 justify-between mt-5">
              {/* Navigation Links */}
              <div>
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.Link}
                    className={({ isActive }) =>
                      isActive ? "" : ""
                    }
                  >
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-[#923dee2b] hover:text-white w-full mb-4"
                    >
                      {item.Title}
                    </Button>
                  </NavLink>
                ))}
              </div>

              {/* Footer Button */}

              <div>
                {isAuthenticated ? <p className="text-white">{user?.email}{"  "}{user?.name}</p>
                  : (
                    <Link to={'/login'}>
                      <Button
                        variant="secondary"
                        className="text-white hover:bg-[#923dee2b] bg-black hover:text-white w-full mb-4"
                      >
                        Login
                      </Button>
                    </Link>
                  )}

              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>


  );
};

export default Revamp;
