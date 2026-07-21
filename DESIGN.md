# Wildliving Design System
> Category: Lifestyle & Real Estate
> Nature lifestyle real estate platform. Editorial, calm, emotionally intelligent.
> References: Kinfolk, Aesop, Muji, The Line Hotel, Mr & Mrs Smith.
> UX principle: editorial without sacrificing usability. Every beautiful decision must also be a functional one.

---

## 1. Visual Theme & Atmosphere

Wildliving feels like a curated nature lifestyle magazine — but one you can book from.

The overall aesthetic is:
- **Editorial minimalism** — generous white space, deliberate typography, restrained color
- **Warm and organic** — neutrals inspired by paper, stone, moss, and earth
- **Cinematic calm** — full-bleed photography, unhurried layouts, slow scroll
- **Premium without ostentation** — elevated but never flashy, never corporate
- **Usable by design** — every editorial choice must also orient the user toward action

The result should feel like opening Kinfolk magazine inside Mr & Mrs Smith: everything is considered, nothing is accidental, and the next step is always clear.

Never:
- Startup-style bright UI
- Generic real estate portal look
- Dark backgrounds except in photographic heroes and footer
- Flashy animations or aggressive micro-interactions
- Beautiful but passive layouts that give the user nowhere to go

---

## 2. Color Palette

### Primary tokens

| Token   | Hex         | Usage                                                                    |
|---------|-------------|--------------------------------------------------------------------------|
| Papel   | `#F2F0EB`   | Global background — every page, every section by default                 |
| Arena   | `#C8C4BC`   | Borders, dividers, secondary text, placeholder text                      |
| Piedra  | `#6B6B60`   | Supporting text, labels, captions, metadata                              |
| Noche   | `#1E1E1A`   | Primary text, Collection badge background, dark heroes, footer           |
| Musgo   | `#7C9A6E`   | Brand accent — CTAs, Selected badge, logo dot, hover states, action links|
| Musgo-D | `#6B8A5E`   | Musgo hover state — buttons deepen on hover, never lighten               |
| Roca    | `#EDEBE6`   | Card backgrounds, alternating sections, sticky bars, subtle containers   |

### Usage rules

- **Papel** is the default background everywhere. Never use white `#FFFFFF`.
- **Musgo** is the only accent color. Maximum one CTA in Musgo per section.
- **Musgo-D** is only used as the hover state of Musgo buttons — never as a standalone color.
- **Dark backgrounds** (Noche) are reserved exclusively for: full-bleed photographic heroes, the footer, property badges, and the consultancy banner. Never use Noche as a content section background.
- **Roca** alternates with Papel to create visual rhythm. Also used for sticky bars and key facts containers.
- No additional colors. No gradients. No shadows heavier than `0 2px 12px rgba(30,30,26,0.08)`.

---

## 3. Typography

### Font families

| Role              | Font                    | Source       | Usage                                                               |
|-------------------|-------------------------|--------------|---------------------------------------------------------------------|
| Serif editorial   | Cormorant Garamond      | Google Fonts | Property names, destination titles, pull quotes, hero headlines     |
| Serif display     | Playfair Display Medium | Google Fonts | Wordmark "Wild·living" only. Center dot always in Musgo.            |
| Sans functional   | DM Sans                 | Google Fonts | Navigation, buttons, labels, prices, body text, all UI elements     |

### Scale (base 16px)

| Label      | Size      | Font                | Weight | Line-height | Notes                              |
|------------|-----------|---------------------|--------|-------------|------------------------------------|
| Display    | 56–72px   | Cormorant Garamond  | 300    | 1.05        | Hero headlines, section openers    |
| H1         | 40px      | Cormorant Garamond  | 300    | 1.1         | Property name on detail page       |
| H2         | 28px      | Cormorant Garamond  | 300    | 1.1         | Section titles                     |
| H3         | 20px      | DM Sans             | 500    | 1.3         | Card titles, sub-sections          |
| Body       | 16–17px   | DM Sans             | 300    | 1.7–1.85    | Paragraph text. 17px on detail pages. |
| Caption    | 13px      | DM Sans             | 400    | 1.5         | Metadata, dates, location tags     |
| Label      | 9–11px    | DM Sans             | 500    | —           | Badges, eyebrows, uppercase tags   |
| Price      | 18px      | DM Sans             | 500    | —           | Nightly rates, "desde $X"          |
| Action     | 10px      | DM Sans             | 400    | —           | Inline action links "→ Ver más"    |

