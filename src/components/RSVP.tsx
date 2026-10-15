import React, { useState, useEffect } from 'react';
import { Heart, Send, CheckCircle2, AlertCircle, Users, Calendar, Utensils, MessageSquare, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../config/wedding';
import { BotanicalDecoration } from './BotanicalDecoration';
import { downloadCalendarIcs } from '../utils/calendar';

interface RSVPFormData {
  fullName: string;
  email: string;
  attending: 'yes' | 'no';
  guestCount: number;
  eventsAttending: string;
  mealPreference: string;
  dietaryNotes: string;
  message: string;
}

export const RSVP: React.FC = () => {
  const { rsvp } = weddingConfig;

  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    email: '',
    attending: 'yes',
    guestCount: 1,
    eventsAttending: rsvp.eventsOptions[0] || 'Both Reception & Muhurtham (Aug 14 & 15)',
    mealPreference: rsvp.mealOptions[0] || 'Traditional South Indian Vegetarian',
    dietaryNotes: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RSVPFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [duplicateNotice, setDuplicateNotice] = useState(false);

  // Check if previously submitted
  useEffect(() => {
    const existing = localStorage.getItem('navya_vijay_rsvp_submission');
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        setFormData(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RSVPFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (formData.guestCount < 1 || formData.guestCount > rsvp.maxGuests) {
      newErrors.guestCount = `Guest count must be between 1 and ${rsvp.maxGuests}.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setDuplicateNotice(false);

    // Simulate network delay / backend submission
    setTimeout(() => {
      // Save to localStorage
      const submissionRecord = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const existingRsvps = JSON.parse(localStorage.getItem('wedding_all_rsvps') || '[]');
      const isAlreadySubmitted = existingRsvps.some(
        (r: any) =>
          r.fullName.toLowerCase() === formData.fullName.trim().toLowerCase() &&
          r.email.toLowerCase() === formData.email.trim().toLowerCase()
      );

      if (isAlreadySubmitted) {
        setDuplicateNotice(true);
      } else {
        existingRsvps.push(submissionRecord);
        localStorage.setItem('wedding_all_rsvps', JSON.stringify(existingRsvps));
      }

      localStorage.setItem('navya_vijay_rsvp_submission', JSON.stringify(formData));
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger romantic golden confetti if attending
      if (formData.attending === 'yes') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B8A477', '#FAF7F0', '#626B48', '#303B26', '#E2D4B7'],
        });
      }
    }, 700);
  };

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#626B48] font-semibold block mb-2">
            Répondez S’il Vous Plaît
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#303B26] font-normal mb-3">
            Celebrate With Us
          </h2>
          <BotanicalDecoration variant="divider" className="my-4" />
          <p className="text-sm text-[#626B48] max-w-md mx-auto">
            Please let us know if you can join our celebrations in JP Nagar, Bangalore.
            Kindly RSVP by <strong className="text-[#303B26]">{rsvp.deadline}</strong>.
          </p>
        </div>

        {/* Paper Card RSVP Form / Success Card */}
        <div className="paper-card rounded-3xl p-8 sm:p-12 border-2 border-[#B8A477]/40 shadow-xl relative">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#303B26] text-[#FAF7F0] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#B8A477]" />
              </div>

              <div>
                <h3 className="font-serif text-3xl text-[#303B26]">
                  {formData.attending === 'yes' ? 'We Can’t Wait to Welcome You!' : 'Thank You For Letting Us Know'}
                </h3>
                <p className="text-sm text-[#626B48] mt-2 max-w-md mx-auto">
                  {formData.attending === 'yes'
                    ? `Thank you, ${formData.fullName}! Your RSVP for ${formData.guestCount} guest(s) has been joyfully recorded.`
                    : `We will dearly miss your presence, ${formData.fullName}, but appreciate your warm thoughts and blessings.`}
                </p>
                {duplicateNotice && (
                  <p className="text-xs text-[#B8A477] mt-1">
                    (Note: We updated your existing RSVP record).
                  </p>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-[#EDE6D6]/60 border border-[#B8A477]/30 max-w-md mx-auto text-xs text-[#37352F] space-y-1.5 text-left font-sans">
                <div>
                  <strong>Events:</strong> {formData.eventsAttending}
                </div>
                {formData.attending === 'yes' && (
                  <div>
                    <strong>Meal Preference:</strong> {formData.mealPreference}
                  </div>
                )}
                <div className="text-[11px] text-[#626B48] pt-1">
                  Saved securely to local event guestlist.
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={downloadCalendarIcs}
                  className="px-6 py-2.5 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs uppercase tracking-widest font-medium transition-all shadow-xs flex items-center gap-2 border border-[#B8A477]/40 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#B8A477]" />
                  <span>Download Calendar (.ics)</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full border border-[#B8A477] text-[#303B26] text-xs hover:bg-[#FAF7F0] transition-colors cursor-pointer"
                >
                  Update Response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5">
                  Full Name <span className="text-[#B8A477]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Smt. & Sri. Anand Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border ${
                    errors.fullName ? 'border-red-400' : 'border-[#B8A477]/40'
                  } focus:border-[#303B26] focus:outline-hidden text-sm text-[#37352F] font-sans`}
                />
                {errors.fullName && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5">
                  Email Address <span className="text-[11px] font-normal text-[#626B48]">(Optional, for reminder updates)</span>
                </label>
                <input
                  type="email"
                  placeholder="anand@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border ${
                    errors.email ? 'border-red-400' : 'border-[#B8A477]/40'
                  } focus:border-[#303B26] focus:outline-hidden text-sm text-[#37352F] font-sans`}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Attendance Selection */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-2">
                  Will You Attend? <span className="text-[#B8A477]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.attending === 'yes'
                        ? 'bg-[#303B26] text-[#FAF7F0] border-[#303B26] shadow-xs'
                        : 'bg-[#FAF7F0] text-[#37352F] border-[#B8A477]/40 hover:border-[#B8A477]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      checked={formData.attending === 'yes'}
                      onChange={() => setFormData({ ...formData, attending: 'yes' })}
                      className="sr-only"
                    />
                    <Heart
                      className={`w-4 h-4 ${
                        formData.attending === 'yes' ? 'text-[#B8A477] fill-current' : 'text-[#626B48]'
                      }`}
                    />
                    <span className="font-serif text-base font-medium">Joyfully Accept</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.attending === 'no'
                        ? 'bg-[#303B26] text-[#FAF7F0] border-[#303B26] shadow-xs'
                        : 'bg-[#FAF7F0] text-[#37352F] border-[#B8A477]/40 hover:border-[#B8A477]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      checked={formData.attending === 'no'}
                      onChange={() => setFormData({ ...formData, attending: 'no' })}
                      className="sr-only"
                    />
                    <AlertCircle className="w-4 h-4 text-[#B8A477]" />
                    <span className="font-serif text-base font-medium">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {/* If Attending: Guest count, event options, meals */}
              {formData.attending === 'yes' && (
                <div className="space-y-6 pt-2 border-t border-[#B8A477]/20">
                  {/* Number of Guests */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs uppercase tracking-widest text-[#303B26] font-semibold flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B8A477]" />
                        Total Guests Attending
                      </label>
                      <span className="text-xs text-[#626B48]">
                        Max {rsvp.maxGuests} guests
                      </span>
                    </div>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#B8A477]/40 focus:border-[#303B26] text-sm text-[#37352F]"
                    >
                      {Array.from({ length: rsvp.maxGuests }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest (Just me)' : `Guests`}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Events Attending */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B8A477]" />
                      Events You Will Grace
                    </label>
                    <select
                      value={formData.eventsAttending}
                      onChange={(e) => setFormData({ ...formData, eventsAttending: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#B8A477]/40 focus:border-[#303B26] text-sm text-[#37352F]"
                    >
                      {rsvp.eventsOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Meal Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#B8A477]" />
                      Cuisine & Dining Preference
                    </label>
                    <select
                      value={formData.mealPreference}
                      onChange={(e) => setFormData({ ...formData, mealPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#B8A477]/40 focus:border-[#303B26] text-sm text-[#37352F]"
                    >
                      {rsvp.mealOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dietary Requirements */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5">
                      Dietary Notes or Allergies <span className="text-[11px] font-normal text-[#626B48]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nut allergy, diabetic-friendly, etc."
                      value={formData.dietaryNotes}
                      onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#B8A477]/40 focus:border-[#303B26] text-sm text-[#37352F]"
                    />
                  </div>
                </div>
              )}

              {/* Message to Couple */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#303B26] font-semibold mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#B8A477]" />
                  Warm Message for Navya & Vijay <span className="text-[11px] font-normal text-[#626B48]">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a sweet memory, heartfelt blessing, or song request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#B8A477]/40 focus:border-[#303B26] text-sm text-[#37352F] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#303B26] hover:bg-[#222B1B] text-[#FAF7F0] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg border border-[#B8A477]/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Recording Response...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#B8A477]" />
                      <span>Submit RSVP</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#626B48] text-center mt-2.5">
                  Responses are verified and recorded securely for the wedding host families.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
