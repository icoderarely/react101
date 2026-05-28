import React, { useEffect, useRef } from "react";

const TimerControls = ({ children, onClick, color, autoFocus = false }) => {
  const startButtonRef = useRef(null);
  useEffect(() => {
    if (autoFocus && startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, [autoFocus]);
  return (
    <button
      ref={autoFocus ? startButtonRef : null}
      onClick={onClick}
      className={`mt-3 bg-${color}-500 text-white px-4 py-2 rounder ml-3 hover:bg-${color}-600`}
    >
      {children}
    </button>
  );
};

export default TimerControls;
