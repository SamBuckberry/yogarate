

Goal: Build a complete, static, mobile-first website and a professionally formatted Business Plan PDF for Yogarate (a Yoga × Karate hybrid). Zero back-end. Free hosting via GitHub Pages.
Deliverables:
	1.	docs/business_plan.pdf (generated from content/business_plan.md)
	2.	A fully functioning static site in /docs with all copy, assets, logos, palettes, and styles, ready for public launch.

⸻

0) Tech Constraints & Principles
	•	Hosting: GitHub Pages (serve from /docs).
	•	Generator: No framework required. Plain HTML/CSS/JS. Disable Jekyll with .nojekyll.
	•	Fonts: Google Fonts (free): Montserrat (headings), Lora (body).
	•	Brand Colours (CSS variables):
	•	--ink:#1A1A1A (charcoal / strength)
	•	--paper:#FAFAFA (warm white)
	•	--crimson:#B22222 (accent / martial energy)
	•	--slate:#4A4A4A (neutral)
	•	Logo: Provide vector SVG (inline + file).
	•	Images: Use AI-generated assets via the prompts provided (export web-optimised WEBP & fallback JPG). Include descriptive alt.
	•	Accessibility: WCAG AA target. Semantic HTML, focus outlines, ARIA where needed, 44px tap targets, colour contrast ≥ 4.5:1.
	•	Performance: Lighthouse ≥ 95. CSS under 30KB; JS under 20KB. Defer all JS. Preload fonts. Serve responsive images.
	•	SEO: Valid meta, Open Graph, Twitter Cards, sitemap, robots, canonical, structured data (JSON-LD Organisation + Product).
	•	Analytics (optional): Placeholder script slot—disabled by default.
	•	Licensing: Content © Yogarate; Code MIT; Images with note “generated”.

⸻

1) Repository Layout (create exactly)

/docs
  /assets
    /css
      base.css
      home.css
    /fonts
      (downloaded Montserrat & Lora subsets or Google Fonts link via HTML)
    /img
      hero.webp
      sequence-1.webp
      sequence-2.webp
      instructor-1.webp
      instructor-2.webp
      studio.webp
      favicon.svg
      logo.svg
      og-hero.jpg
  /js
    main.js
  404.html
  index.html
  about.html
  classes.html
  timetable.html
  philosophy.html
  instructors.html
  blog.html
  shop.html
  contact.html
  privacy.html
  terms.html
  sitemap.xml
  robots.txt
  manifest.webmanifest
  .nojekyll
  CNAME (empty by default)
content/
  business_plan.md
.github/
  workflows/
    build-business-plan.yml
LICENSE
README.md
BUILD_SPEC.md (this file)


⸻

2) Site Copy (verbatim) & Pages

Use British English. Paste the following HTML files with the given content skeletons and copy. Ensure all pages share the same <head> (title varies), header nav, footer, and stylesheet references.

2.1 Shared <head> snippet (use on all pages)

<!-- BEGIN SHARED HEAD -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Yogarate — Balance. Power. Flow.</title>
<meta name="description" content="Yogarate blends the stillness of yoga with the disciplined power of karate. Balance. Power. Flow.">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@600;700;800&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@600;700;800&display=swap">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/img/og-hero.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="Yogarate — Balance. Power. Flow.">
<meta property="og:description" content="The union of yoga and karate.">
<meta property="og:image" content="assets/img/og-hero.jpg">
<meta property="og:url" content="https://<USERNAME>.github.io/<REPO>/">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://<USERNAME>.github.io/<REPO>/">
<link rel="manifest" href="manifest.webmanifest">
<link rel="stylesheet" href="assets/css/base.css">
<script defer src="js/main.js"></script>
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"Organization",
 "name":"Yogarate",
 "url":"https://<USERNAME>.github.io/<REPO>/",
 "logo":"https://<USERNAME>.github.io/<REPO>/assets/img/logo.svg",
 "sameAs":[]
}
</script>
<!-- END SHARED HEAD -->

