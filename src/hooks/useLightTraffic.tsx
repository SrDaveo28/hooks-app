import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};
type TrafficLightColor = keyof typeof colors;
export const useLightTraffic = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(10);

  // Countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Traffic light change effect
  useEffect(() => {
    if (countdown > 0) return;
    setCountdown(10);

    if (light === "red") setLight("green");
    if (light === "green") setLight("yellow");
    if (light === "yellow") setLight("red");
  }, [countdown, light]);

  return {
    // Properties
    countdown,
    //  Computed
    percentage: (countdown / 10) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
  };
};
