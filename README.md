# Navya & Vijay — Premium Digital Wedding Invitation Website

A luxury, romantic, digital wedding invitation website built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Inspired by high-end botanical wedding stationery, featuring warm ivory & cream paper backgrounds (`#FAF7F0`, `#F5F0E6`), forest green (`#303B26`), olive green (`#626B48`), and antique gold accents (`#B8A477`).

---

## ✨ Features

- **Section A — Wedding Welcome & Hero:**
  - Classic serif heading with cursive script flourish (*Navya and Vijay*).
  - Editorial arch-frame couple portrait surrounded by botanical floral accents.
  - Live wedding countdown preview to Reception (Aug 14) and Muhurtham (Aug 15).
  - Smooth-scrolling "Explore Our Wedding" action.

- **Section B — Wedding Invitation Details:**
  - Premium double-gold bordered stationery card with delicate corner flourishes.
  - Parents' blessings & warm invitation note.
  - Two detailed event breakdown cards:
    - **Wedding Reception:** Friday, August 14, 2026 (6:30 PM onwards).
    - **Sacred Muhurtham:** Saturday, August 15, 2026 (09:15 AM — 10:30 AM).
  - Venue: The Heritage Pavilion, JP Nagar, Bangalore.

- **Section C — Wedding Day Timeline:**
  - Vertical timeline with circular olive-green icons (`#626B48`) connected by a thin line.
  - Line icons for refreshments, celebrations, rings, sacred flame, camera, and banquet.
  - Multi-day filter toggle: *All Events*, *Day 1 (Reception)*, and *Day 2 (Muhurtham)*.

- **Section D — Wedding Venue:**
  - High-resolution venue photography of the courtyard in JP Nagar, Bangalore.
  - Full address, venue narrative, and valet parking guidelines.
  - "Get Directions" button linking to Google Maps.
  - Interactive embedded Google Map.

- **Section E — Wedding Photo Gallery & Lightbox:**
  - Editorial masonry grid with category filters (*Portraits, Muhurtham Mandap, Banquet & Evening, Details*).
  - Accessible full-screen Lightbox modal with next/previous controls, image counter, and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).

- **Section F — Dress Code:**
  - Deep forest-green organic backdrop (`#303B26`).
  - 5 circular swatches: *Ivory Cream*, *Sage Mist*, *Muted Olive*, *Champagne Gold*, *Forest Emerald*.
  - Attire recommendations for Reception and Muhurtham.

- **Section G — RSVP Form:**
  - Form fields: Full name, optional email, attendance radio buttons (*Joyfully Accept* / *Regretfully Decline*), guest count (1-5), event selector, meal & cuisine preference, dietary notes, and warm message to the couple.
  - Real-time client-side validation and duplicate prevention.
  - Golden celebratory confetti explosion upon submission.
  - Success confirmation card with option to modify response and instant calendar export.

- **Section H — Wedding Countdown:**
  - Real-time countdown ticker calculating days, hours, minutes, and seconds until August 14/15, 2026 in Bangalore timezone.

- **Section I — Save the Date & Calendar Sync:**
  - Calendar-style date badges (14 & 15 August 2026).
  - Downloadable `.ics` calendar invitation file synchronized with venue details.
  - Direct 1-click Google Calendar integration link.

- **Section J — Dynamic Digital QR Code:**
  - Real-time dynamic SVG QR Code generated with `qrcode.react` pointing to the live website URL.
  - 1-click "Copy Website Link" with feedback toast.
  - Native Web Share API integration ("Share Invitation") with automatic fallback.

- **Section K — Closing Section:**
  - Romantic evening photograph with hanging fairy lights and lanterns.
  - Gratitude note, couple monogram, date, and wedding hashtag `#NavyaWedsVijay`.

- **Layout Modes:**
  - **Full Scroll View:** Fluid, storytelling vertical wedding card experience.
  - **3-Panel Editorial View:** Directly inspired by traditional 3-panel stationery tri-fold layout.
  - Responsive mobile optimization (375px+).

- **Ambient Chime / Audio:**
  - Soft ambient wedding chime toggle synthesized with Web Audio API (no external audio assets required).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom Stationery Theme
- **Icons:** Lucide React
- **Confetti:** `canvas-confetti`
- **QR Code:** `qrcode.react`
- **Fonts:** Cormorant Garamond, Great Vibes, Pinyon Script, Montserrat (Google Fonts)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🎨 Centralized Customization

All wedding details are centralized in a single configuration file:
👉 `src/config/wedding.ts`

You can customize:
- **Couple Details:** Bride & Groom names, parents' names, wedding hashtag.
- **Event Dates & Times:** Reception and Muhurtham timings, auspicious lagna time, formatted strings and ISO dates.
- **Venue & Location:** Name, full address, Google Maps URL, map coordinates, and parking instructions.
- **Timeline Events:** Add or edit schedule entries, timings, and icons.
- **Dress Code:** Swatches, hex codes, labels, and attire guidelines.
- **Gallery Photos:** Image paths, captions, and categories in `public/images/`.
- **RSVP Configuration:** Deadline, max guest count, cuisine choices, and events.