2.2 Global header & footer (include on all pages)

<header class="site-header">
  <a class="brand" href="index.html" aria-label="Yogarate home">
    <img src="assets/img/logo.svg" alt="Yogarate logo" width="32" height="32">
    <span>Yogarate</span>
  </a>
  <nav aria-label="Primary">
    <a href="classes.html">Classes</a>
    <a href="timetable.html">Timetable</a>
    <a href="philosophy.html">Philosophy</a>
    <a href="instructors.html">Instructors</a>
    <a href="blog.html">Blog</a>
    <a href="shop.html">Shop</a>
    <a class="cta" href="contact.html">Book a Trial</a>
  </nav>
</header>

<footer class="site-footer">
  <p>© Yogarate. Balance. Power. Flow.</p>
  <nav aria-label="Legal">
    <a href="privacy.html">Privacy</a>
    <a href="terms.html">Terms</a>
    <a href="sitemap.xml">Sitemap</a>
  </nav>
</footer>

2.3 index.html (Home)

<!doctype html><html lang="en">
<head><!-- paste SHARED HEAD here --></head>
<body>
<!-- header -->
<main>
  <section class="hero">
    <picture>
      <source srcset="assets/img/hero.webp" type="image/webp">
      <img src="assets/img/og-hero.jpg" alt="Practitioner flows from yoga pose to karate strike in dramatic light">
    </picture>
    <div class="hero-copy">
      <h1>Balance. Power. Flow.</h1>
      <p>Yogarate is the disciplined union of yoga and karate—mindful strength, precise movement, and calm focus, delivered in modern, accessible classes.</p>
      <a class="btn" href="classes.html">Explore Classes</a>
      <a class="btn ghost" href="contact.html">Book a Trial</a>
    </div>
  </section>

  <section class="pillars">
    <h2>The Yogarate Principles</h2>
    <ul class="grid-3">
      <li><h3>Harmony</h3><p>Breath, body, and movement as one.</p></li>
      <li><h3>Discipline</h3><p>Respect, consistency, and focus in practice.</p></li>
      <li><h3>Balance</h3><p>Flexibility meets strength; softness meets strike.</p></li>
    </ul>
  </section>

  <section class="sequences">
    <div class="sequence">
      <img src="assets/img/sequence-1.webp" alt="Flow sequence combining warrior pose and kata footwork">
      <div>
        <h3>Flow</h3>
        <p>Seamless transitions blend salutations with kata-inspired footwork for mindful conditioning.</p>
      </div>
    </div>
    <div class="sequence">
      <img src="assets/img/sequence-2.webp" alt="Power sequence showing controlled strike into balanced hold">
      <div>
        <h3>Power</h3>
        <p>Explosive yet controlled drills build strength and stability—precision before intensity.</p>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <h2>Start with a 7-day Foundations series</h2>
    <p>Beginner-friendly, equipment-light, and results-focused.</p>
    <a class="btn" href="contact.html">Get Started</a>
  </section>
</main>
<!-- footer -->
</body></html>

2.4 about.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>About Yogarate</h1>
  <p><strong>Yogarate</strong> merges the stillness of yoga with the disciplined power of karate. Our approach is calm, precise, and incremental—training attention, mobility, and strength together.</p>
  <h2>Culture</h2>
  <p>We greet with respect, practise with kindness, and progress with purpose. The studio aesthetic is minimalist—bamboo, tatami accents, warm light—focus without distraction.</p>
  <h2>Uniform & Equipment</h2>
  <p>Barefoot. Comfortable wrap tops, breathable cotton. Optional crimson sash. Branded mats and wraps available.</p>
</main>
<!-- footer --></body></html>