### Typography rules

- **Italic** is reserved exclusively for property names: *Casa Calma*, *Casa Paz*. No other text uses italic.
- **No bold** in editorial body text. Bold only in UI labels and navigation.
- **No uppercase** except for badge labels (COLLECTION, SELECTED), eyebrows, and very small metadata tags.
- **Line height** for body: 1.7–1.85. For headlines: 1.05–1.2. Tighter headlines feel more editorial.
- **Letter spacing** for uppercase labels and eyebrows: 0.20–0.28em. For Display headlines: -0.01em.
- **font-feature-settings:** `"liga" 1, "kern" 1` on all Cormorant Garamond elements.
- Wordmark: "Wild·living" — the center dot (`·`) is always in Musgo `#7C9A6E`, never any other color.

---

## 4. Spacing & Layout

### Grid

- Max content width: **1200px**
- Page padding (mobile): `24px`
- Page padding (desktop): `80px`
- Column grid: 12-column, 24px gutter

### Spacing scale (multiples of 8px)

| Token | Value  | Usage                                     |
|-------|--------|-------------------------------------------|
| xs    | 8px    | Internal component padding                |
| sm    | 16px   | Between inline elements                   |
| md    | 32px   | Between components within a section       |
| lg    | 64px   | Between sections                          |
| xl    | 120px  | Major section breaks, hero padding        |

Mobile section padding: standardize to `64px 24px` across all pages.

### Layout principles

- **Space is not wasted** — generous white space communicates premium.
- Hero sections: full viewport height (`100svh`) or full-bleed, minimum `600px`.
- Card images: always `4:3` ratio. Hero images: `16:9` or full-viewport.
- Never stack more than 3 cards per row on desktop. 2 per row preferred for property listings.
- Section backgrounds alternate: Papel → Roca → Papel → Noche (photography only).
- **Every section must offer a next step.** A section with no visible action path is incomplete.

---

## 5. Components

### PropertyCard

Displays a curated property in a listing grid.

```
[ Full-bleed image 4:3 — hover: scale(1.02) + gradient overlay ]
[ Badge: COLLECTION | SELECTED — top-left, 12px inset ]
Property Name (Cormorant, italic)
Location · Region                    (DM Sans 11px, uppercase, --stone)
Desde $X / noche                     (DM Sans 500 16px, --night)
"Verificá disponibilidad →"          (DM Sans 11px, --moss — text link)
[ CTA: "Ver fechas y precio →" ]
```

- Collection badge: background Noche, text Papel
- Selected badge: background Musgo, text Papel
- Badge font: DM Sans 10px uppercase letter-spacing 0.1em, padding 5px 12px
- Card background: Roca
- Card info padding: 40px 36px desktop, 24px 20px mobile
- On hover: image `scale(1.02)` + gradient overlay `rgba(30,30,26,.12)`, transition 400ms ease
- Hover lifts card: `box-shadow: 0 8px 32px rgba(30,30,26,.08)`, transition 400ms ease
- Price: 1px --sand rule above it, 20px margin

### BookingCTA

Primary action button. Behavior varies by property type.

```
[ Reservar →  ]          (Collection — Lodgify)
[ Ver en Airbnb ↗ ]      (Selected — external platform)
[ Consultar disponibilidad → ]  (Selected — direct)
```

- Background: Musgo `#7C9A6E` → hover Musgo-D `#6B8A5E`
- Text: Papel `#F2F0EB`
- Font: DM Sans 10px, uppercase, letter-spacing 0.22em
- Border radius: 0 (geometric, clean — never rounded)
- Padding: 14px 34px
- Minimum touch target: 44px height on mobile
- No shadows on buttons

### StickyBookingBar *(new)*

Fixed bar at the bottom of the screen on property detail pages. Appears when the main CTA box scrolls out of view. Disappears before the footer.

```
[ desde $X / noche ]  [ Reservar → ]  [ Consultar ]
```

- Background: `rgba(242,240,235,0.97)` with `backdrop-filter: blur(8px)`
- Border top: `1px solid var(--sand)`
- Padding: `14px 24px`
- Z-index: 1000
- Price: DM Sans 500 15px --night (left)
- "Reservar →": Musgo button, 44px min height
- "Consultar": border 1px --night, transparent background, --night text, same height
- Show logic: `IntersectionObserver` on the main CTA box — bar appears when box is out of viewport
- Links: "Reservar" → Lodgify checkout. "Consultar" → `/contacto/?prop=[slug]`

