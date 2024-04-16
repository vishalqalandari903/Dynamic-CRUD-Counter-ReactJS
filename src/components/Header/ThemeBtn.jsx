import React, { useEffect } from "react";
import { darkMode, lightMode } from "../../app/slices/theme";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeBtn() {
  // const obj = {
  //   lightMode: "light",
  //   darkMode: "dark",
  //   todo: ["todo1", "todo2"],
  // };
  // const { lightMode, darkMode } = obj;
  // console.log(lightMode);
  const themeMode = useSelector((state) => state.themeMode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);
  const changeTheme = () => {
    const darkModeStatus = themeMode === "dark";
    if (darkModeStatus) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <div
        className="hover:bg-background_primary text-base text-xl hover:bg-opacity-40 rounded-full"
        onClick={changeTheme}
      >
        {themeMode === "dark" ? (
          <i className="fa-solid fa-moon p-2 px-[0.65rem]"></i>
        ) : (
          // <i className="fa-solid fa-sun p-2"></i>
          <i class="fa-solid fa-cloud px-[0.42rem] py-1 text-lg"></i>
        )}
      </div>
    </label>
  );
}