2.5 classes.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Classes</h1>
  <article>
    <h2>Yogarate Flow</h2>
    <p>Beginner-friendly sequences, breath-led movement, stability and balance. 45–60 min.</p>
  </article>
  <article>
    <h2>Yogarate Power</h2>
    <p>Controlled explosive drills, stance work, and core alignment. 45–60 min.</p>
  </article>
  <article>
    <h2>Yogarate Restore</h2>
    <p>Guided meditation, restorative holds, kata visualisation. 45 min.</p>
  </article>
  <p><a class="btn" href="timetable.html">View Timetable</a> <a class="btn ghost" href="contact.html">Book a Trial</a></p>
</main>
<!-- footer --></body></html>

2.6 timetable.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Timetable</h1>
  <table class="timetable" aria-describedby="timetable-help">
    <caption>Weekly Schedule</caption>
    <thead><tr><th>Day</th><th>Time</th><th>Class</th></tr></thead>
    <tbody>
      <tr><td>Mon</td><td>07:00–08:00</td><td>Yogarate Flow</td></tr>
      <tr><td>Tue</td><td>18:00–19:00</td><td>Yogarate Power</td></tr>
      <tr><td>Wed</td><td>12:15–13:00</td><td>Yogarate Restore</td></tr>
      <tr><td>Thu</td><td>18:00–19:00</td><td>Yogarate Flow</td></tr>
      <tr><td>Sat</td><td>09:00–10:00</td><td>Yogarate Power</td></tr>
    </tbody>
  </table>
  <p id="timetable-help" class="muted">Times may change on public holidays. Contact us to confirm availability.</p>
</main>
<!-- footer --></body></html>

2.7 philosophy.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Philosophy</h1>
  <h2>Principles</h2>
  <ul>
    <li><strong>Harmony:</strong> Breath, body, and movement as one.</li>
    <li><strong>Discipline:</strong> Respect and consistency.</li>
    <li><strong>Balance:</strong> Flexibility meets strength.</li>
    <li><strong>Mindfulness:</strong> Meditation in motion.</li>
    <li><strong>Community:</strong> Inclusive, supportive, non-competitive.</li>
  </ul>
  <blockquote>“We bow in respect, not submission. We stretch in openness, not fragility. We strike in focus, not aggression.”</blockquote>
</main>
<!-- footer --></body></html>

2.8 instructors.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Instructors</h1>
  <section class="team">
    <article class="card">
      <img src="assets/img/instructor-1.webp" alt="Instructor demonstrating balanced stance">
      <h3>Alex Tan</h3>
      <p>Founder. Black belt (Shotokan). Yoga teacher (RYT-500). Calm, precise, encouraging.</p>
    </article>
    <article class="card">
      <img src="assets/img/instructor-2.webp" alt="Instructor guiding mindful breathwork">
      <h3>Maya Singh</h3>
      <p>Movement specialist. Breathwork and mobility. Focus on sustainable progress.</p>
    </article>
  </section>
</main>
<!-- footer --></body></html>

2.9 blog.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Journal</h1>
  <article>
    <h2>Why Balance Builds Power</h2>
    <p>In Yogarate, control precedes intensity. Stability allows honest strength and quicker recovery…</p>
  </article>
  <article>
    <h2>Breath as a Metronome</h2>
    <p>Linking steps and strikes to steady inhales and exhales creates predictability for the nervous system…</p>
  </article>
</main>
<!-- footer --></body></html>

2.10 shop.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Shop</h1>
  <p>Coming soon: Branded mats, wraps, breathable tops, and crimson sash. For pre-orders, <a href="contact.html">contact us</a>.</p>
</main>
<!-- footer --></body></html>

2.11 contact.html

