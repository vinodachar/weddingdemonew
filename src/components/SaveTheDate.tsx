import React from 'react';
import { Calendar, Download } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';
import { downloadCalendarIcs } from '../utils/calendar';

export const SaveTheDate: React.FC = () => {
  const { couple, venue } = weddingConfig;

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`${couple.bride.firstName} & ${couple.groom.firstName} Wedding Celebrations`);
    const details = encodeURIComponent(
      `Wedding Reception: Aug 14, 2026 (6:30 PM)\nSacred Muhurtham: Aug 15, 2026 (8:30 AM - 1:30 PM)\nVenue: ${venue.name}, ${venue.address}`
    );
    const location = encodeURIComponent(`${venue.name}, ${venue.address}`);
    // 20260814T130000Z to 20260815T080000Z
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260814T130000Z/20260815T080000Z&details=${details}&location=${location}`;
  };

  return (
    <section id="savethedate" className="py-20 px-4 sm:px-6 relative text-center">
      <div className="max-w-4xl mx-auto">
        <div className="paper-card rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#B8A477]/40 shadow-xl relative overflow-hidden">
          {/* Subtle Corner Flourishes */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-40">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none opacity-40 rotate-90">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>

          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Save The Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            Mark Your Calendar
          </h2>
          <BotanicalDecoration variant="divider" className="my-4" />

          {/* Calendar-style date badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto my-8">
            {/* Reception Date Box */}
            <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B8A477]/40 flex flex-col items-center">
              <span className="text-[11px] tracking-widest uppercase text-[#626B48] font-semibold mb-1">
                Day 1 • Reception
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#303B26] font-normal my-1">
                14
              </div>
              <span className="text-sm uppercase tracking-wider text-[#B8A477] font-semibold">
                August 2026
              </span>
              <span className="text-xs text-[#37352F] font-serif italic mt-1">
                Friday Evening • 6:30 PM
              </span>
            </div>

            {/* Muhurtham Date Box */}
            <div className="p-6 rounded-2xl bg-[#F5F0E6] border border-[#B8A477]/40 flex flex-col items-center">
              <span className="text-[11px] tracking-widest uppercase text-[#626B48] font-semibold mb-1">
                Day 2 • Sacred Muhurtham
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-[#303B26] font-normal my-1">
                15
              </div>
              <span className="text-sm uppercase tracking-wider text-[#B8A477] font-semibold">
                August 2026
              </span>
              <span className="text-xs text-[#37352F] font-serif italic mt-1">
                Saturday Morning • 9:15 AM
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#626B48] max-w-md mx-auto mb-8 font-sans">
            Add both ceremonies directly to your digital calendar with venue addresses and timings synchronized.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={downloadCalendarIcs}
              className="px-6 py-3 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 border border-[#B8A477]/50 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#B8A477]" />
              <span>Download iCal / Apple (.ics)</span>
            </button>

            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#FAF7F0] hover:bg-[#EDE6D6] text-[#303B26] text-xs uppercase tracking-widest font-medium transition-all shadow-xs flex items-center gap-2 border border-[#B8A477] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#626B48]" />
              <span>Add to Google Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
