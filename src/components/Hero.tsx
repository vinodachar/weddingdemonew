import React from 'react';
import { Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';
import { Countdown } from './Countdown';

export const Hero: React.FC = () => {
  const { couple, venue } = weddingConfig;

  const scrollToContent = () => {
    const el = document.getElementById('invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 pb-16 px-4 sm:px-6 min-h-[92vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Decorative background botanical corner accents */}
      <div className="absolute top-12 left-4 sm:left-8 pointer-events-none opacity-40">
        <BotanicalDecoration variant="corner" className="w-16 h-16 sm:w-24 sm:h-24 text-[#B8A477]" />
      </div>
      <div className="absolute top-12 right-4 sm:right-8 pointer-events-none opacity-40 rotate-90">
        <BotanicalDecoration variant="corner" className="w-16 h-16 sm:w-24 sm:h-24 text-[#B8A477]" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Intro Tag */}
        <div className="flex items-center gap-2 mb-3 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#B8A477]" />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#626B48] font-medium font-sans">
            Together With Their Families
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B8A477]" />
        </div>

        {/* Couple Names */}
        <div className="my-2 sm:my-3">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-wide text-[#303B26] font-normal leading-[1.05]">
            {couple.bride.firstName}
          </h1>
          <div className="font-script text-3xl sm:text-5xl text-[#B8A477] my-[-6px] sm:my-[-12px] select-none">
            and
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-wide text-[#303B26] font-normal leading-[1.05]">
            {couple.groom.firstName}
          </h1>
        </div>

        {/* Invitation Line */}
        <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#626B48] font-medium mt-2 mb-6">
          Invite You To Celebrate Their Wedding
        </p>

        {/* Arch Frame Couple Photograph with Botanical Embellishments */}
        <div className="relative my-4 sm:my-6 group">
          {/* Subtle outer gold border ring */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-t-[140px] rounded-b-[28px] border border-[#B8A477]/40 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]" />
          
          {/* Botanical wreath illustration on left and right */}
          <div className="hidden sm:block absolute -left-8 top-1/2 -translate-y-1/2 pointer-events-none">
            <BotanicalDecoration variant="rose" className="w-12 h-12 text-[#626B48]" />
          </div>
          <div className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none">
            <BotanicalDecoration variant="rose" className="w-12 h-12 text-[#626B48]" />
          </div>

          {/* Photo container */}
          <div className="w-64 sm:w-80 md:w-96 aspect-[3/4] rounded-t-[130px] rounded-b-[24px] overflow-hidden shadow-2xl border-2 border-[#FAF7F0] bg-[#EDE6D6] relative">
            <img
              src="/images/hero.jpg"
              alt={`${couple.bride.firstName} and ${couple.groom.firstName}`}
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.01] transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#303B26]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Date and Venue summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mt-4 text-[#37352F]">
          <div className="flex items-center gap-2 text-sm sm:text-base font-serif">
            <Calendar className="w-4 h-4 text-[#B8A477]" />
            <span className="font-semibold text-[#303B26]">14 & 15 August 2026</span>
          </div>
          <span className="hidden sm:inline text-[#B8A477]">•</span>
          <div className="flex items-center gap-2 text-sm sm:text-base font-serif">
            <MapPin className="w-4 h-4 text-[#B8A477]" />
            <span>{venue.name}, {venue.fullLocation}</span>
          </div>
        </div>

        {/* Countdown preview widget */}
        <div className="mt-5">
          <Countdown compact={true} />
        </div>

        {/* Explore Button */}
        <div className="mt-8">
          <button
            onClick={scrollToContent}
            className="group px-7 py-3 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs sm:text-sm uppercase tracking-widest font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-[#B8A477]/50 cursor-pointer"
          >
            <span>Explore Our Wedding</span>
            <ChevronDown className="w-4 h-4 text-[#B8A477] group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