<!doctype html><html lang="en"><head><!-- shared head --></head><body>
<!-- header -->
<main class="narrow">
  <h1>Book a Trial</h1>
  <p>Send us a message and we’ll confirm your preferred class.</p>
  <form name="contact" method="post" data-netlify="true">
    <label>Full name<input name="name" required></label>
    <label>Email<input type="email" name="email" required></label>
    <label>Preferred class
      <select name="class">
        <option>Yogarate Flow</option><option>Yogarate Power</option><option>Yogarate Restore</option>
      </select>
    </label>
    <label>Message<textarea name="message"></textarea></label>
    <button class="btn" type="submit">Send</button>
  </form>
  <p class="muted">We respect your privacy and keep messages confidential.</p>
</main>
<!-- footer --></body></html>

2.12 Legal pages (privacy.html, terms.html)

Use standard concise placeholders with plain English; no tracking by default.

⸻

3) Stylesheets

3.1 assets/css/base.css

:root{
  --ink:#1A1A1A; --paper:#FAFAFA; --crimson:#B22222; --slate:#4A4A4A;
  --radius:12px; --space:clamp(12px,2vw,24px); --maxw:1100px;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--paper);color:var(--ink);font-family:Lora,serif;line-height:1.6}
h1,h2,h3{font-family:Montserrat,system-ui,sans-serif;line-height:1.2;margin:0 0 .6em}
h1{font-size:clamp(2rem,3.5vw,3rem)}
h2{font-size:clamp(1.5rem,2.5vw,2rem)}
h3{font-size:clamp(1.25rem,2vw,1.5rem)}
p,li{font-size:1.05rem}
a{color:var(--crimson);text-decoration:none}
a:hover{text-decoration:underline}
img{max-width:100%;height:auto;display:block}

