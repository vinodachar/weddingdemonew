import React from 'react';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const InvitationDetails: React.FC = () => {
  const { couple, events, invitationNote } = weddingConfig;

  return (
    <section id="invitation" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Luxury Stationery Card Container */}
        <div className="paper-card rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#B8A477]/40 shadow-xl relative overflow-hidden text-center">
          {/* Subtle watermark seal behind */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <BotanicalDecoration variant="rose" className="w-[450px] h-[450px] text-[#303B26]" />
          </div>

          {/* Corner Flourishes */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-50">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none opacity-50 rotate-90">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none opacity-50 -rotate-90">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-50 rotate-180">
            <BotanicalDecoration variant="corner" className="w-10 h-10 text-[#B8A477]" />
          </div>

          {/* Header */}
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Wedding Invitation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            {invitationNote.headline}
          </h2>

          <BotanicalDecoration variant="divider" className="my-5" />

          {/* Parents blessings */}
          <div className="space-y-1 mb-8 text-xs sm:text-sm text-[#626B48] font-sans">
            <p>{couple.bride.parents}</p>
            <p className="font-script text-base text-[#B8A477]">&</p>
            <p>{couple.groom.parents}</p>
          </div>

          <p className="text-sm sm:text-base text-[#37352F] max-w-xl mx-auto font-serif italic mb-8 leading-relaxed">
            {invitationNote.body}
          </p>

          {/* Couple Names */}
          <div className="my-6">
            <h3 className="font-serif text-4xl sm:text-6xl text-[#303B26] font-normal">
              {couple.bride.fullName}
            </h3>
            <span className="font-script text-3xl sm:text-4xl text-[#B8A477] my-1 block select-none">
              with
            </span>
            <h3 className="font-serif text-4xl sm:text-6xl text-[#303B26] font-normal">
              {couple.groom.fullName}
            </h3>
          </div>

          <BotanicalDecoration variant="divider" className="my-8" />

          {/* Two-card Breakdown for Reception (14 Aug) & Muhurtham (15 Aug) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left my-8">
            {/* Event 1: Wedding Reception */}
            <div className="p-6 rounded-2xl bg-[#F5F0E6]/80 border border-[#B8A477]/40 hover:border-[#B8A477] transition-colors relative">
              <div className="inline-block px-3 py-1 bg-[#303B26] text-[#FAF7F0] text-[10px] tracking-widest uppercase rounded-full font-medium mb-3">
                Event 01 • Evening Gala
              </div>
              <h4 className="font-serif text-2xl text-[#303B26] font-semibold mb-2">
                {events.reception.title}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#37352F] font-sans">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B8A477] shrink-0" />
                  <span className="font-medium text-[#303B26]">{events.reception.dateFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8A477] shrink-0" />
                  <span>{events.reception.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#B8A477] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-[#303B26]">{events.reception.venue}</strong>
                    {events.reception.address}
                  </span>
                </div>
              </div>
              <p className="mt-4 pt-3 border-t border-[#B8A477]/20 text-xs italic text-[#626B48]">
                {events.reception.notes}
              </p>
            </div>

            {/* Event 2: Sacred Muhurtham */}
            <div className="p-6 rounded-2xl bg-[#F5F0E6]/80 border border-[#B8A477]/40 hover:border-[#B8A477] transition-colors relative">
              <div className="inline-block px-3 py-1 bg-[#626B48] text-[#FAF7F0] text-[10px] tracking-widest uppercase rounded-full font-medium mb-3">
                Event 02 • Auspicious Ceremony
              </div>
              <h4 className="font-serif text-2xl text-[#303B26] font-semibold mb-2">
                {events.muhurtham.title}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#37352F] font-sans">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B8A477] shrink-0" />
                  <span className="font-medium text-[#303B26]">{events.muhurtham.dateFormatted}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8A477] shrink-0" />
                  <span className="font-medium text-[#303B26]">{events.muhurtham.auspiciousTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#B8A477] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-[#303B26]">{events.muhurtham.venue}</strong>
                    {events.muhurtham.address}
                  </span>
                </div>
              </div>
              <p className="mt-4 pt-3 border-t border-[#B8A477]/20 text-xs italic text-[#626B48]">
                {events.muhurtham.notes}
              </p>
            </div>
          </div>

          {/* Romantic quote */}
          <p className="font-serif text-sm sm:text-base text-[#626B48] max-w-md mx-auto italic mt-6">
            {invitationNote.quote}
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#rsvp"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium transition-all shadow-md hover:shadow-lg border border-[#B8A477]/50"
            >
              <Heart className="w-4 h-4 text-[#B8A477] fill-current" />
              <span>Kindly Respond by {weddingConfig.rsvp.deadline}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
