import React, { useState } from "react";
import { RiSearchLine, RiSwordFill } from "react-icons/ri";

function Header() {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState(false);

  return (
    <div
      id="navbar"
      className="w-full flex justify-between items-center fixed left-0 top-0 py-3 px-4 bg-slate-50 z-50 dark:bg-gray-800 transition-all duration-500 "
    >
      <a
        href="/"
        className={
          input
            ? "text-indigo-500 sm:flex hidden items-center"
            : "text-indigo-500 flex items-center dark:text-indigo-400  transition-all duration-500"
        }
      >
        <RiSwordFill className="w-6 h-6 mr-1" />
        <span className="text-lg font-extrabold text-gray-600 dark:text-slate-300  transition-all duration-500">
          ONE
          <span className="text-lg font-extrabold text-indigo-500 dark:text-indigo-400  transition-all duration-500">
            NEWS
          </span>
        </span>
      </a>

      <div className=" text-indigo-500 dark:text-slate-300 flex items-center w-full justify-end  transition-all duration-500">
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => {
            setInput(true);
          }}
          onBlur={() => {
            setSearch("");
            setInput(false);
          }}
          className="relative peer z-10  outline-none px-3 bg-transparent w-12 h-12 rounded-full border cursor-pointer focus:sm:w-auto focus:w-full focus:border-line-300 focus:cursor-text pl-4 pr-4 focus:pr-16 focus:pl-4 text-gray-800 dark:text-slate-300 dark:border-gray-700  transition-all duration-500"
        />
        <RiSearchLine className="absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-gray-200 border-l border-transparent peer-focus:border-gray-200 peer-focus:stroke-gray-200 dark:peer-focus:border-gray-700 dark:peer-focus:stroke-gray-700  transition-all duration-500" />
      </div>
    </div>
  );
}

export default Header;
