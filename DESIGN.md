# Drop — design notes

The site uses a natural, earthy storefront look, like other eco-friendly soap and haircare shops.

## Colours (set at the top of `styles.css`)

- Cream `#f6f1e7` — page background
- Paper `#fcfaf5` — cards and form fields
- Sand `#ebe2d0` — soft bands and photo placeholders
- Sage `#93a384` — light green accents
- Moss `#5b6b4e` — buttons and links
- Forest `#2e3a2b` — dark bands and footer
- Clay `#a8683f` — small uppercase labels

## Fonts

- Headings: Fraunces (loaded from Google Fonts), a soft serif
- Body: Hanken Grotesk (in `fonts/`)

## Photos

Large lifestyle photos carry the look: healthy wavy hair (shot from behind, no faces), bars of soap on wood or linen, and green leaves. Photos sit in rounded frames; the hero photo has an arched top.

Current photos are free stock images loaded from Unsplash. Replace them with real Drop product photos when they exist: put the files in `assets/` and change the `src` of each `<img>` in `index.html`.

## Wording

Plain, friendly, short sentences. Lead with "eco-friendly shampoo bar" and "no plastic bottle". Don't use technical words like "syndet" on the site. Only make claims listed as allowed in `PRODUCT.md`.

## Page order

Announcement bar, header, hero with waitlist form, four promises (works, smells amazing, looks good, low-waste), the switch (before and after shelf drawing), the Drop difference, what's really in your shower, the lineup, who it's for (with the travel band), the planet part, how to use, photo strip, founder story, quiz, tester signup, FAQ, closing waitlist, footer.
