import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Toolbar = (props) => {
  const navigate = useNavigate();
  return (
    <div
      id="navbar"
      className="w-full flex items-center fixed left-0 top-0 py-3 px-4 bg-slate-50 z-50"
    >
      <button onClick={() => navigate(-1)}>
        <div className="pr-2 py-2 text-indigo-500">
          <RiArrowLeftLine className="w-6 h-6" />
        </div>
      </button>
      <span className=" text-indigo-500 flex items-center">
        <span className="text-lg font-extrabold text-indigo-500">
          {props.name}
        </span>
      </span>
    </div>
  );
};

export default Toolbar;
