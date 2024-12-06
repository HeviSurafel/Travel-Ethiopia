import React, { useEffect, useState } from "react";
import { format, differenceInMilliseconds } from "date-fns";

const TimeDifference = ({ createdAt }) => {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const difference = differenceInMilliseconds(now, new Date(createdAt));

      // Convert milliseconds to hours, minutes, and seconds
      const hours = Math.floor(difference / 3600000);
      const minutes = Math.floor((difference % 3600000) / 60000);
      const seconds = Math.floor((difference % 60000) / 1000);
      const formattedTime = `${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s Ago`;
      setTimeDifference(formattedTime);
    };

    calculateTimeDifference();

    const interval = setInterval(calculateTimeDifference, 1000); // Update every second

    return () => clearInterval(interval);
  }, [createdAt]);

  return <div>Published : {timeDifference}</div>;
};

export default TimeDifference;