.site-header,.site-footer{max-width:var(--maxw);margin:auto;padding:calc(var(--space)*.8) var(--space);display:flex;align-items:center;gap:var(--space)}
.site-header{justify-content:space-between}
.site-header nav a{margin:0 .5rem}
.site-header .cta{background:var(--crimson);color:white;padding:.5rem .9rem;border-radius:999px}
.site-header .brand{display:flex;align-items:center;gap:.6rem;font-weight:800;color:var(--ink)}
.site-footer{justify-content:space-between;border-top:1px solid #ddd;font-size:.95rem;color:var(--slate)}
.site-footer nav a{margin-left:1rem}

main{max-width:var(--maxw);margin:auto;padding:var(--space)}
.narrow{max-width:750px}

.hero{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:var(--space);align-items:center}
.hero .hero-copy .btn{margin-right:.6rem}
.btn{display:inline-block;background:var(--crimson);color:#fff;padding:.7rem 1.1rem;border-radius:999px;border:none}
.btn.ghost{background:transparent;color:var(--crimson);border:2px solid var(--crimson)}
.cta-band{background:var(--ink);color:#fff;padding:calc(var(--space)*2);text-align:center;border-radius:var(--radius)}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space)}
.sequence{display:grid;grid-template-columns:1fr 1fr;gap:var(--space);align-items:center}
.card{background:#fff;border:1px solid #eee;border-radius:var(--radius);padding:var(--space)}

.timetable{width:100%;border-collapse:collapse}
.timetable th,.timetable td{border:1px solid #ddd;padding:.6rem;text-align:left}
.muted{color:var(--slate);font-size:.95rem}

@media (max-width:900px){
  .hero{grid-template-columns:1fr}
  .grid-3{grid-template-columns:1fr}
  .sequence{grid-template-columns:1fr}
}
:focus-visible{outline:3px solid var(--crimson);outline-offset:2px}

3.2 assets/css/home.css

/* Additional home-specific tweaks if needed (kept minimal) */


⸻

4) JavaScript (minimal)

4.1 js/main.js

// Placeholder: progressive enhancements only.
// Add smooth anchor scroll and simple nav focus management.
document.documentElement.classList.add('js');


⸻

5) Brand Assets

5.1 Logo (SVG) — assets/img/logo.svg

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Yogarate logo">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1A1A1A"/><stop offset="1" stop-color="#B22222"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="none" stroke="url(#g)" stroke-width="8"/>
  <!-- flowing brush half -->
  <path d="M20,70 C45,95 75,95 100,70" fill="none" stroke="#1A1A1A" stroke-width="8" stroke-linecap="round"/>
  <!-- angular strike half -->
  <path d="M20,50 L60,20 L100,50" fill="none" stroke="#B22222" stroke-width="8" stroke-linecap="round"/>
</svg>

5.2 Favicon — assets/img/favicon.svg

Copy the same SVG or a simplified circle ring.

⸻

6) AI Image Production (art direction)

Generate the following images (WEBP at ~1600px wide; quality ~80; provide JPG fallback for OG). Store in /docs/assets/img/.

Filename	Prompt (verbatim)	Alt text
hero.webp	Minimalist studio, black background, cinematic rim light. Athlete transitions from yoga Warrior II into a controlled karate reverse punch, motion subtly blurred, monochrome with a single crimson sash accent, high contrast, modern fitness aesthetic, sharp detail.	Practitioner flows from yoga pose to karate strike in dramatic light
sequence-1.webp	Series of three frames combined: sun salutation to kata footwork, clean studio, soft side light, monochrome, crimson overlay lines tracing motion arc.	Flow sequence combining warrior pose and kata footwork
sequence-2.webp	Controlled mid-air strike landing into stable low stance, strong shadows, minimalist background, monochrome + crimson highlight.	Power sequence showing controlled strike into balanced hold
instructor-1.webp	Portrait of instructor in balanced stance, calm expression, studio backdrop, monochrome with subtle crimson accent.	Instructor demonstrating balanced stance
instructor-2.webp	Instructor guiding breathwork hands-on-ribcage, soft light, inclusive and welcoming tone, monochrome.	Instructor guiding mindful breathwork
studio.webp	Minimalist studio interior, bamboo flooring, tatami accents, warm side lighting, uncluttered.	Minimalist studio with bamboo flooring and tatami accents
og-hero.jpg	Export a 1200×630 crop from hero.webp as JPG (≤300KB).	—

Notes:
	•	Keep faces diverse and non-identifiable as celebrities.
	•	Ensure contrast passes accessibility.
	•	Strip EXIF. Provide width/height attributes in HTML if known.

⸻

7) Business Plan — Source Markdown & PDF Build

7.1 Place the following as content/business_plan.md

---
title: "Yogarate — Business Plan"
author: "Yogarate"
date: "October 2025"
fontsize: 11pt
geometry: margin=1in
toc: true
toc-depth: 3
colorlinks: true
---

# Executive Summary

**Yogarate** is a hybrid training method that fuses the mindfulness and mobility of **yoga** with the discipline and power of **karate**. The brand promise is *Balance. Power. Flow.* We launch as a digital-first, studio-optional model with premium positioning, accessible programming, and a minimalist aesthetic.

**Offer:** three class types (Flow, Power, Restore); 7-day Foundations (trial); online sessions and studio partnerships.  
**Markets:** Urban professionals (25–45), wellness-oriented athletes, and martial-arts-curious newcomers.  
**Revenue:** Class packs, subscriptions, merchandise, workshops, retreats.  
**Edge:** Distinctive hybrid philosophy, cohesive brand system, and disciplined yet inclusive pedagogy.

# Problem & Opportunity

Consumers are fragmented between slow mindful work and high-intensity modalities. Many want **strength without burnout** and **mindfulness without stagnation**. Yogarate fills this gap with a *precision-before-intensity* curriculum that trains attention, mobility, and power together.

# Product & Services

## Class Portfolio
- **Yogarate Flow (45–60 min):** Breath-led sequences, stability and balance.  
- **Yogarate Power (45–60 min):** Controlled explosive drills, stance work, core alignment.  
- **Yogarate Restore (45 min):** Guided meditation, restorative holds, kata visualisation.

## Pedagogy & Progression
- Warm-up (breath + mobility), Core sequence (kata-inspired flows), Cool-down (restore + focus).
- Weekly themes: grounding, rotation, balance, controlled power.
- Measurable cues: tempo, stance width, breath cadence, repeatable combinations.

## Delivery
- **Digital:** Live streams + on-demand library (initially via unlisted videos / embedded players).
- **Physical:** Pop-ups via partner studios; equipment-light setup.

# Market Analysis

## Segmentation
- **Primary:** 25–45 professionals; yoga/pilates users seeking more structure and strength.  
- **Secondary:** Recreational athletes needing mobility + focus; teens/young adults seeking identity in a modern hybrid.

## Positioning
Premium yet accessible; refined look and feel; evidence-informed sequencing; community-centred culture.

## Competitive Set
Yoga/pilates studios, HIIT boxes, martial arts dojos, mobility programmes. Differentiation: unified hybrid, calm-power aesthetic, and clear pedagogy.

# Brand & Communications

**Tagline:** *Balance. Power. Flow.*  
**Tone:** Calm, concise, disciplined, inclusive.  
**Visual:** Minimalist monochrome with **crimson** accent; high-contrast photography; clean grid.  
**Voice Pillars:** Clarity, Respect, Progress, Community.

**Channels:**  
- Instagram/TikTok (short sequences & cues), YouTube (long-form), Email (weekly tips), Blog (principles).

**Key Messages:**  
- Control precedes intensity.  
- Your stillness is your strike.  
- Train attention, not only effort.

# Go-to-Market Plan

## Phase 0 — MVP (Month 0–1)
- Launch static website on GitHub Pages; publish timetable; enable trial bookings (form).
- Release 7-day Foundations series (email automation/manual replies).
- Pilot 2 partner-studio sessions/week.

## Phase 1 — Traction (Month 2–4)
- 30-day “Balance Power Flow” challenge.
- Community stories; referral code.
- Merchandise soft-launch (limited mats/wraps).

## Phase 2 — Scale (Month 5–12)
- On-demand library paywall (lightweight vendor or private links).  
- Quarterly workshops; annual retreat planning.

# Operations

- **People:** 2 instructors (founder + contractor), virtual admin.  
- **Facilities:** Partner studios / pop-ups; minimalist kit.  
- **Systems:** Static site, booking form collection, spreadsheet CRM, cloud storage for media.

# Financial Model (Light)

**Assumptions (first 6 months):**
- Avg. class price: AUD $22; avg. attendance: 10.  
- 3 classes/week → ~120 bookings/month.  
- Monthly gross: ~$2,640; COGS (studio hire 30%): ~$792; Marketing $250; Misc $150.  
- Est. monthly net pre-tax: ~$1,448 (pre-founder comp).  
- Upside via workshops (+$1–2k per event) and merchandise margins (40–55%).

# Risk & Mitigation

- **Market scepticism:** Offer free Foundations; publish clear pedagogy.  
- **Instructor dependency:** Train second lead; standardise sequences.  
- **Cashflow:** Keep fixed costs low; pre-sell workshops.

# Roadmap

- **Q1:** MVP site, Foundations, 2 partner studios.  
- **Q2:** Challenge, soft merch, library pilot.  
- **Q3:** Corporate sessions, regional pop-ups.  
- **Q4:** Retreat planning, instructor pathway draft.

# Legal & Governance

- Liability waivers; informed consent; privacy policy; copyright notices.  
- Inclusive language and imagery; accessibility commitments.

# Appendices

## A. Brand System
Colours, typography, logo usage, image guidelines (see website style guide).

## B. Sample Class Plans
3× Flow, 3× Power, 2× Restore (one-page outlines each).

## C. KPIs
Website conversions, trial→paid rate, class occupancy, retention (90-day), content reach.

7.2 GitHub Action to build PDF — .github/workflows/build-business-plan.yml

name: Build Business Plan PDF
on:
  push:
    paths:
      - 'content/business_plan.md'
      - '.github/workflows/build-business-plan.yml'
  workflow_dispatch: {}
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Pandoc + LaTeX (minimal)
        run: |
          sudo apt-get update
          sudo apt-get install -y pandoc texlive-latex-recommended texlive-latex-extra texlive-fonts-recommended
      - name: Render PDF
        run: |
          mkdir -p docs && mkdir -p docs && mkdir -p docs
          pandoc content/business_plan.md -o docs/business_plan.pdf --pdf-engine=xelatex
      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: business-plan-pdf
          path: docs/business_plan.pdf


⸻

8) SEO & Robots

