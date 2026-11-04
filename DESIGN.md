---
name: Drop
description: Plastic-free syndet hair bars, presented as a glazed pool-tile wall you descend from 0.0 m to 3.0 m.
colors:
  glaze-0: "#cdeeea"
  glaze-1: "#b6e4df"
  glaze-2: "#9cd8d2"
  glaze-3: "#80c9c2"
  glaze-4: "#1d6f73"
  glaze-5: "#145a5e"
  glaze-6: "#0c4145"
  ink: "#0b3236"
  ink-soft: "#1c474b"
  ink-muted: "#3d5f62"
  foam: "#effaf8"
  foam-soft: "#d6efeb"
  grout: "#f6f2ea"
  niche-white: "#e9f7f5"
  lemon: "#f6c93c"
  lemon-hi: "#ffe27a"
  coral: "#f39a86"
  coral-deep: "#e07a64"
  error: "#9c2f1c"
  error-on-deep: "#ffb4a3"
typography:
  display:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 1.6rem + 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 3vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 104"
  headline-small:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 104"
  title:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.15
    fontVariation: "'wdth' 96"
  marker:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 58"
  wordmark:
    fontFamily: "Anybody, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 140"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  tile: "2px"
spacing:
  hairline: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  tile: "56px"
  gutter: "clamp(20px, 5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.grout}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#134a4f"
  button-lemon:
    backgroundColor: "{colors.lemon}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    padding: "0 22px"
    height: "52px"
  button-lemon-hover:
    backgroundColor: "{colors.lemon-hi}"
  button-small:
    padding: "0 16px"
    height: "42px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "0 16px"
    height: "52px"
  quiz-option:
    backgroundColor: "#0d4a4e"
    textColor: "{colors.foam}"
    rounded: "{rounded.tile}"
    padding: "14px 20px"
    height: "64px"
  quiz-option-selected:
    backgroundColor: "{colors.lemon}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.grout}"
    rounded: "{rounded.tile}"
    padding: "5px 10px"
  depth-plaque:
    backgroundColor: "{colors.grout}"
    textColor: "{colors.ink}"
    typography: "{typography.marker}"
    width: "110px"
    height: "54px"
  tile-slab:
    backgroundColor: "{colors.grout}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "20px 28px"
  niche:
    backgroundColor: "{colors.niche-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "28px"
---

# Design System: Drop

## Overview

**Creative North Star: "The Pool Wall You Descend"**

The shower is the brand surface. Every band of the page is a field of glazed square tile set in warm off-white grout, and the glaze steps from pale aqua at the surface to deep teal at the bottom, one tone per section. A depth gauge pinned to the viewport and white depth-marker plaques set into the wall (0.5 m, 1.0 m ... 3.0 m) make scrolling read as going deeper. The products appear as what they are: pigmented water-drop bars, lemon for shampoo and coral for conditioner.

The world is bright, clean and a little playful, built from real bathroom material rather than eco clichés. Density is moderate: generous tile-sized vertical rhythm, copy set on grout-white slabs and recessed niches, controls that feel like tile edges. Type does the loud work. Anybody's width axis is stretched wide and heavy for headlines and squeezed condensed for depth numerals, while Hanken Grotesk carries everything a visitor actually reads.

Confirmed rejection: the category default of a cream or kraft "eco" page with botanical sprigs and a split hero beside a product shot. Drop's ground is tile and water, never paper and leaves.

**Key Characteristics:**
- A 56px square tile grid with 2px grout lines and a soft 135-degree glaze sheen is the ground of every band.
- Seven glaze tones map to depth; light glazes carry ink text, deep glazes carry foam text.
- Grout-white slabs, recessed niches and white plaques are the only "cards".
- Lemon is both the shampoo pigment and the single interaction accent.
- Square-edged controls (2px radius) with deep-teal fills.
- Anybody's width axis encodes role: wide for the wordmark, near-normal for headlines, condensed for numerals.

