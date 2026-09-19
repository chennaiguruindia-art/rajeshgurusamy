# Shri Rajesh Gurusamy — Official Personal Website

Official personal website of **Shri Rajesh Gurusamy** — Political Leader (State Vice President, Kisan Morcha, BJP Tamil Nadu) and Corporate Entrepreneur (Director, Guru Integrated Services India Pvt. Ltd. & Group of Companies).

The site keeps the two identities clearly separated:

- **POLITICAL LIFE** — About, Political Life & Journey, Initiatives, Speeches, Events, News
- **BUSINESS** — Company Profile, Leadership, Business Areas, Projects, Corporate Initiatives

Live preview for local development: `http://127.0.0.1:5500/index.html` (VS Code Live Server).

## Tech Stack

- HTML5
- CSS3 (custom theme in `css/style.css`)
- Bootstrap 5 (CDN) + Bootstrap Icons
- JavaScript (vanilla, `js/main.js`)
- AJAX (`fetch`) for dynamic news, gallery, events and speeches content

## Project Structure

```
.
├── index.html          # Home — hero, teaser cards, Start page-by-page tour
├── about.html          # Biography & profile
├── public-life.html    # Political life, activities, 2001–present journey timeline
├── initiatives.html    # Public initiatives
├── speeches.html       # Speeches & videos (AJAX + video modal)
├── events.html         # Upcoming engagements (AJAX + filters)
├── news.html           # Newsroom (AJAX + category filter + load more)
├── business.html       # Company profile, leadership, business areas, CSR
├── projects.html       # Projects showcase (status filter)
├── contact.html        # Details form only (desk routing, no office addresses)
├── css/
│   └── style.css       # Full site theme (white + black monochrome, responsive)
├── js/
│   └── main.js         # Navbar, reveal animations, AJAX loaders, filters, forms
└── images/
    └── MD.png          # Site artwork / logo asset
```

## Page Flow

Every page ends with a **Previous / Next** pager so visitors move step by step:

`Home → About → Political Life → Business → Contact → Home`

(plus Initiatives, Speeches, Events, News, Projects linked from teasers and menus)

## Run Locally

AJAX content loading requires HTTP (it will not work over `file://`).

Option 1 — VS Code Live Server (recommended):

1. Open this folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

Option 2 — Python:

```bash
cd Rajesh
python -m http.server 8000
# open http://localhost:8000
```

## Contact Form

The contact form (`contact.html`) is a front-end demo: it validates input, shows routed
desk feedback (Public Office vs Corporate HQ) and simulates submission. Connect it to an
email service / backend endpoint (see `js/main.js` → contact form handler) to receive messages.

## Notes

- All political positions, company details and statistics on the site must be verified
  against official records before public release.
- The contact page intentionally lists no office addresses or locations — form only.
