import React from "react";
import { Outlet } from "react-router-dom";
import ThemeSelectorButton from "../components/ThemeSelectorButton";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col  ">
      <div className=" flex justify-end mx-5 my-5">
        <ThemeSelectorButton />
      </div>

      <Outlet />
    </div>
  );
};

export default DefaultLayout;
