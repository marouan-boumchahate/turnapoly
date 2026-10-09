# Turnapoly (Monopoly Night) - React Application

A recreation of **Monopoly Night** as a modular React + TypeScript application with 3D board animations, interactive rules, and local game records tracking.

Designed following the principles from **58 Rules for Beautiful & Effective UI Design**.

---

## 🚀 Quick Start (Single Command)

Run this single command from the project root:

```bash
npm start
```

or:

```bash
npm run dev
```

The app will be live at `http://localhost:3000`.

---

## 🏗️ Architecture & Separation of Concerns

Every file has a single, focused responsibility and concise codebase (mostly under 50 lines per file):

```
turnapoly/
├── src/
│   ├── types/                  # Type contracts & domain interfaces
│   │   ├── board.ts            # 3D board space tile interface
│   │   ├── money.ts            # Starting money chip interface
│   │   ├── record.ts           # Game record data model
│   │   ├── route.ts            # Application route union type
│   │   ├── ruleTopic.ts        # Rules topic metadata interface
│   │   ├── stats.ts            # Summary metrics statistics model
│   │   └── theme.ts            # Light / Dark / System theme union
│   │
│   ├── constants/              # Static constants and configurations
│   │   ├── moneyChips.ts       # Monopoly starting cash breakdown
│   │   ├── routes.ts           # Top-level route navigation definitions
│   │   ├── storageKeys.ts      # LocalStorage key constants
│   │   └── themeColors.ts      # Brand palettes and cycling colors
│   │
│   ├── data/                   # Structured static data
│   │   ├── boardSpacesData.ts  # 40-space perimeter coordinates & styles
│   │   └── rulesTopicsData.ts  # Catalog of all 9 rule topics
│   │
│   ├── utils/                  # Pure utility helper functions
│   │   ├── analytics.ts        # Win rate & max cash metrics calculator
│   │   ├── dateUtils.ts        # ISO datetime formatters & local helpers
│   │   ├── formatCurrency.ts   # Monopoly currency symbol (₼) formatter
│   │   └── storage.ts          # Safe LocalStorage wrapper with fallbacks
│   │
│   ├── hooks/                  # Custom React hooks (state & business logic)
│   │   ├── useGameRecords.ts   # Local game records management
│   │   ├── useGameStats.ts     # Memoized KPI calculations & suggestions
│   │   ├── useRouter.ts        # Browser hash router & navigation state
│   │   ├── useRulesNavigation.ts # Rules tabs & Prev/Next step logic
│   │   └── useTheme.ts         # Dark/Light theme mode controller
│   │
│   ├── styles/                 # Design system & styles
│   │   ├── variables.css       # Design tokens (60-30-10 palette, typography)
│   │   ├── global.css          # Base resets, typography, accessibility
│   │   └── home.css            # 3D stage perspective & keyframe animations
│   │
│   ├── components/             # Atomic, single-responsibility UI components
│   │   ├── ui/                 # Reusable generic UI elements
│   │   │   ├── Alert.tsx       # Contextual callout banners (tip, warn, good)
│   │   │   ├── Button.tsx      # Standard accessible buttons
│   │   │   ├── Card.tsx        # Colored accent border card container
│   │   │   ├── NumberedStep.tsx # Circular step badge list item
│   │   │   ├── ProgressBar.tsx # Visual progress indicator (Rules 15 & 56)
│   │   │   └── Toast.tsx       # Action feedback toast notification (Rule 22)
│   │   │
│   │   ├── layout/             # Application shell layout
│   │   │   ├── Container.tsx   # Centered responsive content container
│   │   │   ├── Navbar.tsx      # Sticky top navigation bar
│   │   │   ├── NavLink.tsx     # Active state navigation pill link
│   │   │   └── ThemeToggle.tsx # Light/Dark mode switcher
│   │   │
│   │   ├── home/               # Hero & 3D Monopoly board
│   │   │   ├── BoardGrid.tsx   # 11x11 grid with center Monopoly emblem
│   │   │   ├── BoardTile.tsx   # Single perimeter color-band tile
│   │   │   ├── DicePair.tsx    # Animated 3D dice elements
│   │   │   ├── HeroCtaButton.tsx # Tactile 3D action button
│   │   │   ├── HeroCtaGroup.tsx  # CTA buttons wrapper
│   │   │   ├── HeroTagline.tsx # Monopoly tagline
│   │   │   ├── HeroTitle.tsx   # Monopoly boxed title
│   │   │   ├── HomeView.tsx    # Home view container
│   │   │   ├── Stage3D.tsx     # 3D perspective stage
│   │   │   └── TopHat.tsx      # Hovering animated Top Hat SVG
│   │   │
│   │   ├── rules/              # Interactive rules viewer
│   │   │   ├── RulesBottomNav.tsx # Back/Next step pagination
│   │   │   ├── RulesHeader.tsx    # Page header & subtitle
│   │   │   ├── RulesTabButton.tsx # Category pill button
│   │   │   ├── RulesTabsBar.tsx   # Sticky horizontal scrollable tab bar
│   │   │   ├── RulesTopicRenderer.tsx # Topic switcher
│   │   │   ├── RulesView.tsx      # Main rules view
│   │   │   └── topics/            # Individual modular topic components
│   │   │       ├── BuildingsTopic.tsx
│   │   │       ├── DealsTopic.tsx
│   │   │       ├── JailTopic.tsx
│   │   │       ├── MoneyChipItem.tsx
│   │   │       ├── MoneyDenominations.tsx
│   │   │       ├── NoMoneyTopic.tsx
│   │   │       ├── PropertiesTopic.tsx
│   │   │       ├── RentTable.tsx
│   │   │       ├── SetupTopic.tsx
│   │   │       ├── SpaceItemCard.tsx
│   │   │       ├── SpacesTopic.tsx
│   │   │       ├── TipsTopic.tsx
│   │   │       └── YourTurnTopic.tsx
│   │   │
│   │   └── records/            # Game records & statistics
│   │       ├── PlayerAutocomplete.tsx # Datalist with winner suggestions
│   │       ├── RecordCard.tsx         # Saved game record item
│   │       ├── RecordForm.tsx         # New result submission form
│   │       ├── RecordFormField.tsx    # Form field label & wrapper
│   │       ├── RecordsEmptyState.tsx  # Empty state graphic & message
│   │       ├── RecordsHeader.tsx      # Records title & subtitle
│   │       ├── RecordsList.tsx        # Sorted records feed
│   │       ├── RecordsStatsRow.tsx    # 3-column summary KPI cards
│   │       ├── RecordsView.tsx        # Main records view
│   │       ├── StatBox.tsx            # Single metric KPI card
│   │       └── TwoStepDeleteButton.tsx# 2-step delete safety confirmation
│   │
│   ├── App.tsx                 # Root application orchestrator
│   ├── main.tsx                # React DOM mounting entry point
│   └── vite-env.d.ts           # Vite client environment declarations
│
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # Strict TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 🎨 Adherence to the 58 UI/UX Design Rules

- **Rule 5 & 6 (Negative Space & Natural Balance):** Clean margins, padded cards, and balanced typography.
- **Rule 7 & 23 (Visual Hierarchy):** Distinct font scales (`Fredoka` for headings/KPIs, `Nunito` for high-legibility body copy).
- **Rule 8 (Grid Systems):** Responsive CSS Grid for 3D board, money chips, and stats.
- **Rule 15 & 56 (Progressive Steps & Visual Progress):** Animated reading progress bar dynamically indicating rule completion.
- **Rule 16 (Savings in Time / Smart Defaults):** Autocomplete for winner names, auto-filled current local datetime.
- **Rule 20 (Progressive Disclosure):** Clean tabs preventing cognitive overload by presenting one rules topic at a time.
- **Rule 22 (Feedback for User Actions):** Two-step safety delete mechanism (2.5-second countdown) and interactive toast notifications.
- **Rule 29 (Contrast):** High-contrast color tokens tested for dark and light modes.
- **Rule 31 (60-30-10 Color Balance):** Dominant clean background, secondary card surfaces, and strategic Monopoly accents.
- **Rule 32 & 54 (Theme Customization):** System preference detection with Light/Dark switcher toggle and localStorage persistence.
- **Rule 38 (Micro-Interactions):** 3D floating board, hovering hat SVG, tactile button depression, and smooth tab scrolling.
- **Rule 51 (Cross-Device Consistency):** Full support for safe-area insets (`env(safe-area-inset-top)`), mobile touch targets, and reduced-motion accessibility.
# turnapoly
