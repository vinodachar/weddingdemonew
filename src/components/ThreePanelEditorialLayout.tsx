import React from 'react';
import { Hero } from './Hero';
import { InvitationDetails } from './InvitationDetails';
import { Timeline } from './Timeline';
import { DressCode } from './DressCode';
import { Venue } from './Venue';
import { PhotoGallery } from './PhotoGallery';
import { WebsiteQRCode } from './WebsiteQRCode';

export const ThreePanelEditorialLayout: React.FC = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* 3-Panel Stationery Layout on Desktop (lg+), single column stacked on tablet/mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* PANEL 1: Left Panel - Welcome, Couple Portrait & Invitation */}
        <div className="paper-card rounded-3xl border-2 border-[#B8A477]/40 shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="p-2 sm:p-4">
            <Hero />
          </div>
          <div className="border-t border-[#B8A477]/30 p-2 sm:p-4">
            <InvitationDetails />
          </div>
        </div>

        {/* PANEL 2: Center Panel - Schedule Timeline & Dress Code */}
        <div className="paper-card rounded-3xl border-2 border-[#B8A477]/40 shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="p-2 sm:p-4">
            <Timeline />
          </div>
          <div className="border-t border-[#B8A477]/30 p-2 sm:p-4">
            <DressCode />
          </div>
        </div>

        {/* PANEL 3: Right Panel - Venue Details, Photo Gallery & Website QR */}
        <div className="paper-card rounded-3xl border-2 border-[#B8A477]/40 shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="p-2 sm:p-4">
            <Venue />
          </div>
          <div className="border-t border-[#B8A477]/30 p-2 sm:p-4">
            <PhotoGallery />
          </div>
          <div className="border-t border-[#B8A477]/30 p-2 sm:p-4">
            <WebsiteQRCode />
          </div>
        </div>
      </div>
    </div>
  );
};
