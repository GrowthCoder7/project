// import { useEffect, useState } from "react";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// interface CountdownTimerProps {
//   targetDate: Date;
// }

// const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const difference = targetDate.getTime() - new Date().getTime();
      
//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div className="flex justify-center gap-8 mt-8">
//       {Object.entries(timeLeft).map(([key, value]) => (
//         <div
//           key={key}
//           className="flex flex-col items-center animate-fade-up"
//           style={{
//             animationDelay: `${["days", "hours", "minutes", "seconds"].indexOf(key) * 0.1}s`
//           }}
//         >
//           <div className="text-5xl font-light tracking-tight">
//             {value.toString().padStart(2, "0")}
//           </div>
//           <div className="text-sm text-gray-500 mt-2 capitalize">
//             {key}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountdownTimer;

import { useEffect, useState, useMemo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useMemo(() => () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Clear interval when countdown reaches zero
      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { key: 'days', label: 'Days' },
    { key: 'hours', label: 'Hours' },
    { key: 'minutes', label: 'Minutes' },
    { key: 'seconds', label: 'Seconds' }
  ];

  return (
    <div className="flex justify-center gap-8 mt-8">
      {timeUnits.map(({ key, label }, index) => (
        <div
          key={key}
          className="flex flex-col items-center animate-fade-up"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="text-4xl font-semibold text-black">
              {timeLeft[key as keyof TimeLeft].toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;