import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Copy, Check, QrCode } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const WebsiteQRCode: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('https://navyawedsvijay.in');
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}'s Wedding`,
          text: `You're cordially invited to celebrate the wedding of Navya & Vijay on August 14 & 15, 2026 in JP Nagar, Bangalore.`,
          url: currentUrl,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 relative text-center">
      <div className="max-w-xl mx-auto">
        <div className="paper-card rounded-3xl p-8 sm:p-12 border border-[#B8A477]/40 shadow-xl relative">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Digital Invitation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#303B26] font-normal mb-2">
            Visit Our Website
          </h2>
          <BotanicalDecoration variant="divider" className="my-3" />
          <p className="text-xs sm:text-sm text-[#626B48] mb-6 max-w-sm mx-auto">
            Scan with your smartphone camera to access our digital invitation, live updates, directions, and gallery.
          </p>

          {/* Dynamic SVG QR Code Frame */}
          <div className="relative inline-block p-4 rounded-2xl bg-[#FAF7F0] border-2 border-[#B8A477]/50 shadow-md group">
            <div className="p-2 bg-white rounded-xl">
              <QRCodeSVG
                value={currentUrl}
                size={168}
                bgColor="#FFFFFF"
                fgColor="#303B26"
                level="M"
                includeMargin={false}
              />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-widest text-[#626B48] font-medium flex items-center justify-center gap-1">
              <QrCode className="w-3 h-3 text-[#B8A477]" />
              <span>Scan to Open</span>
            </div>
          </div>

          {/* Share & Copy Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-5 py-2.5 rounded-full bg-[#FAF7F0] hover:bg-[#EDE6D6] text-[#303B26] text-xs uppercase tracking-widest font-medium transition-all border border-[#B8A477] flex items-center gap-2 shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />
                  <span className="text-green-800 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#626B48]" />
                  <span>Copy Website Link</span>
                </>
              )}
            </button>

            {canShare && (
              <button
                onClick={handleShare}
                className="px-5 py-2.5 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium transition-all border border-[#B8A477]/40 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#B8A477]" />
                <span>Share Invitation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
