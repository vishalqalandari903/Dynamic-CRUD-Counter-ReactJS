import React, { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../../app/slices/counter";
import { AddCounterContainer } from "../CounterContainers/AddCounterContainer";

export const Header = () => {
  const dispatch = useDispatch();
  const handleAddCounter = (e) => {
    e.preventDefault();
    dispatch(addCounter({ name: counterName }));
  };
  return (
    <div className=" md:px-20 w-full min-h-[7vh] flex items-center dark:backdrop-blur-lg backdrop-blur-lg sticky top-0 z-10 p-2 px-5 shadow-lg justify-between">
      <h1 className="dark:text-white text-black text-xl font-medium uppercase">
        Counter App
      </h1>
      <div className="flex gap-4">
        <AddCounterContainer />
        <ThemeBtn />
      </div>
    </div>
  );
};
