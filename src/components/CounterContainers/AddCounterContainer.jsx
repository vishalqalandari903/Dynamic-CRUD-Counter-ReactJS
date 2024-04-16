import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../../app/slices/counter";
import { counterStyles } from "../../styles";
export const AddCounterContainer = () => {
  const [counterName, setCounterName] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const dispatch = useDispatch();

  const handleAddCounter = (e) => {
    e.preventDefault();
    dispatch(addCounter({ name: counterName }));
    setCounterName("");
  };
  return (
    <>
      <form
        onSubmit={(e) => handleAddCounter(e)}
        className="flex flex-col items-start gap-2"
      >
        <div
          className={`flex w-full rounded-md border  hover:border-primary_hover ${
            inputFocused ? "border-primary_hover" : "border-primary"
          }   overflow-hidden`}
        >
          <input
            required
            placeholder="Enter Counter Name..."
            value={counterName}
            onChange={(e) => setCounterName(e.target.value)}
            className="text-sm overflow-hidden text-nowrap text-ellipsis font-sans font-normal leading-5 px-3 shadow-md  dark:shadow-slate-900 dark:focus:shadow-outline-purple focus:shadow-lg bg-slate-50 focus:bg-slate-100 hover:bg-slate-100 dark:bg-background_primary text-base focus-visible:outline-0 dark:hover:bg-background dark:focus:bg-background"
            onFocus={(e) => setInputFocused(true)}
            onBlur={(e) => setInputFocused(false)}
          />

          <button
            type="submit"
            className={`p-2 text-sm font-medium border  bg-[#0086FF] text-white border-transparent hover:text-white hover:bg-primary_hover`}
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};
