import React from "react";
import {
  RiHome3Line,
  RiShoppingCartLine,
  RiChat1Line,
  RiUser3Line,
  RiMoonFoggyFill,
  RiSunFoggyFill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";

function Footer() {
  const [color, setTheme] = Theme();
  return (
    <div className="fixed max-w-screen-sm mx-auto bottom-0 left-0 right-0 w-full bg-white py-2 border-t border-t-gray-100 z-50 dark:bg-slate-900 transition-all duration-500 dark:border-t-gray-700">
      <div
        onClick={() => setTheme(color)}
        className="cursor-pointer w-10 h-10 bg-indigo-400 dark:bg-indigo-400 absolute right-[0.7rem] top-[-3.2rem] rounded-full flex items-center justify-center  transition-all duration-500"
      >
        {color === "dark" ? (
          <RiMoonFoggyFill className="w-6 h-6 text-white" />
        ) : (
          <RiSunFoggyFill className="w-6 h-6 text-white" />
        )}
      </div>

      <div id="tabs" className="flex justify-between px-2">
        <NavLink
          to="/news/"
          className={(nav) =>
            nav.isActive
              ? " transition-all duration-500 w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500 dark:bg-slate-700/50 dark:text-slate-300"
              : " transition-all duration-500 w-full hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1  hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400 dark:text-slate-300 dark:hover:text-gray-50"
          }
        >
          <RiHome3Line className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/store/"
          className={(nav) =>
            nav.isActive
              ? " transition-all duration-500 w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500 dark:bg-slate-700/50 dark:text-slate-300"
              : " transition-all duration-500 w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1 hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400 dark:text-slate-300 dark:hover:text-gray-50"
          }
        >
          <RiShoppingCartLine className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Store</span>
        </NavLink>
        <NavLink
          to="/apps/"
          className={(nav) =>
            nav.isActive
              ? " transition-all duration-500 w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500 dark:bg-slate-700/50 dark:text-slate-300"
              : " transition-all duration-500 w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1 hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400 dark:text-slate-300 dark:hover:text-gray-50"
          }
        >
          <RiChat1Line className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Sosial</span>
        </NavLink>
        <NavLink
          to="profile/login/"
          className={(nav) =>
            nav.isActive
              ? " transition-all duration-500 w-full justify-center inline-block text-center pt-2 pb-1 bg-indigo-100 rounded-xl text-indigo-500 dark:bg-slate-700/50 dark:text-slate-300"
              : " transition-all duration-500 w-full hover:text-indigo-500  justify-center inline-block text-center pt-2 pb-1  hover:rounded-xl hover:ease-in hover:duration-300 text-zinc-400 dark:text-slate-300 dark:hover:text-gray-50"
          }
        >
          <RiUser3Line className="h-5 w-5 inline-block mb-1" />
          <span className="tab block text-xs">Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
