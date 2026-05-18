"use client";

import { useEffect, useState } from "react";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import { MapPin, Clock } from "lucide-react";
import businessData from "@/data/business.json";

export default function InfoWidget() {
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
    // Update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-warm-crema border-b border-macchiato/20 py-4 shadow-sm relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
        <div className="flex items-center gap-2 text-macchiato font-sans">
          <MapPin className="w-5 h-5 text-gold-amber" />
          <span className="font-medium text-espresso-brown">
            {businessData.address.street}, {businessData.address.city}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-macchiato font-sans">
          <Clock className="w-5 h-5 text-gold-amber" />
          <span className="font-medium text-espresso-brown">
            {isOpen === null ? (
              "Checking hours..."
            ) : isOpen ? (
              <span className="text-green-700 font-semibold">Open Now &bull; <span className="font-medium text-espresso-brown">{statusText}</span></span>
            ) : (
              <span className="text-red-700 font-semibold">Closed &bull; <span className="font-medium text-espresso-brown">{statusText}</span></span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
