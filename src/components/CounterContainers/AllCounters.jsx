import React, { useEffect } from "react";
import { Counter } from "./Counter";
import { CountersWrapper } from "./CountersWrapper";
import { AddCounterContainer } from "./AddCounterContainer";
import { useSelector, useDispatch } from "react-redux";

export const AllCounters = () => {
  const counters = useSelector((state) => state.counter.counters);

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);
  return (
    <CountersWrapper>
      {counters.map((counter, index) => (
        <Counter
          key={counter.id}
          id={counter.id}
          name={counter.name}
          count={counter.count}
          index={index}
        />
      ))}
      {/* <AddCounterContainer /> */}
    </CountersWrapper>
  );
};
