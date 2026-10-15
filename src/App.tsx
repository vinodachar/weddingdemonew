import { useState } from 'react';
import { Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { InvitationDetails } from './components/InvitationDetails';
import { Timeline } from './components/Timeline';
import { Venue } from './components/Venue';
import { PhotoGallery } from './components/PhotoGallery';
import { DressCode } from './components/DressCode';
import { SaveTheDate } from './components/SaveTheDate';
import { RSVP } from './components/RSVP';
import { WebsiteQRCode } from './components/WebsiteQRCode';
import { ClosingSection } from './components/ClosingSection';
import { ThreePanelEditorialLayout } from './components/ThreePanelEditorialLayout';
import { weddingAudio } from './utils/audio';

export function App() {
  const [layoutMode, setLayoutMode] = useState<'scroll' | 'panels'>('scroll');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleMusic = () => {
    const playing = weddingAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#37352F] flex flex-col selection:bg-[#B8A477]/30 selection:text-[#303B26]">
      {/* Sticky Header Navigation */}
      <HeaderNav layoutMode={layoutMode} setLayoutMode={setLayoutMode} />

      <main className="flex-1 w-full">
        {layoutMode === 'panels' ? (
          <div>
            {/* 3-Panel Editorial Stationery View (Reference Image layout) */}
            <div className="pt-20">
              <ThreePanelEditorialLayout />
            </div>

            {/* Shared Full Sections */}
            <SaveTheDate />
            <RSVP />
            <ClosingSection />
          </div>
        ) : (
          <div>
            {/* Seamless Storytelling Full Scroll View */}
            <Hero />
            <InvitationDetails />
            <Timeline />
            <Venue />
            <PhotoGallery />
            <DressCode />
            <SaveTheDate />
            <RSVP />
            <WebsiteQRCode />
            <ClosingSection />
          </div>
        )}
      </main>

      {/* Floating Bottom Action Bar: Music Toggle & Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Soft Ambient Wedding Chimes Player */}
        <button
          onClick={toggleMusic}
          className={`p-3 rounded-full shadow-lg transition-all border border-[#B8A477]/50 flex items-center gap-1.5 cursor-pointer ${
            isAudioPlaying
              ? 'bg-[#303B26] text-[#FAF7F0] ring-2 ring-[#B8A477]/40'
              : 'bg-[#FAF7F0]/90 hover:bg-[#FAF7F0] text-[#303B26]'
          }`}
          title={isAudioPlaying ? 'Mute ambient melody' : 'Play ambient wedding chime'}
          aria-label="Toggle ambient melody"
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#B8A477] animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider hidden sm:inline font-medium">Melody</span>
            </>
          ) : (
            <VolumeX className="w-4 h-4 text-[#626B48]" />
          )}
        </button>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#FAF7F0]/90 hover:bg-[#FAF7F0] text-[#303B26] shadow-lg transition-all border border-[#B8A477]/50 cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#626B48]" />
        </button>
      </div>
    </div>
  );
}

export default App;
