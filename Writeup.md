# American Dream — Interactive Sales Deck
### A luxury, browser-based pitch tool for North America's most ambitious mixed-use destination

**Live Demo:** [american-dream-deck-one.vercel.app](https://american-dream-deck-one.vercel.app/)  
**Built for:** LIAT.AI Senior Frontend Engineer & AI-Powered Interactive Design Assignment

---

## The Brief

The world's largest shopping malls no longer sell themselves through PDFs and YouTube tabs. This project replaces that fragmented, manual sales process with a single, self-contained interactive deck — one link a salesperson can screen-share on a live call, or send to a prospect who explores it entirely alone.

The target audience is not shoppers. It's B2B decision-makers: brand executives evaluating a flagship lease, agency directors considering a sponsorship activation, event producers scouting a venue. Every section is designed to move them toward one of three business actions: signing a lease, committing to a sponsorship, or booking an event.

**American Dream Mall** in East Rutherford, New Jersey was chosen as the subject — not for familiarity, but for narrative tension. The most mocked construction project in America for 16 years became one of the highest-trafficked destinations on the continent. That arc is an emotional hook no other mall can claim, and it shapes how the entire deck is told.

---

## Design Philosophy

The visual north star was a specific combination: **Tesla.com's darkness × Louis Vuitton's restraint × Disney's energy.** Not any one of them — the intersection of all three.

This translates into a concrete set of rules that governed every decision:

- **Near-black, never pure black.** `#080808` feels richer, more cinematic than `#000000`. The difference is subtle but accumulates across an entire experience.
- **Gold is rationed.** `#C9A84C` appears at most three times per screen. Used everywhere, it loses meaning. Used sparingly, it signals: *this is where to look.*
- **Cormorant Garamond for everything that needs to feel large.** The typeface carries editorial luxury at display sizes without trying. Inter handles everything functional beneath it.
- **Film grain at 3% opacity.** The single most underrated trick for making digital UI feel physical. It kills the sterile "website" quality that luxury brands spend years trying to escape.
- **Gradient overlays, never text shadows.** Text on imagery always sits above a gradient — never a drop shadow. Shadows feel like a workaround. Gradients feel intentional.

The layout language is asymmetric by default. Centered grids feel like templates. Every section has at least one element that breaks the grid — an oversized number, an image that bleeds past its container, a pull quote set in isolation.

---

## Architecture

The core structural decision was **non-linear navigation**. A traditional scrolling website forces a linear story. A sales call is not linear — a prospect asks about events, then jumps to leasing, then wants to see the luxury wing. The sidebar dot navigation (desktop) and bottom tab bar (mobile) let a salesperson respond to that in real time without losing the thread.

```
app/
├── layout.tsx          # Fonts, metadata, OG tags
├── page.tsx            # Section orchestrator, scroll tracking, progress bar
└── globals.css         # Design tokens, film grain, custom utilities

components/
├── Hero.tsx            # Cinematic opener — video, animated stats, cursor parallax
├── WhyHere.tsx         # Location, access, demographics — the data pitch
├── Retail.tsx          # Tenant environment, brand categories, growth arc
├── Entertainment.tsx   # The mega-differentiator — ski slope, theme park, NHL arena
├── Dining.tsx          # Food as lifestyle draw, not afterthought
├── Events.tsx          # Draggable highlight reel, venue capabilities, booking CTA
├── SidebarNav.tsx      # Fixed left dot navigation, section-aware active state
├── MobileNav.tsx       # Bottom tab bar for tablet and mobile
├── modules/
│   ├── Leasing.tsx     # Phase 2: 4 leasing paths, CTA banner
│   └── Sponsorship.tsx # Phase 2: 3 partnership tiers, audience data strip
└── ui/
    ├── SectionHeader.tsx  # Eyebrow + headline pattern, reused across all sections
    ├── GoldButton.tsx     # Circle arrow + text label, fills on hover
    └── StatItem.tsx       # Animated number counter, triggered on viewport entry
```

**Phase 2 modularity** was built into the architecture from the start. The Leasing and Sponsorship modules are fully self-contained — they can be deepened, forked into separate routes, or hidden behind a password without touching any other section. The section array in `page.tsx` is the single source of truth for both navigation components, so adding a new module is one object and one import.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 App Router | SSR metadata, Vercel deployment, image optimization |
| Styling | Tailwind CSS v3 | Design token system, rapid iteration |
| Animation | Framer Motion | Scroll-triggered reveals, drag interactions, layout animations |
| Icons | Lucide React | Minimal, consistent, tree-shakeable |
| Fonts | Google Fonts via next/font | Zero layout shift, automatic optimization |
| Deployment | Vercel | One-command deploy, preview URLs, edge CDN |

---

## AI Tools Used

AI was used as a **design accelerator**, not a code generator. The distinction matters: prompting for complete components without design constraints produces generic output. Prompting with an explicit design system — exact color tokens, animation rules, spacing philosophy, component interfaces — produces output that fits the system.

**Google AI Studio (Gemini)** was the primary tool. A detailed system prompt encoding the full design system (colors, typography, animation easing curves, component rules, what to never do) was written first. Individual section components were then generated against that system prompt, producing consistent output that required refinement rather than rebuilding.

**Runway ML** was used to generate supplementary atmospheric video clips where official footage was unavailable — specifically for interior drone-style shots of the entertainment and dining zones.

**Midjourney / Ideogram** was used for AI-generated property renderings and event photography placeholders, maintaining visual consistency with the dark, warm color treatment of the overall design.

The write-up you are reading was written by the developer, not generated — design rationale requires the reasoning behind decisions, which only exists in the person who made them.

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/american-dream-deck
cd american-dream-deck

# Install dependencies
npm install

# Add your assets
# Drop hero video → /public/assets/video/hero.mp4
# Drop images    → /public/assets/images/

# Run development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

**Asset requirements:**
- `hero.mp4` — aerial/cinematic property footage, compressed to <8MB (use ffmpeg: `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an hero.mp4`)
- Property images — 1920×1080 minimum, placed in `/public/assets/images/`

---

## What I Would Improve With More Time

**Genuine interactivity on CTAs.** The leasing and sponsorship CTAs currently link to `#`. With a backend (even a simple Next.js API route feeding into a CRM or Notion database), inquiry submissions could be captured in real time — turning this from a presentation into a lead generation tool.

**Per-section video.** The hero has a cinematic video background. Entertainment, Events, and Dining would all benefit from the same treatment — short, autoplay clips that play as you scroll into each section. The architecture supports it; it's a content and performance problem, not a code problem.

**Deeper leasing paths.** Each of the four leasing categories (Luxury, Retail, F&B, Pop-Up) could expand into its own sub-module with floor plan visuals, comparable tenant case studies, and a direct inquiry form tailored to that category.

**Analytics layer.** A sales tool without engagement tracking is blind. Knowing which sections prospects spend the most time on, which CTAs they hover but don't click, and where they drop off would make every sales conversation smarter.

---

## Notes

This project was completed as a screening assignment for the LIAT.AI Senior Frontend Engineer & AI-Powered Interactive Design role. The content — statistics, tenant references, event highlights — is drawn from publicly available American Dream Mall press materials and supplemented with AI-generated assets where real media was unavailable. It is a demonstration of design and engineering capability, not an official American Dream property.

---

*Built by Biswajit Roy · [github.com/Biswajit2595](https://github.com/Biswajit2595) · [linkedin.com/in/biswajitroy95](https://linkedin.com/in/biswajitroy95) · [biswajit2595.github.io](https://biswajit2595.github.io)*