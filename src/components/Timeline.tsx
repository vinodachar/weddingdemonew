import React, { useState } from 'react';
import { 
  Wine, 
  Sparkles, 
  CircleDot, 
  Utensils, 
  Sun, 
  Heart, 
  Camera, 
  Clock 
} from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import type { TimelineEvent } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'all' | 'day1' | 'day2'>('all');

  const filteredEvents = weddingConfig.timeline.filter((event) => {
    if (activeDay === 'all') return true;
    return event.day === activeDay;
  });

  const getEventIcon = (iconName: TimelineEvent['iconName']) => {
    switch (iconName) {
      case 'wine':
        return <Wine className="w-4 h-4 text-[#FAF7F0]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#FAF7F0]" />;
      case 'ring':
      case 'heart':
        return <Heart className="w-4 h-4 text-[#FAF7F0]" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-[#FAF7F0]" />;
      case 'sun':
        return <Sun className="w-4 h-4 text-[#FAF7F0]" />;
      case 'camera':
        return <Camera className="w-4 h-4 text-[#FAF7F0]" />;
      default:
        return <CircleDot className="w-4 h-4 text-[#FAF7F0]" />;
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Order of Celebrations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            Wedding Day Timeline
          </h2>
          <BotanicalDecoration variant="divider" className="my-4" />
          <p className="text-sm text-[#626B48] max-w-md mx-auto">
            A guide to each precious moment across our celebrations in JP Nagar Bangalore.
          </p>

          {/* Filter tabs */}
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-[#FAF7F0] border border-[#B8A477]/40 shadow-xs mt-6 text-xs font-medium">
            <button
              onClick={() => setActiveDay('all')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeDay === 'all'
                  ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                  : 'text-[#37352F] hover:text-[#303B26]'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeDay === 'day1'
                  ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                  : 'text-[#37352F] hover:text-[#303B26]'
              }`}
            >
              Aug 14 • Reception
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeDay === 'day2'
                  ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                  : 'text-[#37352F] hover:text-[#303B26]'
              }`}
            >
              Aug 15 • Muhurtham
            </button>
          </div>
        </div>

        {/* Timeline Panel Card */}
        <div className="paper-card rounded-3xl p-6 sm:p-10 md:p-12 border border-[#B8A477]/35 shadow-lg relative">
          <div className="relative">
            {/* Continuous Vertical Thin Line */}
            <div className="absolute left-5 sm:left-8 top-3 bottom-3 w-[1.5px] bg-gradient-to-b from-[#B8A477]/30 via-[#626B48] to-[#B8A477]/30" />

            <div className="space-y-8 sm:space-y-10">
              {filteredEvents.map((item) => (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Circular Olive Icon */}
                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#626B48] group-hover:bg-[#303B26] text-[#FAF7F0] flex items-center justify-center shrink-0 shadow-md border-2 border-[#FAF7F0] transition-colors duration-300">
                    {getEventIcon(item.iconName)}
                  </div>

                  {/* Content Box */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#B8A477] tracking-wider flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B8A477] inline" />
                        {item.time}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#EDE6D6] text-[#303B26] font-medium">
                        {item.day === 'day1' ? 'Aug 14 (Reception)' : 'Aug 15 (Muhurtham)'}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#303B26] font-normal leading-snug">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-[#626B48] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
