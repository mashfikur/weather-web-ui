"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const DateTime = () => {
  const largeText = `text-2xl font-light`;
  const divStyle = `flex flex-col text-xs`;
  const largeDiv = `flex items-start gap-2`;

  const [realtime, setRealtime] = useState(dayjs());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRealtime(dayjs());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="flex items-center gap-10">
      <div className={largeDiv}>
        <p className={largeText}> {realtime.format("DD MMM")} </p>
        <p className={divStyle}>
          <span>{realtime.format("YYYY")}</span> <span>Date</span>{" "}
        </p>
      </div>
      <div className={largeDiv}>
        <p className={largeText}> {realtime.format("HH:mm")} </p>
        <p className={divStyle}>
          <span>{realtime.format("A")}</span> <span>Time</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DateTime;
