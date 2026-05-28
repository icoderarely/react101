import React, { useState, useRef, useEffect } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time") || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem("time");
  };

  return (
    <>
      {/* <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2> */}
      <TimerDisplay className="text-4xl font-semibold mt-4" time={time}>
        Timer:{" "}
      </TimerDisplay>
      {/* <button
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounder hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounder ml-3 hover:bg-red-600"
      >
        Reset
      </button> */}

      <TimerControls onClick={toggleTimer} color="green" autoFocus={!isRunning}>
        {isRunning ? "Pause" : "Start"}
      </TimerControls>
      <TimerControls onClick={resetTimer} color="red">
        Reset
      </TimerControls>
    </>
  );
};

export default Timer;
