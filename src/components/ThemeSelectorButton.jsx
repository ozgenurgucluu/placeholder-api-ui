import React from "react";
import { useState } from "react";
import LightIcon from "../icons/LightIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemeSelectorButton = () => {
  const [theme, setTheme] = useState("light");
 
  const changeTheme = () => {
    let currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div>
      <button onClick={changeTheme}>
        {theme === "light" ?<MoonIcon /> :<LightIcon />}
      </button>
    </div>
  );
};

export default ThemeSelectorButton;
