# Drop — website

Pre-launch site for Drop: plastic-free shampoo and conditioner bars.

It's plain HTML, CSS and JavaScript. There's nothing to install and no build step.

- `index.html` — the homepage
- `styles.css` — all styling (colours are at the top, under `:root`)
- `main.js` — forms and the "Would you switch?" quiz
- `PRODUCT.md` — brand and product facts, including which claims are allowed and which aren't
- `DESIGN.md` — the visual system

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Signups

The waitlist and tester forms send to Formspree. The form URL is `FORM_ENDPOINT` at the top of `main.js`.

## Before launch

- Replace the stock photos with real Drop product photos (see `DESIGN.md`).
- Confirm every ingredient claim with your cosmetic chemist.