8.1 robots.txt

User-agent: *
Allow: /
Sitemap: https://<USERNAME>.github.io/<REPO>/sitemap.xml

8.2 sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://<USERNAME>.github.io/<REPO>/</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/about.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/classes.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/timetable.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/philosophy.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/instructors.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/blog.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/shop.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/contact.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/privacy.html</loc></url>
  <url><loc>https://<USERNAME>.github.io/<REPO>/terms.html</loc></url>
</urlset>

8.3 manifest.webmanifest

{
  "name": "Yogarate",
  "short_name": "Yogarate",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#FAFAFA",
  "theme_color": "#B22222",
  "icons": [{ "src": "assets/img/favicon.svg", "sizes": "any", "type": "image/svg+xml" }]
}


⸻

9) Misc Pages

9.1 404.html

<!doctype html><html lang="en"><head><!-- shared head --></head>
<body><main class="narrow"><h1>Page not found</h1><p>Let’s return to <a href="index.html">home</a>.</p></main></body></html>

9.2 .nojekyll

Create an empty file to disable Jekyll processing.

⸻

10) README.md (authoring)

# Yogarate — Static Site + Business Plan (PDF)

## Quick Start
1. Replace `<USERNAME>` and `<REPO>` in HTML `<head>`, `sitemap.xml`, and `robots.txt`.
2. Generate images per prompts in `/docs/assets/img/`. Export WEBP + `og-hero.jpg`.
3. Push to `main`. GitHub Pages should serve `/docs`.
4. The Business Plan PDF is built by Actions into `/docs/business_plan.pdf`.

