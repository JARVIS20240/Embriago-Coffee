"use client";

import { useEffect, useState } from "react";
import { toZonedTime } from "date-fns-tz";
import businessData from "@/data/business.json";

export default function FooterHours() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [statusText, setStatusText] = useState<string>("");

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const tz = businessData.hours.timezone;
      
      const zonedDate = toZonedTime(now, tz);
      const currentDay = zonedDate.getDay();
      const currentHour = zonedDate.getHours();
      const currentMinute = zonedDate.getMinutes();
      
      const schedule = businessData.hours.schedule as Record<string, { open: string, close: string, display: string }>;
      const todaySchedule = schedule[currentDay.toString()];
      
      const [openHour, openMin] = todaySchedule.open.split(":").map(Number);
      const [closeHour, closeMin] = todaySchedule.close.split(":").map(Number);
      
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      const openTimeInMinutes = openHour * 60 + openMin;
      const closeTimeInMinutes = closeHour * 60 + closeMin;
      
      const formatTime = (timeStr: string) => {
        const [h, m] = timeStr.split(":").map(Number);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const formattedH = h % 12 || 12;
        return `${formattedH}${m > 0 ? ':' + m.toString().padStart(2, '0') : ''} ${ampm}`;
      };

      if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        setIsOpen(true);
        setStatusText(`Closes at ${formatTime(todaySchedule.close)}`);
      } else {
        setIsOpen(false);
        let nextOpenDay = currentDay;
        let nextSchedule = todaySchedule;
        if (currentTimeInMinutes >= closeTimeInMinutes) {
           nextOpenDay = (currentDay + 1) % 7;
           nextSchedule = schedule[nextOpenDay.toString()];
        }
        setStatusText(`Opens at ${formatTime(nextSchedule.open)}`);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className="font-bold text-lg mb-3 font-sans uppercase tracking-wider text-[#D4A373]">Daily Hours</h3>
      <div className="font-sans text-xl font-medium mb-2 min-h-[28px]">
        {isOpen === null ? (
          <span className="text-gray-500 text-base">Checking hours...</span>
        ) : isOpen ? (
          <span className="text-green-600">Open Now</span>
        ) : (
          <span className="text-red-600">Closed</span>
        )}
      </div>
      <p className="text-[#3B2B20]/80 font-sans text-lg leading-relaxed mb-4 min-h-[28px]">
        {statusText}
      </p>
      <div className="text-[#3B2B20]/50 text-sm font-sans flex flex-col gap-1">
        <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
        <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}
