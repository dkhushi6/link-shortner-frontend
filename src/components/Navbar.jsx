import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between p-5 border-[#404040] h-[64px] w-full border items-center gap-5 ">
      <div className="text-[30px] font-bold italic flex hover:text-[#8364D2] ">
        <div>Re</div>
        <div className="text-[#8364D2]">brand</div>
        <div>ly</div>
      </div>
      <div className="text-[16px] font-bold   pl-3 flex gap-6 ">
        <div>
          <NavLink
            to="/shortner"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            Shortner
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-linear-to-r/srgb from-[#8364D2] to-[#ab90ee]  rounded-3xl px-4 py-3 "
                : " text-white  border-[#4d4c4c] border rounded-3xl px-4 py-3 "
            }
          >
            Analytics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