### PropertyDetailPage *(new)*

Layout structure for `/stay/[slug]/` pages.

```
[ Hero — full viewport, image background, gradient overlay ]
  [ H1 property name — Cormorant 300, white ]
  [ Location — DM Sans 10px, --moss-l, uppercase ]
  [ Badge COLLECTION top-left ]

[ KeyFactsBar ]

[ Two column layout — 60% / 40% desktop, single column mobile ]
  Left:
    [ Description — Cormorant 300 20px --stone, border-left --sand ]
    [ Tags — DM Sans 9px uppercase, border --sand ]
    [ Price — DM Sans 500 18px --night ]
  Right:
    [ CTA box — background --rock, padding 40px ]
    [ Booking button + consultar note ]

[ ExplorationCard section — "Seguí explorando" ]
[ Footer ]
[ StickyBookingBar — fixed bottom ]
```

### KeyFactsBar *(new)*

Horizontal bar with 4 quick facts. Positioned immediately below the hero.

```
[ icon  3 dormitorios ]  [ icon  Hasta 6 personas ]  [ icon  15 min centro ]  [ icon  Reserva directa ]
```

- Background: Roca
- Padding: 20px 48px desktop, 16px 24px mobile
- 4 columns desktop, 2×2 mobile
- Each item: SVG line icon (16×16, --moss stroke, stroke-width 1.5) + DM Sans 300 13px --stone
- Icons: bed, users, map-pin, check — simple geometric SVG, no emojis

### ExplorationCard *(new)*

Horizontal card used in the "Seguí explorando" section at the bottom of property pages. Always shows the *other* property — creates internal navigation loop.

```
[ Image 40% left ] [ Content 60% right ]
  Badge
  Name (Cormorant italic)
  Location (DM Sans --stone)
  Description — 2 lines max, ellipsis
  Price
  [ Ver propiedad → ]
```

- Mobile: stacked (image top, content bottom)
- Entire card is clickable → `/stay/[other-slug]/`
- Section eyebrow: "Seguí explorando" --moss 9px uppercase
- Section headline: Cormorant 300 32px: "Otras propiedades en [Destination]."
- Background: Roca

### InlineActionLink *(new)*

Editorial footnote-style action. Used after manifesto paragraphs, not as buttons.

```
→ Ver propiedades disponibles
→ Consultar sin compromiso
```

- Font: DM Sans 300 14px --moss
- No background, no border, no padding
- Arrow `→` is part of the text, not a separate element
- Appears after philosophical/manifesto content to redirect to action
- Line-height: 1. Margin-top: 24px from preceding paragraph.

### PropertyBadge

- DM Sans 10px uppercase letter-spacing 0.1em
- Padding: 5px 12px
- Border radius: 0
- Collection: background Noche, text Papel
- Selected: background Musgo, text Papel

### NavigationBar

- Background: transparent over hero photography; `rgba(242,240,235,0.96)` + `backdrop-filter: blur(12px)` after 80px scroll
- Transition: background 300ms ease
- Logo left: "Wild·living" in Playfair Display Medium, dot in Musgo
- Logo color: --paper over hero, transitions to --night when nav becomes opaque
- Links: DM Sans 14px, Piedra, hover Noche, 200ms ease
- Active page link: color --night, border-bottom `1px solid var(--moss)`
- Language toggle: ES | EN — DM Sans 12px, understated
- Mobile: hamburger ☰ right side, toggles full-screen overlay
- Hamburger overlay: background --night, links vertical centered, DM Sans 13px letter-spacing .18em uppercase, rgba(250,250,247,.7)

### FilterBar

Used in `/wildstays` and `/wildhomes` listing pages.

- Pill-style: background Roca, border Arena, text Piedra
- Active: background Noche, text Papel
- Font: DM Sans 13px
- Spacing: 8px between pills
- Mobile: sticky below nav, `position: sticky; top: [nav-height]px`, horizontal scroll, background --paper, border-bottom 1px --sand

### FilmStrip

- Images only — no text overlays, no property cards
- Landscape photography, natural environments, no people
- 16:9 ratio per image
- Smooth horizontal scroll, no visible scrollbar
- Caption below (optional): DM Sans 12px Piedra

---

## 6. Photography & Image Direction

### Style

- **Natural light** — never studio flash, never HDR
- **Unhurried** — empty spaces, morning light, stillness
- **Nature as protagonist** — the environment is the reason, not the backdrop
- **Warm neutrals** — aligned with the palette (no cold blue tones)
- References: Kinfolk editorial photography, Aesop product photography

