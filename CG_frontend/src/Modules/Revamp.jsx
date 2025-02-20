import React from "react";
import { Button } from "@/components/ui/button";
import img from "../assets/CG_Logo.png";
import { authStore } from "../Stores/store.js"
import { Link } from 'react-router-dom'


const Revamp = () => {

  const { isAuthenticated, user, token, Temp } = authStore();
  console.log("Current Zustand State:", authStore.getState());

  return (

    <div className="bg-[#101426] h-screen flex">

      {/* Sidebar */}
      <div className="bg-[#121729] w-[15%] h-screen border-r border-[#7e22ce] rounded-2xl flex flex-col">

        {/* Logo */}
        <div className="scale-75 pt-3 pb-1 flex justify-center">
          <img className="border-red-50 z-10" src={img} alt="CG Logo" />
        </div>

        {/* Divider */}
        <div className="border-b border-[#7e22ce] w-full"></div>


        {/* Links and Footer Button */}

        <div className="p-3 flex flex-col flex-1 justify-between mt-5">
          {/* Navigation Links */}
          <div>
            {["Portfolio", "CG Community", "Resources", "Events", "Portfolio", "Projects"].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-white hover:bg-[#923dee2b] hover:text-white w-full mb-4"
              >
                {item}
              </Button>
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
  );
};

export default Revamp;
