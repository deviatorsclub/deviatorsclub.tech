"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = ({ expiresOn }: { expiresOn: Date }) => {
  const calculateTimeLeft = (expiresOn: Date) => {
    const difference = new Date(expiresOn).getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expiresOn));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(expiresOn));
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresOn]);

  return (
    <div className="mb-4 flex items-center gap-2 text-sm text-yellow-400">
      <Clock size={16} />
      <span>
        Expires in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </span>
    </div>
  );
};