### Rules

- Never use stock photography that looks generic or staged
- Interiors: natural light only, real objects in place, no fake styling
- Exteriors: golden hour or overcast preferred; avoid midday harsh light
- People: if present, partial — hands, silhouettes, backs. Never portrait-style.
- No logos, watermarks, or text overlays on photography

### Ratios

| Context          | Ratio              |
|------------------|--------------------|
| Hero full-bleed  | 16:9 or full viewport |
| Property card    | 4:3                |
| ExplorationCard  | 4:3 (40% width)    |
| Film strip       | 16:9               |
| Editorial        | 3:2                |

### Image hosting pattern

```
https://lh3.googleusercontent.com/d/[FILE_ID]
```

- Editorial/lifestyle: folder `1UWU02AcqH5SGd739SchvahOvszX3BvgC`
- Properties: folder `1CIL4EKupWvtYI7dCYjVmQjVY8xvn2lk7`
- Casa Calma: folder `1RtClvpIAMHeilqvGJX7PHGE9xYLpa73M`
- Folders must be publicly shared. Images >40KB: compress → upload manually → copy file ID.

---

## 7. Voice & Copy Tone

### Core principle

**Copy orients action, it does not teach philosophy.** Every paragraph should give the user a reason to stay, explore, or decide — not a reason to admire and leave. Manifesto content earns its place only when followed by a clear next step.

### Tone

- **Intelligent, calm, editorial** — reads like a lifestyle magazine, not a listing
- **Action-oriented** — names what the user can do, not what Wildliving believes
- **Emotionally aware** — speaks to identity and aspiration, not features and square meters
- **Never urgent** — no scarcity, no pressure, no countdown energy
- **Never corporate** — no "somos líderes en", no "la mejor opción calidad-precio"

### Copy structure by page type

| Page | Hero | Below hero | Mid-page | Bottom |
|---|---|---|---|---|
| Home | Orienting headline + what you can do here | Property cards with price | Manifesto (brief) + InlineActionLink | Exploration hook |
| Listing `/wildstays/` | Destination + two-line differentiator | Filter bar | Property cards | Consultation banner |
| Property `/stay/` | Atmosphere headline | KeyFactsBar | Description + CTA | ExplorationCard |
| Sobre | Identity statement | Values (3 columns) | Destinations strip | Two CTAs |
| Propietarios | What they get | Two types | How it works | Contact form |

### Property descriptions

