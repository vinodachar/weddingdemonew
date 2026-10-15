import React from 'react';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const ClosingSection: React.FC = () => {
  const { couple, venue } = weddingConfig;

  return (
    <footer className="relative bg-[#222B1B] text-[#FAF7F0] pt-24 pb-20 px-4 sm:px-6 overflow-hidden text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/images/evening.jpg"
          alt="Evening Celebration"
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#222B1B] via-[#222B1B]/80 to-[#222B1B]/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Heart Icon & Botanical Flourish */}
        <div className="w-12 h-12 rounded-full border border-[#B8A477] bg-[#303B26]/80 flex items-center justify-center mb-6 shadow-lg">
          <Heart className="w-5 h-5 text-[#B8A477] fill-current animate-pulse" />
        </div>

        <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#B8A477] font-semibold block mb-2">
          With Gratitude & Joy
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl text-[#FAF7F0] font-normal mb-3">
          Thank You!
        </h2>

        <p className="font-serif text-lg sm:text-2xl text-[#EDE6D6] italic max-w-lg mx-auto mb-6">
          “We can't wait to celebrate love, family, and lifelong beginnings with you.”
        </p>

        <BotanicalDecoration variant="divider" className="my-4" />

        {/* Names & Date */}
        <div className="my-4">
          <div className="font-serif text-3xl sm:text-4xl text-[#FAF7F0]">
            {couple.bride.firstName} & {couple.groom.firstName}
          </div>
          <p className="text-xs tracking-widest uppercase text-[#B8A477] font-sans mt-2">
            14 & 15 August 2026 • {venue.name}, JP Nagar Bangalore
          </p>
        </div>

        {/* Small Hashtag */}
        <div className="mt-4 px-4 py-1.5 rounded-full bg-[#FAF7F0]/10 border border-[#B8A477]/30 text-xs text-[#FAF7F0] font-mono tracking-wider">
          {couple.hashtag}
        </div>

        <div className="mt-12 pt-8 border-t border-[#FAF7F0]/15 w-full text-[11px] text-[#FAF7F0]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            {couple.bride.firstName} & {couple.groom.firstName}’s Digital Wedding Stationery
          </span>
          <span>
            Designed with love for our wedding guests
          </span>
        </div>
      </div>
    </footer>
  );
};
