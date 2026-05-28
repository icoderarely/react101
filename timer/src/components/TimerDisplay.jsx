import React from "react";

const TimerDsplay = ({ children, className, time }) => {
  return (
    <h2 className={className}>
      {children} {time}
    </h2>
  );
};

export default TimerDsplay;
