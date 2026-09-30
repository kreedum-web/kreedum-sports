# Kreedum Sports

The website for **Kreedum Sports**, a division of Kreedum International Private Limited,
live at **[www.kreedum.com](https://www.kreedum.com)**.

Built with React 18, Vite 5, Tailwind CSS 3 and React Router 6.

> **Kreedum Construction has its own site:**
> [construction.kreedum.com](https://construction.kreedum.com).
> This repo contains no construction pages. The navbar, the Sports
> Infrastructure section and the footer link out to that site, and old
> `/construction/*` URLs are redirected there (see [Redirects](#redirects)).

---

## Pages

| Route     | Page                   | File                       |
|-----------|------------------------|----------------------------|
| `/`       | Home / landing page    | `src/pages/HomePage.jsx`   |
| `/quote`  | Gym equipment quote form | `src/pages/QuotePage.jsx` |
| `/links`  | Link-in-bio page       | `src/pages/LinksPage.jsx`  |

## Getting started

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

| Command           | What it does                                  |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Start the local dev server with hot reload    |
| `npm run build`   | Build for production into `dist/` (also generates `sitemap.xml`) |
| `npm run preview` | Serve the production build locally to check it |

## Deployment

`npm run build` outputs a static site to `dist/`. Any static host works
(Vercel, Netlify, cPanel, etc.).

The site uses client-side routing, so the host must serve `index.html` for
any unknown path (otherwise refreshing `/quote` gives a 404). This is already
configured for:

- **Vercel** — `vercel.json`
- **Netlify** — `public/_redirects`

### Redirects

Both files also permanently (301) redirect the old construction URLs:

| Old URL on kreedum.com | Goes to |
|------------------------|---------|
| `/construction`        | `https://construction.kreedum.com` |
| `/construction/<path>` | `https://construction.kreedum.com/<path>` |

## Links to the Construction site

All construction links come from one file, **`src/config/externalLinks.js`**:

| Link                   | URL |
|------------------------|-----|
| Home                   | https://construction.kreedum.com |
| Sports Infrastructure  | https://construction.kreedum.com/sports-infrastructure |
| Civil Construction     | https://construction.kreedum.com/civil-construction |
| Prefabricated Buildings| https://construction.kreedum.com/prefabricated-buildings |

If the construction site's addresses change, edit that file only. The
navbar, footer and Infrastructure section update automatically.

## Project structure

```
kreedum-sports/
├── index.html                  # HTML shell, SEO meta tags, structured data
├── vite.config.js              # Vite + sitemap plugin (list of site routes)
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # Vercel: SPA rewrite + construction redirects
├── .env.example                # copy to .env when a backend exists
├── docs/
│   └── STYLE_GUIDE.md          # every color and font used, and where
├── public/                     # served as-is: favicons, og-image, robots.txt,
│   └── _redirects              #   manifest; Netlify SPA rewrite + redirects
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # routes
    ├── index.css               # Tailwind directives
    ├── assets/
    │   └── logo.png
    ├── config/                 # small site-wide values
    │   ├── theme.js            # COLORS — brand color tokens
    │   ├── contact.js          # phone and WhatsApp numbers
    │   ├── navigation.js       # navbar links
    │   └── externalLinks.js    # links to construction.kreedum.com
    ├── data/                   # content shown by the sections
    │   ├── photos.js
    │   ├── products.js         # "What We Stock" categories
    │   ├── locations.js        # store addresses and hours
    │   ├── socialLinks.js
    │   └── quoteFormOptions.js # dropdown options for the forms
    ├── hooks/
    │   └── useScrolled.js      # true once the page is scrolled
    ├── utils/
    │   ├── scrollToId.js       # smooth-scroll to a section
    │   └── whatsapp.js         # build/open wa.me links, phone validation
    ├── services/
    │   └── api.js              # fetch wrapper for a future backend
    ├── components/
    │   ├── common/             # GlobalStyle, Icons, SocialLinks,
    │   │                       #   WhatsAppButton, SubmitedAt
    │   ├── layout/             # Nav, Footer
    │   └── sections/           # one file per home-page section:
    │                           #   Hero, StatsBar, About, Products,
    │                           #   Infrastructure, Gallery, Locations,
    │                           #   ContactForm
    └── pages/                  # HomePage, QuotePage, LinksPage
```

### How it's organised

- **`config/` vs `data/`**: `config` holds values about the site itself
  (colors, phone numbers, links). `data` holds the content a section
  displays (products, stores, dropdown options). To change content, edit
  the `data/` file; no component needs to change.
- **`sections/` vs `pages/`**: each section is self-contained, and pages just
  put sections together. To add a page, create a file in `pages/`, add a
  `<Route>` in `App.jsx`, and add the path to the sitemap list in
  `vite.config.js`.

## Common edits

| To change…                     | Edit |
|--------------------------------|------|
| Phone / WhatsApp number        | `src/config/contact.js` |
| Navbar links                   | `src/config/navigation.js` |
| Construction site links        | `src/config/externalLinks.js` |
| Brand colors                   | `src/config/theme.js` (and update `docs/STYLE_GUIDE.md`) |
| Products                       | `src/data/products.js` |
| Store addresses / hours        | `src/data/locations.js` |
| Photos                         | `src/data/photos.js` |
| Social media links             | `src/data/socialLinks.js` |
| Page title / SEO description   | `index.html` |

## Forms

The contact form (home page) and the quote form (`/quote`) currently send
the enquiry to WhatsApp (`src/utils/whatsapp.js`). Nothing is saved to a
database yet.

## Connecting a backend later

1. Set up the API and note its base URL.
2. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL`.
3. Call the helpers in `src/services/api.js` where data is needed, for
   example in `handleSubmit` in `ContactForm.jsx` or `QuotePage.jsx`:

   ```js
   import { api } from "../../services/api";

   await api.post("/contact", form);
   ```

4. For more resources (products, orders, etc.), add one file per resource
   in `src/services/` that wraps `api`, rather than growing `api.js`.

## To do

- **Second store**: `src/data/locations.js` still has placeholder text for
  the second store; search for "to confirm" and fill in the real details.
- **Photos**: `src/data/photos.js` uses Unsplash stock photos as
  placeholders; replace the URLs with real store and product photos.
- **Form submissions**: save enquiries to a database or send email once a
  backend exists (see above).

## Style guide

See [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) for all colors and fonts.
Check it before adding a new color or font, and update it when you do.