import { MapPin, Navigation, Car, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';

export const Venue: React.FC = () => {
  const { venue } = weddingConfig;

  return (
    <section id="venue" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            The Location
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            Wedding Venue
          </h2>
          <BotanicalDecoration variant="divider" className="my-4" />
          <p className="text-sm text-[#626B48] max-w-lg mx-auto">
            An oasis of lush gardens, ancient trees, and heritage stone courtyard architecture in South Bangalore.
          </p>
        </div>

        {/* Venue Card Container */}
        <div className="paper-card rounded-3xl overflow-hidden border border-[#B8A477]/40 shadow-xl">
          {/* Large Hero Photograph */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#EDE6D6] group">
            <img
              src="/images/venue.jpg"
              alt={venue.name}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#303B26]/80 via-[#303B26]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F0]">
              <span className="text-[10px] sm:text-xs tracking-widest uppercase bg-[#B8A477]/80 backdrop-blur-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
                Heritage Courtyard & Lawns
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FAF7F0] font-normal">
                {venue.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F0]/90 font-sans mt-0.5">
                {venue.subheading}
              </p>
            </div>
          </div>

          {/* Details & Map Grid */}
          <div className="p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Description & Info */}
            <div className="space-y-5 text-left">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#B8A477] font-semibold mb-1">
                  Address
                </h4>
                <div className="flex items-start gap-2.5 text-[#37352F]">
                  <MapPin className="w-5 h-5 text-[#626B48] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base font-serif leading-relaxed">
                    <strong>{venue.name}</strong>
                    <br />
                    {venue.address}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#B8A477] font-semibold mb-1">
                  About The Venue
                </h4>
                <p className="text-xs sm:text-sm text-[#626B48] leading-relaxed">
                  {venue.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F0E6] border border-[#B8A477]/30 flex items-start gap-3">
                <Car className="w-4 h-4 text-[#626B48] shrink-0 mt-0.5" />
                <div className="text-xs text-[#37352F]">
                  <strong className="block text-[#303B26] font-medium mb-0.5">Guest Parking & Valet</strong>
                  {venue.parkingInfo}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium transition-all shadow-xs hover:shadow-md border border-[#B8A477]/40"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B8A477]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-[#FAF7F0]/60" />
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#B8A477]/40 shadow-inner h-64 md:h-80 bg-[#EDE6D6] relative">
              <iframe
                title="JP Nagar Bangalore Wedding Venue Map"
                src="https://maps.google.com/maps?q=JP%20Nagar%206th%20Phase%20Bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.05] grayscale-[20%]"
              />
              <div className="absolute bottom-2 right-2 bg-[#FAF7F0]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] text-[#626B48] border border-[#B8A477]/30">
                JP Nagar • Bengaluru
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
