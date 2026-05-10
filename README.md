# Seline Davies — Portfolio Site

Personal portfolio and resume site for Seline Davies, a London-based frontend developer and software engineer.

Live at: <https://simfield2107.github.io/SelineDaviesResume/>

## Stack

- Static HTML / SCSS / vanilla JavaScript — no framework, no bundler
- Bootstrap 5 (vendored locally, not via npm)
- SCSS compiled by the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) VS Code extension
- Hosted on GitHub Pages
- Contact form submits to [Web3Forms](https://web3forms.com)

## Project Structure

```text
index.html                        # main single-page site
clientwork-details*.html          # 24 client project detail pages
portfolio-details*.html           # 5 personal project detail pages
assets/
  css/
    style.css                     # compiled output (do not edit by hand)
    bootstrap-icons.css
  scss/                           # SCSS source — edit these
    style.scss                    # barrel file with @import partials
    _variables.scss
    _grid-squares.scss            # 24 logo squares on the home page
    _detail-page.scss             # styling for project detail pages
    ...other partials, one per section...
  js/
    main.js                       # global UI widgets (nav, sliders, animations)
    contact-form.js               # contact form handler (Web3Forms)
  img/
    client-work/                  # logos for the home-page grid
    client-details/<brand>/       # screenshots per project
    portfolio/                    # personal project screenshots
    languages/                    # tech-skill icons
    brand-logos/                  # client brand logos
  vendor/                         # local copies of Bootstrap, Swiper,
                                  # GLightbox, AOS, etc.
```

## Running Locally

Any static file server works. With Python:

```bash
python3 -m http.server 5502
```

Then open <http://localhost:5502>.

In VS Code, the project includes Live Server config for port 5502 — install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and click "Go Live" in the status bar.

## Editing Styles

Edit files in `assets/scss/` only. The Live Sass Compiler extension watches the SCSS files and compiles them into `assets/css/style.css` on save (the output path is configured in `.vscode/settings.json`).

Do **not** edit `assets/css/style.css` directly — your changes will be overwritten on next compile.

## Editing JavaScript

- `assets/js/main.js` — site-wide widgets (navbar scrollspy, smooth scroll, mobile nav, Typed.js, AOS, GLightbox, Swiper, etc.)
- `assets/js/contact-form.js` — submits the contact form to Web3Forms and shows success/error states

## Contact Form

The form on `index.html` submits to `https://api.web3forms.com/submit` with a public access key. To swap the receiving email or rotate the key, log into [web3forms.com](https://web3forms.com) and update the `access_key` `<input>` value in `index.html`.

The form has a built-in honeypot field (`botcheck`) for basic spam protection. For stronger protection, enable hCaptcha or Turnstile in the Web3Forms dashboard.

## Deploying

Push to `main` — GitHub Pages auto-deploys from the repo root.

## Adding a New Client Project

When adding a new client project, three files need to be touched (no build tool yet means no single source of truth):

1. Add the new project's `clientwork-detailsN.html` page (copy an existing one as a starting point).
2. Add the brand logo square to the grid section in `index.html` (`#grid-section`) and a corresponding `.grid-square:nth-child(N)` rule in `assets/scss/_grid-squares.scss`.
3. Add the project to the resume listing in `index.html` (`#resume`).
