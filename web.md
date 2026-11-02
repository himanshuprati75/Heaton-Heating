# Heaton Heating and Cooling LLC — Codebase & UX Architecture Audit

## 1. GLOBAL STYLING & COLOR PSYCHOLOGY
- **Brand & Target Market**:
  - Business Name: **Heaton Heating and Cooling, LLC**
  - Website Domain: `https://heatonheatingandcooling.com/`
  - Physical Headquarters / NAP: **1149 Sandstone Pl, Green Bay, WI 54313**
  - 24/7 Live Emergency Line: **(920) 977-8338**
  - Direct Business Email: **heatonheatingandcooling@gmail.com**
  - Owner & Lead Technician: **Chris Heaton, Owner & Lead Mechanical Specialist**
  - Standout Differentiator: **60-Day Guarantee on All Repairs** + Free Replacement Estimates + Early 6:00 AM & 24/7 Sub-Zero Freeze Dispatch.
  - Primary Service Region: Green Bay, Howard, Suamico, De Pere, Ashwaubenon, Bellevue, Allouez, Pulaski, Hobart, Wrightstown, Denmark, Sturgeon Bay (Door County), Oconto, Appleton / Fox Valley, Brown County, and Northeast Wisconsin.
  - Equipment Competencies: Servicing all makes and models (Gas Furnaces, Central AC, Heat Pumps & Dual-Fuel Inverters, Hydronic Boilers & Radiators, Ductless Mini-Splits, IAQ Air Cleaners).
- **Curated Color Palette**:
  - `heatonGreen-900` / `heatonGreen-950` (`#183625` / `#0a1c13`): Deep Green Bay spruce pine establishing local pride, rugged endurance in harsh Wisconsin winters, and professional mechanical stability.
  - `fireOrange-600` / `fireOrange-500` (`#ea580c` / `#f97316`): Emergency furnace flame orange representing urgent freeze protection, rapid dispatch, and high-conversion psychology.
  - `frostCyan-600` / `frostCyan-400` (`#0284c7` / `#38bdf8`): Cool frost cyan highlighting energy-efficient summer AC, dual-fuel heat pumps, and whole-home air purification.
  - `amberGold-500` (`#f59e0b`): 5-star customer review ratings, 60-day guarantee seals, and craftsmanship trust badges.

---

## 2. PROFESSIONAL 4-TO-5 SEPARATED TABS ARCHITECTURE (Core Standard)
- **Strict Navigation Rule**:
  - Top navigation bars must never feature cluttered or wrapped text links. They are strictly limited to **4 to 5 clean, distinct, separated tabs** inside an elevated capsule pill container.
- **Header Separated Pill Tab System (`Header.jsx`)**:
  - **Container**: Elevated capsule pill container (`bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-inner flex items-center`).
  - **Tabs (Strictly 5)**:
    1. **Services** (with interactive dropdown containing 6 core residential capabilities: Gas Furnace Repair & Installation, Central AC & Ductless Systems, Hydronic Boilers & In-Floor Heat, Heat Pumps & Hybrid Inverters, Annual Winterization & Safety Tune-Ups, IAQ Air Cleaners & Humidity Control).
    2. **Pricing** (with subtle `LIVE` pill badge, linking to `#calculator`).
    3. **Real Work** (linking to `#craftsmanship`).
    4. **About Us** (linking to `#about`).
    5. **Reviews** (linking to `#reviews`).
  - **Separation & Spacing**:
    - Each tab is rendered as an individually padded rounded pill with discrete vertical dividers (`w-px h-4 bg-slate-300/80`).
    - Every tab enforces `whitespace-nowrap` to guarantee zero text wrapping on all viewports.
    - Emergency dispatch phone number `(920) 977-8338` is locked to a single line with generous breathing room and click-to-call modal trigger.
- **Services Section Separated Tabs (`ServicesGrid.jsx`)**:
  - Interactive 6-tab filter bar: `[All Capabilities (6)]` `[Furnaces & Boilers]` `[Air Conditioning]` `[Heat Pumps]` `[Hydronic Heating]` `[Tune-Ups & IAQ]`.
- **Cost Calculator Category Filter Tabs (`CostCalculator.jsx`)**:
  - Segmented category tabs: `[All Services (6)]` `[Furnaces & Heating]` `[Air Conditioning]` `[Heat Pumps]` `[Boilers & IAQ]`.

---

## 3. MOBILE-FIRST ARCHITECTURE (Crucial)
- **Mobile Menu Drawer**:
  - Replaces messy text lists with **6 separated card buttons** with category icons, live status badges, and direct emergency dispatch links.
- **Sticky Bottom Lifeline CTA (`MobileStickyCTA.jsx`)**:
  - Fixed to viewport bottom on screens `< 768px` (`fixed bottom-0 left-0 right-0 z-40`).
  - Implements safe-area inset padding (`pb-[max(0.75rem,env(safe-area-inset-bottom))]`) for modern mobile screens.
  - Features a prominent 1-tap `CALL (920) 977-8338` button with emergency pulse animation alongside a direct `$50 OFF` dispatch credit button linking directly to the synchronized lead form.

---

## 4. HIGH-CONVERTING RECIPROCITY SEQUENCE
- **Step 1 — Immediate Calming & Problem Identification (`Hero.jsx`)**:
  - 3-second hook delivering instant trust: *"Green Bay & Northeast Wisconsin's Trusted Heating & Cooling Experts. 60-Day Guarantee on All Repairs. Fast 24/7 Emergency Dispatch."*
  - Quick-dispatch issue selector allowing homeowners to select their specific equipment failure in 1 tap.
  - Dual authority trust emblems: 60-Day Repair Guarantee & 24/7 Northeast Wisconsin Dispatch.
- **Step 2 — 4-Pillar Authority Shield (`TrustShield.jsx`)**:
  - 60-Day Repair Guarantee (Parts & Labor), Chris Heaton Owner-Operated Hands-On Care, 24/7 Emergency Dispatch (Early 6 AM response), Free Estimates on System Replacements.
- **Step 3 — Value-First Reciprocity Engine (`CostCalculator.jsx`)**:
  - Homeowners see transparent repair and installation ranges, estimated arrival times, and seasonal savings before entering contact information.
- **Step 4 — State-Synchronized Lead Capture (`LeadCaptureForm.jsx`)**:
  - Pre-populates selected mechanical priority from Hero or Cost Calculator.
  - Automatically activates web courtesy discount: `-$50.00 OFF Instant Dispatch Voucher` (`CODE: HEATON50-DISPATCH`).
  - Inquiries route directly to `heatonheatingandcooling@gmail.com`.
  - Realistic dispatch confirmation ticket generator (`HH-WI-XXXX`) with 15-minute response window and 1-tap emergency line.

---

## 5. BUILD & VERIFICATION STATUS
- **Production Build**: `npm run build` completed with exit code `0`.
- **Distribution Artifacts**:
  - `dist/index.html` (3.44 kB)
  - `dist/assets/index-B3nWZKyu.css` (41.95 kB)
  - `dist/assets/index-BmMvESIP.js` (250.97 kB)
- **Live Local Verification**: Running on `http://localhost:3007/` with confirmed HTTP 200 response and verified responsive styling.

