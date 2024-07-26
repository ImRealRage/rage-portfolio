"use client";
import { FaSpinner } from "react-icons/fa6";
import { FC, useEffect, useState } from "react";
import moment from "moment-timezone";

interface LiveClockProps {
  timezone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timezone }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timezone).format("HH:mm:ss");
      setTime(currentTime);
    };

    // Set the initial time when the component mounts
    updateClock();

    const intervalId = setInterval(updateClock, 1000);

    // Clean-up interval on component unmount
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw]">
          <span>Chandigarh, </span>
          <span>{time}</span>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;
