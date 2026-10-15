import { weddingConfig } from '../config/wedding';

export function downloadCalendarIcs() {
  const { events, couple, venue } = weddingConfig;

  // Format UTC dates for ics
  // Aug 14, 2026, 18:30 IST = 2026-08-14 13:00:00 UTC
  // Reception: 20260814T130000Z to 20260814T180000Z
  // Muhurtham: Aug 15, 2026 08:30 IST = 2026-08-15 03:00:00 UTC to 2026-08-15 08:30:00 UTC
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Navya and Vijay Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:${couple.bride.firstName} & ${couple.groom.firstName} Wedding Celebrations
BEGIN:VEVENT
UID:wedding-reception-20260814@navyavijay
DTSTAMP:20260101T000000Z
DTSTART:20260814T130000Z
DTEND:20260814T180000Z
SUMMARY:${couple.bride.firstName} & ${couple.groom.firstName} - Wedding Reception
DESCRIPTION:${events.reception.notes}\\nVenue: ${venue.name}, ${venue.address}
LOCATION:${venue.name}, ${venue.address}
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
UID:wedding-muhurtham-20260815@navyavijay
DTSTAMP:20260101T000000Z
DTSTART:20260815T030000Z
DTEND:20260815T080000Z
SUMMARY:${couple.bride.firstName} & ${couple.groom.firstName} - Sacred Muhurtham
DESCRIPTION:${events.muhurtham.notes}\\n${events.muhurtham.auspiciousTime}\\nVenue: ${venue.name}, ${venue.address}
LOCATION:${venue.name}, ${venue.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${couple.bride.firstName}_${couple.groom.firstName}_Wedding.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
