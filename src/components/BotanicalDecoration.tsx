import React from 'react';

interface BotanicalProps {
  className?: string;
  variant?: 'leaves' | 'rose' | 'divider' | 'corner' | 'mandala';
}

export const BotanicalDecoration: React.FC<BotanicalProps> = ({
  className = '',
  variant = 'divider',
}) => {
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B8A477]" />
        <svg
          className="w-5 h-5 text-[#B8A477] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C12 2 13.5 6.5 17 8C13.5 9.5 12 14 12 14C12 14 10.5 9.5 7 8C10.5 6.5 12 2 12 2Z" />
          <path d="M12 14C12 14 13 18 16 19C13.5 20 12 22 12 22C12 22 10.5 20 8 19C11 18 12 14 12 14Z" opacity="0.6" />
        </svg>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B8A477]" />
      </div>
    );
  }

  if (variant === 'rose') {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#B8A477" strokeWidth="0.75" strokeDasharray="2 2" />
        {/* Stylized Rose petals */}
        <path d="M24 14C21 14 19 16 19 19C19 23 24 27 24 27C24 27 29 23 29 19C29 16 27 14 24 14Z" fill="#FAF7F0" stroke="#626B48" strokeWidth="1" />
        <path d="M21 17C20 19 21 21 24 23C27 21 28 19 27 17" stroke="#B8A477" strokeWidth="0.8" />
        {/* Botanical leaves */}
        <path d="M18 25C15 25 13 28 14 31C16 32 19 30 20 28" stroke="#626B48" strokeWidth="1" fill="#626B48" fillOpacity="0.15" />
        <path d="M30 25C33 25 35 28 34 31C32 32 29 30 28 28" stroke="#626B48" strokeWidth="1" fill="#626B48" fillOpacity="0.15" />
      </svg>
    );
  }

  if (variant === 'leaves') {
    return (
      <svg className={className} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 35 Q30 25 10 20 Q35 15 50 35 Z" fill="#626B48" fillOpacity="0.3" stroke="#626B48" strokeWidth="0.8"/>
        <path d="M50 35 Q70 25 90 20 Q65 15 50 35 Z" fill="#626B48" fillOpacity="0.3" stroke="#626B48" strokeWidth="0.8"/>
        <path d="M50 35 Q50 10 50 2" stroke="#B8A477" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="50" cy="2" r="2" fill="#B8A477"/>
      </svg>
    );
  }

  if (variant === 'corner') {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 56 V12 C4 7.58 7.58 4 12 4 H56" stroke="#B8A477" strokeWidth="1" fill="none"/>
        <path d="M8 56 V16 C8 11.58 11.58 8 16 8 H56" stroke="#B8A477" strokeWidth="0.5" strokeDasharray="2 2" fill="none"/>
        <circle cx="12" cy="12" r="2.5" fill="#B8A477"/>
        <path d="M12 12 Q20 8 30 14 Q22 22 12 12 Z" fill="#626B48" fillOpacity="0.25" stroke="#626B48" strokeWidth="0.6"/>
        <path d="M12 12 Q8 20 14 30 Q22 22 12 12 Z" fill="#626B48" fillOpacity="0.25" stroke="#626B48" strokeWidth="0.6"/>
      </svg>
    );
  }

  return null;
};