## Licence
- Code: MIT (see LICENSE).
- Content & brand assets © Yogarate. AI-generated images licensed to Yogarate.


⸻

11) LICENSE (MIT)

MIT License

Copyright (c) 2025 Yogarate

Permission is hereby granted, free of charge, to any person obtaining a copy
...


⸻

12) Deployment Steps (agent must execute)
	1.	Create repository.
	2.	Add files exactly as specified.
	3.	Commit and push to main.
	4.	In repo settings → Pages → Build from /docs.
	5.	Run “Build Business Plan PDF” workflow (auto on push).
	6.	Verify:
	•	Site loads with hero, nav, images, and styles.
	•	docs/business_plan.pdf is present and opens cleanly.
	•	Lighthouse scores ≥ 95; contrast passes; keyboard navigable.

⸻

13) Acceptance Criteria
	•	Brand fidelity: Colours, fonts, logo as provided.
	•	Responsive: Layouts adapt ≥320px to ≥1440px.
	•	A11y: Keyboard focus, alt text, labels, 44px targets, AA contrast.
	•	Performance: ≤150KB total CSS+JS uncompressed (excluding fonts); images responsive and compressed.
	•	SEO: Valid metadata, OG image, robots, sitemap.
	•	PDF: content/business_plan.md compiles to docs/business_plan.pdf on CI without manual intervention.
	•	No external paywalls or proprietary libs. Only system or Google Fonts.

⸻

14) Optional Enhancements (if time permits)
	•	Add rudimentary Service Worker for offline shell (cache HTML/CSS/JS).
	•	Add basic email autoresponder via a serverless form provider (keep disabled by default).
	•	Add JSON-LD for individual Classes as Events (if dates become fixed).

⸻
