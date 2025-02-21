import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Home, FolderKanban, User, Mail, Github, Linkedin, CircleUserRound, SquareLibrary, Award, BookOpenText } from 'lucide-react';
import textlogo from '../assets/text-logo.png'
import { Button } from "@/components/ui/button";
import booklogo from '../assets/book.png'
import { authStore } from "../Stores/store.js"


export function Revamp2() {

  const { isAuthenticated, user } = authStore();


  return (
    <>

      <div className="flex">


        <div className="fixed left-0 top-0 h-screen bg-[#101426] border-r border-[#7e22ce] hover:rounded-r-2xl transition-all duration-300 hover:w-64 w-16 group z-50">
          <div className="p-4">
            <div className="flex items-center gap-4">
              <img className="border-red-50 z-10" src={booklogo} alt="CG Logo" className="min-w-[24px]" />
              {/* <FolderKanban size={24} className="text-blue-400 min-w-[24px]" /> */}
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <img className="border-red-50 z-10" src={textlogo} alt="CG Logo" />
              </span>
            </div>
          </div>

          <nav className="mt-8">
            <NavLink
              to="/"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <Home size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Home
              </span>
            </NavLink>

            <NavLink
              to="/project"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <FolderKanban size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Projects
              </span>
            </NavLink>

            <NavLink
              to="/event"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <User size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Events
              </span>
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <BookOpenText size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Resources
              </span>
            </NavLink>
            <NavLink
              to="/tracker"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <Award size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Leetcode Tracker
              </span>
            </NavLink>

            <NavLink
              to="/port"
              className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-[#7e22ce]' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
          `}
            >
              <Mail size={20} className="min-w-[20px]" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Portfolio
              </span>
            </NavLink>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-col gap-4">

              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} className="min-w-[20px]" />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  LinkedIn
                </span>
              </a> */}


              <Link to={'/dashboard'}>
                <button className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 pb-2">
                  <SquareLibrary size={25} className="min-w-[30px]" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Dashboard
                  </span>
                </button>
              </Link>



              {isAuthenticated ?
                (<button className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200">
                  <CircleUserRound size={25} className="min-w-[30px]" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Jenil Savalia
                  </span>
                </button>)
                : (
                  <Link to={'/login'}>
                    <button className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200">
                      <CircleUserRound size={25} className="min-w-[30px]" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Login
                      </span>
                    </button>
                  </Link>
                )}


            </div>
          </div>
        </div>
        <Outlet />
      </div>

    </>
  );
}