## Colors

A cool aqua-to-teal glaze ramp, warm grout neutrals, and two pigment accents taken straight from the bars.

### Primary
- **Deep-Teal Ink** (ink): the text color on all light glazes, and the fill of primary buttons and tags. Hover lifts it one shade to a slightly brighter teal.
- **Shallow-Water Ink** (ink-soft): ledes, descriptions and secondary copy on light glazes.

### Secondary
- **Shampoo Lemon** (lemon): the shampoo-bar pigment and the one interaction accent: focus rings, text selection, the checked quiz option, quiz progress, the FAQ plus, the gauge marker, and the waitlist button in the deep end. **Lemon Highlight** (lemon-hi) is its hover state and the bar's sheen.

### Tertiary
- **Conditioner Coral** (coral): the conditioner-bar pigment only. **Deep Coral** (coral-deep) is the strike-through color on "what bars used to be" lines.

### Neutral
- **The Glaze Ramp** (glaze-0 through glaze-6): band backgrounds in descent order. glaze-0 (surface aqua) is the hero and nav; glaze-1 to glaze-3 are the shallow bands; glaze-4 to glaze-6 are the deep end, where text turns to foam.
- **Warm Grout** (grout): grout lines (at 62% opacity on light glaze, 48% on glaze-3, 36% in the deep end), comparison and fix slabs, depth plaques, step numerals, the gauge readout, and the text on ink buttons.
- **Niche White** (niche-white): the cool, slightly aqua interior of recessed niches and perk tiles.
- **Foam** (foam) and **Soft Foam** (foam-soft): primary and secondary text on deep glazes.
- **Muted Ink** (ink-muted): the "old way" column in comparisons and fix rows, deliberately quieter than ink.
- **Error Brick** (error) on light surfaces, **Error Blush** (error-on-deep) on glaze-6, for form status messages.

### Named Rules
**The Glaze Descent Rule.** A band's background is chosen by its depth, glaze-0 at 0.0 m through glaze-6 at 3.0 m, in order, one step per section. Never jump back up the ramp mid-page.

**The Two Pigments Rule.** Lemon and coral exist because the bars are lemon and coral. Coral never becomes a UI accent; lemon is the only color that signals focus, selection or progress.

## Typography

**Display Font:** Anybody (with Hanken Grotesk, system-ui fallback), variable weight 400–900 and width 50–150%
**Body Font:** Hanken Grotesk (with system-ui fallback), weight 400–700

**Character:** A swimming-pool signage face doing two jobs. Anybody runs wide and heavy for the voice and condensed for the numbers on the wall; Hanken Grotesk is calm, friendly and highly legible underneath.

### Hierarchy
- **Display** (900, clamp 2.9rem to 6rem, 1.04, width 112%): the hero headline only.
- **Headline** (850, clamp 2.1rem to 3.75rem, 0.98, width 104%, max 18ch): one per depth band.
- **Headline Small** (850, clamp 1.75rem to 2.5rem, width 104%): sub-sections inside a band (benefits, FAQ, the quiz verdict).
- **Title** (800, 1.375rem to 1.5rem, 1.1 to 1.15, width 96%): niche names, step titles, quiz questions; table heads drop to width 90%.
- **Marker** (850, 2.25rem, 1, width 58%): depth plaques; step numerals use 1.75rem at 62%, the gauge 1rem at 62% with tabular numerals.
- **Wordmark** (900, 1.5rem, width 140%): the DROP wordmark only.
- **Body** (400, 1.0625rem, 1.6): running copy; ledes 1.125rem to 1.25rem in ink-soft. Measure 30ch to 42rem.
- **Body Small** (600, 0.9375rem): form labels, notes, perks, consent text.
- **Label** (700, 1rem, 1): buttons and text links. Tags use 700, 0.8125rem, 0.04em tracking, uppercase.

### Named Rules
**The Width Axis Rule.** Anybody's width is a role signal: condensed (58–62%) for depth numerals and counters, near-normal (90–112%) for headlines and titles, wide (140%) for the wordmark alone.

