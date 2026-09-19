# Shri Rajesh Gurusamy — Official Personal Website

Official personal website of **Shri Rajesh Gurusamy** — Political Leader (State Vice President, Kisan Morcha, BJP Tamil Nadu) and Corporate Entrepreneur (Director, Guru Integrated Services India Pvt. Ltd. & Group of Companies).

The site keeps the two identities clearly separated:

- **POLITICAL LIFE** — About, Political Life & Journey, Initiatives, Speeches, Events, News
- **BUSINESS** — Company Profile, Leadership, Business Areas, Projects, Corporate Initiatives

Live preview for local development: `http://127.0.0.1:5500/index.html` (VS Code Live Server).

## About Rajesh Gurusamy

**Rajesh Gurusamy (A.G. Rajesh Pandian)** — Political Leader and Corporate Entrepreneur
from Tamil Nadu (see `about.html` for the full biography).

- **Native of** Seelnaickenpatti, Watrap, Virudhunagar District, Tamil Nadu; settled in
  Chennai since 2005.
- **Family:** married to Mrs. Anitha Rajesh (MBA; Entrepreneur & Business Leader);
  one daughter, Aadhya.
- Combines a **quarter-century political organisation track record** (since 2001) with
  corporate executive management across green facility engineering, renewable solar EPC,
  EV charging systems and agricultural supply manufacturing.

## Political Journey (2001 – Present)

Current role: **State Vice President — Kisan Morcha, Bharatiya Janata Party, Tamil Nadu**
(2025 – Present). Full timeline on `public-life.html`.

| Period | Responsibility |
|---|---|
| 2025 – Present | State Vice President — Kisan Morcha, BJP Tamil Nadu |
| 2022 – 2025 | State Secretary — Kisan Morcha, Tamil Nadu BJP |
| 2020 – 2025 | Co-Zonal In-charge (Kanyakumari Zone) & State In-charge — PM-Kisan, Kisan Credit Card (KCC) & Organic Agriculture |
| 2020 – 2022 | State Executive Committee Member — Kisan Morcha |
| 2020 | MSME Loan Initiative (ECLGS facilitation) — Central Chennai West |
| 2016 | State Membership Drive Coordinator |
| 2014 – 2017 | State Secretary — Commerce Cell, Tamil Nadu BJP |
| 2012 – 2016 | State Organisation & IT Support; Call Centre In-charge; membership enrollment campaign |
| 2003 – 2008 | District Yuva Morcha / District Executive Member — Virudhunagar District |
| 2001 | Watrap Union Yuva Morcha President / Leader — entry into grassroots public service |

**Core political focus areas:**

- **Farmer welfare (Kisan Morcha)** — PM-Kisan Samman Nidhi enrollment, Kisan Credit
  Cards, organic farming transition, Farmer Producer Organisation (FPO) credit support,
  agricultural grievance representation.
- **Cadre & digital modernisation** — state call-centre infrastructure, data-driven
  organisation and election planning, membership drives, youth and first-time voter
  engagement.
- **Grassroots seva** — grievance sessions, blood donation and medical camps, education
  support for rural students, disaster relief, MSME/trader assistance.
- Long-term organisational vision towards the **2031 Tamil Nadu Assembly Election**.

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
