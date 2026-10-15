import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const DressCode: React.FC = () => {
  const { dressCode } = weddingConfig;

  return (
    <section id="dresscode" className="py-20 px-4 sm:px-6 relative text-center">
      <div className="max-w-4xl mx-auto">
        {/* Deep Forest Green Banner with Organic Edges and Gold Details */}
        <div className="bg-[#303B26] text-[#FAF7F0] rounded-3xl p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl border border-[#B8A477]/40">
          {/* Subtle Botanical Leaf watermark background */}
          <div className="absolute -top-16 -right-16 opacity-10 pointer-events-none">
            <BotanicalDecoration variant="rose" className="w-80 h-80 text-[#FAF7F0]" />
          </div>
          <div className="absolute -bottom-16 -left-16 opacity-10 pointer-events-none">
            <BotanicalDecoration variant="rose" className="w-80 h-80 text-[#FAF7F0]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#B8A477] font-semibold block mb-2">
              Attire & Palette
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF7F0] font-normal mb-3">
              {dressCode.title}
            </h2>
            
            {/* Gold Divider */}
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B8A477]" />
              <Sparkles className="w-4 h-4 text-[#B8A477]" />
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B8A477]" />
            </div>

            <p className="text-sm sm:text-base text-[#EDE6D6] font-serif italic mb-8">
              {dressCode.description}
            </p>

            {/* Five Circular Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-3 my-10">
              {dressCode.swatches.map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="relative p-1 rounded-full border border-[#B8A477]/60 group-hover:border-[#FAF7F0] transition-colors duration-300">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      <span className="text-[10px] font-mono opacity-0 group-hover:opacity-80 transition-opacity text-black/70">
                        {swatch.hex}
                      </span>
                    </div>
                  </div>
                  <span className="font-serif text-sm text-[#FAF7F0] font-medium mt-3">
                    {swatch.name}
                  </span>
                  <span className="text-[10px] text-[#B8A477] font-sans mt-0.5">
                    {swatch.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Attire notes */}
            <div className="mt-8 pt-8 border-t border-[#B8A477]/30 text-xs sm:text-sm text-[#FAF7F0]/90 space-y-3 font-sans">
              <div className="bg-[#222B1B]/60 p-4 rounded-xl border border-[#B8A477]/25 text-left flex items-start gap-3">
                <Check className="w-4 h-4 text-[#B8A477] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAF7F0] font-medium mb-1">Reception (Aug 14):</strong>
                  Formal Evening Wear, Festive Silk Sarees, Tuxedos, or Bandhgalas.
                </div>
              </div>

              <div className="bg-[#222B1B]/60 p-4 rounded-xl border border-[#B8A477]/25 text-left flex items-start gap-3">
                <Check className="w-4 h-4 text-[#B8A477] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#FAF7F0] font-medium mb-1">Muhurtham (Aug 15):</strong>
                  Traditional South Indian Ethnic Wear (Kanjeevaram Pattu Sarees, Silk Dhotis / Kurta Pajama).
                </div>
              </div>

              <p className="text-[11px] text-[#B8A477] italic pt-2">
                {dressCode.paletteNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