**The Readable Water Rule.** Anything longer than a title is Hanken Grotesk. Anybody never sets a paragraph.

## Layout

The 56px tile (`--tile`) is the unit. Section padding, plaque size, step numerals, quiz option height and max widths are multiples of it: sections pad 2.25 tiles top and 1.75 bottom on mobile, 2.5 tiles both ways from 900px; the hero pads half a tile above and up to 2 tiles below. Horizontal gutter is clamp(20px, 5vw, 72px). Content columns cap at 72rem, lists at 64rem, the FAQ at 52rem.

Mobile-first, single column. From 900px the hero splits 1.15fr / 0.85fr (copy left, bar illustration right) and the nav links appear. From 980px split sections run 0.9fr / 1.1fr with a 64px gap. From 1180px content indents 4 tiles from the left so the depth plaque sits in the wall's own left margin, and the gauge becomes a vertical rail at the right edge. Grids step from 1 to 2 columns (600–760px) and to 4 columns at 1040px for steps and perks.

Internal gaps follow 4 / 8 / 16 / 24 / 40 / 64px: 4px between stacked slabs (a grout joint), 8px between paired controls, 40px from a section head to its content.

**The Grout Never Crosses Copy Rule.** From 2.0 m down, each section's content sits on a solid glaze slab with a 2px grout-line outline and clamp(20px, 3vw, 36px) padding, so grid lines never run behind text in the deep end.

## Elevation & Depth

Depth is mostly tonal and literal: the page darkens as you descend. Surfaces sit flat on the wall. Shadows appear on two kinds of object only: tactile things that stand proud of the tile (buttons, plaques, the gauge readout, drawn bars and the tin) get a small, soft cast shadow, and containers set *into* the wall (niches) get an inset shadow instead.

### Shadow Vocabulary
- **Tile lip** (`box-shadow: 0 2px 0 rgba(0,0,0,.18), 0 6px 14px -6px rgba(0,0,0,.5)`): buttons at rest; hover raises to `0 3px 0 rgba(0,0,0,.18), 0 10px 18px -8px rgba(0,0,0,.55)` with a 1px lift; active presses to `0 1px 0 rgba(0,0,0,.18)`. In the deep end the lip darkens to .25 / .5.
- **Plaque set** (`box-shadow: 0 1px 0 rgba(255,255,255,.7) inset, 0 2px 6px rgba(0,0,0,.18)`): depth plaques.
- **Readout** (`box-shadow: 0 2px 8px rgba(0,0,0,.25)`): the floating gauge readout.
- **Niche recess** (`box-shadow: inset 0 8px 14px -6px rgba(0,0,0,.32), inset 0 -1px 0 rgba(255,255,255,.8)`): product niches.
- **Object drop** (`filter: drop-shadow(0 6px 6px rgba(0,0,0,.22))`): drawn bars.

### Named Rules
**The Recessed Niche Rule.** Product containers are cut into the wall, not floated off it. Use the inset recess, never a lifted card shadow.

## Shapes

Everything is a tile edge: 2px corners on buttons, fields, slabs, niches, tags, quiz options and the gauge readout. Borders are 2px and grout-colored (solid grout on fields, grout at 50% on deep-end options and panels, foam at 16% for FAQ rules). Fixed objects snap to the tile: the plaque is 2 tiles by 1 minus a grout joint, step numerals are one tile square. The only soft curves belong to the drawn objects: the water-drop bar silhouette (also the brand mark, the gauge marker and the comparison-head icon) and the tin's rounded base.

## Components

