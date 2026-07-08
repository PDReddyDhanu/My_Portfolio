import { useState, useEffect } from 'react';

export const BentoClockCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata', // Hyderabad time zone
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata',
    });
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-white/50">Location</span>
        <span className="text-xs font-semibold text-[#FFCA28] bg-[#FFCA28]/10 px-2 py-0.5 rounded-full">Hyderabad, IN</span>
      </div>
      
      <div>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-white tabular-nums">
          {formatTime(time)}
        </h2>
        <p className="text-xs text-white/60 mt-1 font-medium">{formatDate(time)}</p>
      </div>

      <div className="flex items-center space-x-3 pt-2 border-t border-[#30363D]">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4CAF50] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4CAF50]"></span>
        </div>
        <span className="text-xs font-medium text-[#4CAF50]">Available for Work</span>
      </div>
    </div>
  );
};
