import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const PhotoGallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const photos = weddingConfig.gallery;

  const filteredPhotos = photos.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! - 1 + filteredPhotos.length) % filteredPhotos.length));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Captured Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            Wedding Photo Gallery
          </h2>
          <BotanicalDecoration variant="divider" className="my-4" />
          <p className="text-sm text-[#626B48] max-w-md mx-auto">
            A glimpse into our celebration of love, sacred traditions, and timeless joy.
          </p>

          {/* Filter badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'portrait', label: 'Portraits' },
              { id: 'ceremony', label: 'Muhurtham Mandap' },
              { id: 'reception', label: 'Banquet & Evening' },
              { id: 'details', label: 'Details' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#303B26] text-[#FAF7F0] shadow-xs'
                    : 'bg-[#FAF7F0] text-[#37352F] hover:text-[#303B26] border border-[#B8A477]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl paper-card border border-[#B8A477]/35 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Photo Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EDE6D6] relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#303B26]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F0]/90 backdrop-blur-xs flex items-center justify-center text-[#303B26] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#303B26]" />
                  </div>
                </div>
              </div>

              {/* Caption Card */}
              <div className="p-4 text-left">
                <h3 className="font-serif text-lg text-[#303B26] font-medium leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#626B48] mt-1 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <div
            className="fixed inset-0 z-50 bg-[#222B1B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF7F0]/10 hover:bg-[#FAF7F0]/20 text-[#FAF7F0] transition-colors cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF7F0]/10 hover:bg-[#FAF7F0]/25 text-[#FAF7F0] transition-colors cursor-pointer z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FAF7F0]/10 hover:bg-[#FAF7F0]/25 text-[#FAF7F0] transition-colors cursor-pointer z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Container */}
            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-[#B8A477]/50 shadow-2xl bg-black/40 max-h-[70vh]">
                <img
                  src={filteredPhotos[selectedPhotoIndex].src}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-4 text-[#FAF7F0] max-w-lg">
                <span className="text-[11px] uppercase tracking-widest text-[#B8A477] font-medium">
                  Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <h4 className="font-serif text-2xl text-[#FAF7F0] mt-1">
                  {filteredPhotos[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#EDE6D6] mt-0.5">
                  {filteredPhotos[selectedPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