### Buttons
Tactile and confident, like a glazed tile with a lip.
- **Shape:** tile edge (2px), 52px tall, 22px side padding; small variant 42px tall, 16px padding, 0.9375rem.
- **Primary:** deep-teal ink fill with grout text, Hanken 700.
- **Lemon:** lemon fill with ink text, used for the waitlist button on deep glaze; hover to lemon-hi.
- **Hover / Focus:** 1px lift with a deeper shadow over .25s on the house ease-out curve; 3px lemon focus outline offset 3px; disabled and busy states drop to 65% opacity.
- **Text link:** 700 weight, 2px underline that turns lemon on hover.

### Tags
- **Style:** ink fill, grout text, uppercase 0.8125rem, 0.04em tracking, 2px corners. Used for status on product niches ("Coming soon").

### Cards / Containers
- **Tile slabs** (fix rows, comparison table, perks frame): grout background, 2px corners, rows separated by 4px joints or 2px glaze-2 rules; padding 18px 20px rising to 20px 28px.
- **Niches:** niche-white interior, 28px padding, recessed shadow; the starter-kit niche spans both columns on a grout background.
- **Deep-end slabs:** solid glaze with a 2px grout-line outline (see Layout).

### Inputs / Fields
- **Style:** white fill, 2px grout border, 2px corners, 52px tall, 16px padding, Hanken 500; selects carry an inline ink chevron.
- **Focus:** border goes ink plus a 3px lemon ring.
- **Error:** brick border; status line beneath in Error Brick (Error Blush on glaze-6). Checkboxes use lemon as the accent color.

### Navigation
Brand left (lemon drop mark with ink stroke, wide wordmark), links and a small primary button right. Links are Hanken 600 with underline on hover; below 900px the links hide and only the button stays.

### Depth Gauge (signature)
Fixed to the viewport, and it's a navigation control, not just a readout. On mobile, a grout readout chip at bottom-right reads the current depth ("1.5 m") in condensed Anybody with tabular numerals. Tapping it opens a grout jump menu listing every band's depth and title, with the current band in lemon.

From 1180px, the gauge is a vertical rail (48vh) with a 28px invisible hit area around a 4px line (6px on hover or drag). A lemon drop marker travels with scroll, and you can drag the marker or press anywhere on the rail to scroll there. Every band with an id gets a depth link on the rail, placed where the page sits when that band reaches the top. Hovering or focusing a link slides out a grout plaque with the section name, and the current depth fills lemon. Keyboard: the rail is a slider, arrows step between depths and Home/End jump to the surface or the floor. The rail and links switch to foam once past 2.0 m. New bands appear on the gauge automatically if they have an id and `data-depth-value`.

### Depth Plaque (signature)
A white tile set into the wall at each band's top left, carrying the band's depth in Marker type with a smaller "m".

### Quiz Options
Deep-teal tiles with a 2px half-grout border, at least one tile plus 8px tall; hover darkens and brightens the border to full grout; checked fills lemon with ink text. Progress is a row of 28 by 8px segments that fill lemon.

## Do's and Don'ts

### Do:
- **Do** start every band from the tile ground: 56px grid, 2px grout lines, glaze color by depth.
- **Do** put a depth plaque on every new band and keep the gauge in sync with it.
- **Do** switch text to foam and foam-soft on glaze-4 and deeper, and set copy there on solid slabs.
- **Do** keep controls at 2px corners with 2px grout or ink borders and deep-teal fills.
- **Do** use lemon for every focus, selection, checked and progress state (3px outline, 3px offset).
- **Do** draw the bars as pigmented water drops (lemon shampoo, coral conditioner) with a soft object shadow.
- **Do** honor reduced motion: the bar's settle and the quiz's rise only run under `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** use a cream or kraft ground, botanical sprigs, or a split hero beside a product shot.
- **Don't** round controls or slabs past 2px; soft curves belong to the drop shape and drawn objects.
- **Don't** use coral as a UI accent or introduce a third accent hue.
- **Don't** float cards on drop shadows; containers are slabs on the wall or niches cut into it.
- **Don't** let grout lines run behind body copy from 2.0 m down.
- **Don't** set paragraphs in Anybody, or use its wide (140%) width for anything but the wordmark.
