import { useEffect, useState } from "react";

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-8 mt-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="flex flex-col items-center animate-fade-up"
          style={{
            animationDelay: `${["days", "hours", "minutes", "seconds"].indexOf(key) * 0.1}s`
          }}
        >
          <div className="text-5xl font-light tracking-tight">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-500 mt-2 capitalize">
            {key}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;