- Narrate the environment, not the amenities
- Lead with a concrete detail: proximity, sensation, a physical fact
- 60–100 words for cards, 100–140 for detail pages
- Spanish (`description_es`) and English (`description_en`) required
- Structure: [concrete detail] → [what it enables] → [who it's for]

### Phrases that must never appear

> "¡Reservá ahora!" · "Últimas disponibilidades" · "Oferta especial" · "No te lo pierdas" · "Hacé clic aquí" · "Completá el formulario" · "Somos líderes en" · "La mejor opción calidad-precio" · "Creemos que el futuro de..." (standalone, without a following action)

### Action phrases that are allowed (use these instead)

> "Ver fechas y precio →" · "Verificá disponibilidad →" · "Consultar sin compromiso →" · "Explorar propiedades →" · "Reservá directo — sin comisiones" · "Escribinos — coordinamos a medida."

### Key brand phrases (use sparingly)

> "Find your next home in nature." · "No vendemos metros cuadrados." · "Wildliving no describe propiedades. Certifica experiencias." · "No es un listado. Es una selección."

### Language

- Primary: Spanish (Argentina, informal but elegant)
- Secondary: English (international buyers and travelers)
- Never mix languages within the same UI element

---

## 8. Interaction, Motion & UX Behavior

Motion in Wildliving is an editorial instrument — it communicates calm, intention, and premium. Every animation should feel like turning the page of a magazine, never like a notification.

### Motion principles

- **Slow is premium.** Fast animations signal urgency. Wildliving never rushes.
- **One thing moves at a time.** Avoid simultaneous multi-element animations.
- **Motion amplifies hierarchy.** The most important element enters first.
- **Never bounce.** Spring physics and elastic easing are incompatible with the brand.

### Easing curves by context

| Context | Curve | Duration | CSS value |
|---|---|---|---|
| Element entering viewport | Ease out | 500–600ms | `cubic-bezier(0.0, 0.0, 0.2, 1)` |
| Element leaving/collapsing | Ease in | 300–350ms | `cubic-bezier(0.4, 0.0, 1, 1)` |
| Hover transforms | Ease | 300–400ms | `cubic-bezier(0.4, 0.0, 0.2, 1)` |
| Nav scroll transition | Ease | 300ms | `ease` |
| Micro-interactions | Ease | 150–200ms | `ease` |

### Scroll reveal

- Trigger: `IntersectionObserver`, threshold `0.15`
- Animation: `opacity 0→1` + `translateY 24px→0`. Max 24px vertical travel.
- Stagger between siblings: 80ms desktop, 40ms mobile
- Fire once only — `observer.unobserve()` after first trigger
- Mobile: keep opacity fade, remove translateY if performance is a concern
- Content visible on initial load: no animation

### Nav scroll behavior

- Transparent over hero photography
- After 80px scroll: `rgba(242,240,235,0.96)` + `backdrop-filter: blur(12px)`, 300ms ease
- Logo color shifts from --paper to --night simultaneously

### Hover states

- Property cards: `scale(1.02)` on image only + gradient overlay + card box-shadow lift. 400ms ease.
- CTA buttons: background Musgo → Musgo-D `#6B8A5E`. 300ms ease. No scale on buttons.
- Navigation links: Piedra → Noche. 200ms ease. No underline animation.
- InlineActionLinks: --moss → Noche. 150ms ease.
- No tooltips, no popovers, no content appearing on hover in editorial sections.

### Mobile UX rules

- **Minimum touch target: 44×44px** for all interactive elements (buttons, links, icons)
- StickyBookingBar always visible on property pages mobile — never hidden
- FilterBar sticky below nav on listing pages mobile
- No parallax on mobile (performance + motion sickness)
- Hamburger menu: full-screen overlay, not a dropdown
- Card grid gap: 2px on mobile

### Form states

- Focus: `border-bottom: 2px solid var(--moss)`, transition 200ms ease
- Default: `border-bottom: 1px solid var(--sand)`
- Error: `border-bottom: 2px solid #C97B5A` (warm terracotta — only color exception allowed)
- Placeholder: DM Sans 300, --arena
- Submit buttons: minimum 44px height, full width on mobile

### What never moves

- Text blocks — typography is static
- The logo — the wordmark never animates
- Entire section backgrounds
- Anything that could cause layout shift on mobile

### Video as hero

- Always: muted, looped, `preload="none"` with poster fallback
- Content: nature footage — water, forest, wind, light. No people, no branding, no cuts.
- No camera movement that induces motion sickness
- Fallback: high-quality still from same footage as `poster` attribute

---

## 9. Platform Architecture

### Current stack (Fase 1 — Junio 2026)

| Layer | Tool | Role |
|---|---|---|
| Frontend | Netlify + static HTML | Publishing. Drag & drop or GitHub auto-deploy. |
| Data | `/data/[destination].json` | Property inventory per destination. Source of truth in Fase 1. |
| PMS / Booking | Lodgify (Website ID: 651630) | Calendars, availability, channel sync, checkout. |
| Dynamic pricing | PriceLabs (1% revenue plan) | Integrated with Booking.com natively. |
| Distribution | Airbnb + Booking.com | Synced via Lodgify. |
| Payments | Revolut (LT IBAN) + Stripe | Direct booking payments. |
| Affiliate | Booking.com via Awin/CJ | For Selected properties on Booking. |
| Image hosting | Google Drive → lh3.googleusercontent.com | See folder structure in Section 6. |

### Two-layer UX architecture (critical principle)

Wildliving uses two completely separate search layers. Never mix them.

```
Layer 1 — Discovery (stays inside wildliving.life)
Home form / FilterBar → /wildstays/[destination]?params → /stay/[slug]
Custom HTML form only. Never Lodgify Portable Search Bar.

Layer 2 — Booking (exits to external tool)
/stay/[slug] → pay.lodgify.com/651630/[property-id]  (Collection)
/stay/[slug] → Airbnb / Booking / GlampingHub URL    (Selected)
StickyBookingBar also exits at Layer 2.
```

### Property types

| Type | Badge | Booking flow | CTA label |
|---|---|---|---|
| Wildliving Collection | Noche | Lodgify direct link | "Reservar →" |
| Wildliving Selected | Musgo | Redirect to origin platform | "Ver en [platform] ↗" |

Internal names (never shown externally):
- Collection = "Wildstays Originals"
- Selected = "Wildstays Curated"

### Property JSON schema (`/data/patagonia.json`)

```json
{
  "name": "Casa Calma",
  "slug": "argentina-casa-calma",
  "destination": "patagonia",
  "type": "collection",
  "source": "lodgify",
  "lodgify_property_id": 803562,
  "image_main": "https://lh3.googleusercontent.com/d/[FILE_ID]",
  "price_from": 120,
  "currency": "USD",
  "location": "Circuito Chico, Bariloche",
  "region": "Patagonia · Argentina",
  "description_es": "...",
  "description_en": "...",
  "tags": ["Pareja", "Solo", "Naturaleza"],
  "featured": true,
  "affiliate_url": null
}
```

### URL structure

```
/                              → Home
/wildstays/[destination]/      → Listing page
/stay/[destination]-[slug]/    → Property detail
/data/[destination].json       → Data source
/sobre/                        → About
/propietarios/                 → Property owners
/contacto/                     → Contact
/wildhomes/                    → Real estate (Fase 2)
```

Slugs are globally unique: `[destination]-[property-name]`. No slug can exist in two regions.

---

## 10. Brand Do's and Don'ts

| ✓ Do | ✗ Don't |
|---|---|
| Use Papel as background everywhere | Use white `#FFFFFF` as background |
| Reserve italic for property names only | Use italic for decorative or emphasis purposes |
| Use Musgo as the single accent color | Introduce new accent colors |
| Write property copy as environments, not listings | List amenities in bullet points |
| Use generous white space | Pack elements tightly |
| Keep the logo dot in Musgo always | Change the dot color in any context |
| Show price prominently on every property card | Hide price until the user clicks |
| Give every section a visible next step | Leave sections without an action path |
| Use 44px minimum touch targets on mobile | Make interactive elements smaller than 44px |
| Follow copy with InlineActionLinks after manifesto content | Let philosophy sections stand alone without action |
| Use SVG line icons for UI facts | Use emojis in editorial context |
| Communicate from confidence and calm | Communicate urgency, scarcity, or pressure |

---

## 11. Pre-Publication Critique Checklist

Before publishing or approving any HTML section, component, or page — apply all five questions. Any AI generating Wildliving components must self-evaluate before emitting final output.

---

### Q1 — Background

> Is every background either Papel, Roca, Noche (hero/footer only), or a full-bleed photograph?

**Pass:** Only these four options appear.
**Fail:** White `#FFFFFF` anywhere. New color introduced. Content section uses Noche.

---

### Q2 — Typography hierarchy

> Is the type hierarchy legible, intentional, and free of weight violations?

**Pass:** Display/H1/H2 in Cormorant Garamond. H3/body/labels/prices in DM Sans. Italic only on property names. No bold in body. No text below 13px.
**Fail:** Italic used for decoration. Bold in paragraph text. Weights 600 or 700 appear. System font fallback visible.

---

### Q3 — Accent discipline

> Is Musgo the only color accent, appearing at most once per section as a CTA?

**Pass:** Only Musgo on interactive elements, badges (Selected), logo dot, hover states, InlineActionLinks.
**Fail:** Second accent color appeared. Musgo used decoratively. Multiple Musgo CTAs in one section.

---

### Q4 — Copy tone and action

> Does the copy orient the user toward a next step, in the voice of a lifestyle magazine?

**Pass:** The text narrates environment or aspiration AND offers a visible action path. Would not look out of place in Kinfolk or Mr & Mrs Smith.
**Fail:** Prohibited phrases appear. Text lists amenities as bullets. Tone is urgent or transactional. Section ends with no action path. **Quick test:** Replace "Wildliving" with any portal name — if the text still works, it needs more work.

---

### Q5 — Motion and interaction

> Is motion calm, purposeful, fired once, and do all interactive elements meet 44px touch target?

**Pass:** Scroll animations use opacity + translateY (max 24px), triggered once by IntersectionObserver, correct easing. Hover limited to scale(1.02) on images and color shifts on interactive elements. All touch targets ≥ 44px.
**Fail:** Bounce/spring easing. Animations repeat on scroll. Multiple simultaneous animations. Motion on static text. Logo animates. Touch targets below 44px on mobile.

---

### Critique scoring

| Score | Meaning |
|---|---|
| 5/5 | Ready to publish |
| 4/5 | One revision pass — identify and fix the failing dimension |
| 3/5 or below | Full review required — do not publish |

---

*Wildliving · wildliving.life · Find your next home in nature.*
*Design System v2.0 · Junio 2026*
*Supersedes v1.0 and v1.1*
