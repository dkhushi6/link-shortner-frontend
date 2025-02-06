import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-end p-5 border-[#404040] h-[64px] w-full border  ">
      <div className="text-[16px] font-bold  justify-center pl-3">
        <NavLink
          to="/shortner"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-xl px-3 py-2 "
              : " text-white bg-[#303030] rounded-xl px-3 py-2 "
          }
        >
          Shortner
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-xl px-3 py-2 "
              : " text-white bg-[#303030] rounded-xl px-3 py-2 "
          }
        >
          Analytics
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
