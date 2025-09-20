import React, { useState, useEffect } from "react";

const WelcomeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Welcome to CHARUSAT!!!!
      </h1>
      <h2>It is {formattedDate}</h2>
      <h2>It is {formattedTime}</h2>
    </div>
  );
};

export default WelcomeClock;
