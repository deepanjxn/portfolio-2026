"use client";

import { useState, useEffect } from "react";

function formatTime(date: Date, timezone: string): string {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timezone,
  });
}

function getInitialTime(): string {
  if (typeof window === "undefined") return "--:--:--";
  return formatTime(new Date(), "Asia/Kolkata");
}

export function useClock(): string {
  const [time, setTime] = useState(getInitialTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date(), "Asia/Kolkata"));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
