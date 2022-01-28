import { useState, useEffect } from "react";
import "./Display.css";

export function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className="display-clock">
      {date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  );
}
