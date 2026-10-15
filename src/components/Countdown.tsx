import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [selectedEvent, setSelectedEvent] = useState<'reception' | 'muhurtham'>('reception');

  const targetDateISO =
    selectedEvent === 'reception'
      ? weddingConfig.events.reception.dateISO
      : weddingConfig.events.muhurtham.dateISO;

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDateISO]);

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 sm:gap-4 py-2 px-4 rounded-full bg-[#FAF7F0]/90 border border-[#B8A477]/40 shadow-xs">
        <Clock className="w-3.5 h-3.5 text-[#B8A477]" />
        <div className="flex items-center gap-2 font-serif text-sm sm:text-base text-[#303B26]">
          <span>
            <strong className="font-semibold">{timeLeft.days}</strong>d
          </span>
          <span className="text-[#B8A477]">•</span>
          <span>
            <strong className="font-semibold">{timeLeft.hours}</strong>h
          </span>
          <span className="text-[#B8A477]">•</span>
          <span>
            <strong className="font-semibold">{timeLeft.minutes}</strong>m
          </span>
          <span className="text-[#B8A477]">•</span>
          <span>
            <strong className="font-semibold">{timeLeft.seconds}</strong>s
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-[#EDE6D6] border border-[#B8A477]/30 mb-6 text-xs font-medium">
          <button
            onClick={() => setSelectedEvent('reception')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              selectedEvent === 'reception'
                ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                : 'text-[#37352F] hover:text-[#303B26]'
            }`}
          >
            Reception • Aug 14, 2026
          </button>
          <button
            onClick={() => setSelectedEvent('muhurtham')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              selectedEvent === 'muhurtham'
                ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                : 'text-[#37352F] hover:text-[#303B26]'
            }`}
          >
            Muhurtham • Aug 15, 2026
          </button>
        </div>

        {timeLeft.isPast ? (
          <div className="paper-card p-8 rounded-2xl max-w-lg mx-auto">
            <h3 className="font-serif text-2xl text-[#303B26] mb-2">Today We Celebrate Love!</h3>
            <p className="text-[#626B48] text-sm">
              Thank you for blessing our union with your warmth, love, and presence.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="paper-card p-3 sm:p-4 rounded-xl border border-[#B8A477]/40 flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5 duration-200"
              >
                <span className="font-serif text-2xl sm:text-4xl text-[#303B26] font-medium leading-none mb-1">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[11px] tracking-widest text-[#626B48] font-sans font-medium uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
