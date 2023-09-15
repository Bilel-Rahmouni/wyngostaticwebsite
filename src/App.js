import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import playstore from "./playstore.png";
import screenShots from "./SSs.png";

function App() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 24); // Set the target date 24 days from now

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="Logo" />
      </header>
      <div className="Main">
        <div className="First">
          <div className="countdown">
            <linearGradient></linearGradient>
            <span>{timeLeft.days}</span>
            <text>Days</text>
            <span>{timeLeft.hours}</span> <text>Hours</text>
            <span>{timeLeft.minutes}</span> <text>Minutes</text>
            <span>{timeLeft.seconds}</span> <text>Seconds</text>
          </div>
        </div>
        <div className="Second">
          <img src={playstore} alt="Playstore" className="Playstore" />
          <img src={screenShots} alt="Logo" className="Sss" />
        </div>
      </div>
    </div>
  );
}

export default App;
