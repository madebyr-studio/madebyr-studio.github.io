# made by r. — studio site

A static site with no build step and no dependencies: plain HTML, CSS and JavaScript. It is Arabic-first (RTL) with a full English version. The language toggle is remembered in the browser.

## Structure

```
index.html                 Homepage (hero + The Orbit, work, AI showcase, collection, services, studio, contact)
assets/                    Shared studio styles and scripts (mbr.css, case.css, i18n.js, home.js, case.js)
work/perfume/              Private perfume advisor showcase (scripted recordings only)
work/qishr|nada|khatt/     Case studies for the three landing-page concepts
demo/qishr/                Qishr — specialty coffee roastery (live site)
demo/nada/                 Nada — skincare (live site)
demo/khatt/                Khatt — variable-type playground (live site)
```

Each demo is self-contained in its own folder (index.html, style.css, app.js and a copy of i18n.js), so it can be moved to its own domain later.

NASJ (fashion) is not included yet. Its new direction is waiting for approval.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Deploy

Upload the folder to any static host. For Vercel, `vercel.json` keeps a trailing slash on folder routes, so `/demo/qishr` becomes `/demo/qishr/` and the relative paths resolve correctly.

## Contact

- Email: made1by.r@gmail.com (a `mailto:` link in the contact section and the footer)
- TikTok: https://www.tiktok.com/@madebyr.studio (contact section and footer; opens in a new tab)

## Connecting the inquiry form

The form does not send anything until `FORM_ENDPOINT` in `assets/home.js` is set. While it is empty, the form says plainly that nothing was sent, and offers the visitor a copy of their message to email instead.

To connect it with Formspree:

1. Sign up at formspree.io with made1by.r@gmail.com and confirm the email they send you.
2. Create a new form. Copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. In `assets/home.js`, line 5, change `var FORM_ENDPOINT = '';` to `var FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz';`
4. Deploy the site to a real host, such as Vercel or your own domain. The claude.ai preview blocks requests to outside services, so the form can never send from there.
5. On the live site, submit one test inquiry. Confirm that it arrives in Gmail (check spam too) and appears in the Formspree dashboard. Only then treat the form as working.

The form already posts JSON with `Accept: application/json`, which Formspree accepts. It shows a thank-you message only when the service confirms receipt, and an error message otherwise.

## What is deliberately not real

- **Perfume advisor.** The page plays prerecorded conversations from local data only. There is no API call, no key, no endpoint and no open text input.
- **Qishr, Nada and Khatt.** These are fictional brands, labelled as self-initiated concepts throughout. Prices are illustrative.
  - Bags and orders exist only in the page, and checkout is disabled with an explanation.
  - Newsletters and waitlists say that nothing was saved or sent.
- **Khatt.** The playground and the "Copy CSS" button really work. The copied code is valid with the Handjet font from Google Fonts.

## Fonts

All fonts load from Google Fonts. If they fail to load, the pages fall back to system fonts. On Khatt this means the letters cannot change shape, because the fallback font has no variable axes.
