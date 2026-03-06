# Content Editing Guide

How to update every text field in your portfolio. All changes are made in `index.html`.

> **How to edit:** Open `index.html` in any text editor (VS Code, TextEdit, Notepad). Find the line number listed below, change the text between the HTML tags, save the file, and refresh your browser.

---

## Table of Contents

1. [Page Title & SEO Description](#1-page-title--seo-description)
2. [Navigation](#2-navigation)
3. [Hero / About Section](#3-hero--about-section)
4. [Projects — Featured Cards](#4-projects--featured-cards)
5. [Projects — Additional Cards](#5-projects--additional-cards)
6. [Adding a New Project Card](#6-adding-a-new-project-card)
7. [Resume Section](#7-resume-section)
8. [Contact Section](#8-contact-section)
9. [Footer](#9-footer)
10. [Changing Colors](#10-changing-colors)

---

## 1. Page Title & SEO Description

**File:** `index.html`

```
Line 6  — Meta description (shown in Google search results)
Line 7  — Browser tab title
```

**Line 6 — Meta description:**
```html
<meta name="description" content="Wiley Cubic — Data Scientist specializing in analytics, finance, and machine learning.">
```
Change the text inside `content="..."` to your preferred description (keep it under 160 characters).

**Line 7 — Browser tab title:**
```html
<title>Wiley Cubic — Data Scientist</title>
```
Change the text between `<title>` and `</title>`.

---

## 2. Navigation

**File:** `index.html`

```
Line 18 — Nav logo / wordmark (top-left)
```

**Line 18 — Nav name:**
```html
<a href="#hero" class="nav-logo">Wiley Cubic</a>
```
Change `Wiley Cubic` to update the name shown in the top-left of the navbar.

The nav links (About, Projects, Resume, Contact) on lines 21–24 are anchor links to page sections — they do not need editing unless you rename or reorder sections.

---

## 3. Hero / About Section

**File:** `index.html` — Lines 38–70

### Your Name (h1)

**Line 46:**
```html
<h1 class="hero-name">Wiley<br>Cubic</h1>
```
The `<br>` creates a line break so each word is on its own line. You can remove `<br>` to put them on one line, or change the name entirely.

### Tagline

**Line 47:**
```html
<p class="hero-tagline">Data Scientist&nbsp;&nbsp;|&nbsp;&nbsp;Analytics · Finance · ML</p>
```
Change the text to update your subtitle. `&nbsp;` is a non-breaking space (adds visual spacing around the `|`).

**Examples:**
```html
<!-- Shorter version -->
<p class="hero-tagline">Data Scientist | Analytics & Finance</p>

<!-- Different role -->
<p class="hero-tagline">ML Engineer | Python · SQL · Finance</p>
```

### About Me Paragraphs

**Lines 50–52:**
```html
<p>[Professional summary — describe your role, specialties, and experience...]</p>
<p>[Work philosophy — how you approach data problems...]</p>
<p>[Background and motivation — what drew you to data science...]</p>
```

Replace each `[...]` placeholder with your real text. Keep each paragraph as its own `<p>` tag.

**Example of a finished version:**
```html
<p>I'm a data scientist and BI engineer with a Bachelor's degree in Finance from
San Diego State University, where I graduated Cum Laude. I work across the full
data stack — from building ETL pipelines to developing machine learning models.</p>

<p>My approach starts with the question before the query. I build systems that
are clean, scalable, and actually used by the people who need them.</p>

<p>My path to data science runs through finance — investments, derivatives, and
financial modeling shaped how I think about risk, uncertainty, and outcomes.</p>
```

> Three complete draft versions of this section are saved in the project plan at:
> `/Users/wiley/.claude/plans/virtual-growing-abelson.md`
> Look for "Option A", "Option B", and "Option C".

### Social Links in Hero

The GitHub and LinkedIn URLs appear in two places in the hero section (lines 59 and 63). Both are already set to your correct profiles and do not need to change.

---

## 4. Projects — Featured Cards

There are 4 featured project cards (lines 95–183). Each card has the same structure.

### Card Structure

```html
<article class="project-card featured reveal" data-category="CATEGORY">
  <div class="card-image">
    <img src="assets/images/project-placeholder.svg" alt="PROJECT NAME">
  </div>
  <div class="card-body">
    <div class="card-meta">
      <span class="card-num">01</span>
      <span class="tag tag-CATEGORY">Category Label</span>
    </div>
    <h3 class="card-title">PROJECT TITLE</h3>
    <p class="card-desc">PROJECT DESCRIPTION</p>
    <div class="card-tools">
      <span class="tool-tag">Tool1</span>
      <span class="tool-tag">Tool2</span>
    </div>
    <a href="GITHUB_URL" ...>View on GitHub</a>
  </div>
</article>
```

### Featured Card Locations

| Card | Title | Lines | Category |
|------|-------|-------|----------|
| 01 | Game Time Couture | 95–116 | data-engineering |
| 02 | Data Science Capstone | 118–137 | data-science |
| 03 | Mean Reversion Strategy | 139–160 | finance |
| 04 | Black-Scholes Dashboard | 162–182 | finance |

### What to Edit Per Card

**Title (h3):**
```html
<h3 class="card-title">Game Time Couture — Business Analytics</h3>
```
Change the text between `<h3 class="card-title">` and `</h3>`.

**Description:**
```html
<p class="card-desc">End-to-end business intelligence platform...</p>
```
Change the text between `<p class="card-desc">` and `</p>`.

**Tool tags:**
```html
<span class="tool-tag">Python</span>
<span class="tool-tag">SQL</span>
```
Add, remove, or change tool tags. Each tool is its own `<span class="tool-tag">` element.

**GitHub link (when your repo is ready):**

For cards 03 and 04 (trading projects), replace the disabled badge:
```html
<!-- Current (no repo yet): -->
<span class="btn btn-disabled btn-sm">GitHub — Coming Soon</span>

<!-- Replace with (once repo exists): -->
<a href="https://github.com/WileyCubic/YOUR-REPO-NAME" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">View on GitHub</a>
```

**Category filter tag:**

The `data-category` attribute on the `<article>` tag controls which filter button shows this card. Valid values: `finance`, `data-engineering`, `data-science`, `visualization`.

```html
<article class="project-card featured reveal" data-category="finance">
```

---

## 5. Projects — Additional Cards

There are 7 additional project cards (lines 192–337). They use the same structure as featured cards without the `featured` class.

| Card | Title | Lines |
|------|-------|-------|
| 05 | Machine Learning with Python | 192–211 |
| 06 | House Price Analytics | 213–232 |
| 07 | TSLA & GME Dashboard | 234–253 |
| 08 | Data Visualization | 255–274 |
| 09 | Database Querying (SQLite) | 276–295 |
| 10 | ETL — Bank Market Cap | 297–316 |
| 11 | ETL Pipeline Practice | 318–337 |

Edit these the same way as featured cards (title, description, tools, GitHub link).

---

## 6. Adding a New Project Card

To add a new card to the **featured** grid, paste this template inside the `<div class="projects-featured">` block (before the closing `</div>`):

```html
<article class="project-card featured reveal" data-category="CATEGORY">
  <div class="card-image">
    <img src="assets/images/project-placeholder.svg" alt="PROJECT NAME">
  </div>
  <div class="card-body">
    <div class="card-meta">
      <span class="card-num">05</span>
      <span class="tag tag-CATEGORY">Category Label</span>
    </div>
    <h3 class="card-title">Your Project Title</h3>
    <p class="card-desc">A 2–3 sentence description of the project, what problem it solves, and what you built.</p>
    <div class="card-tools">
      <span class="tool-tag">Python</span>
      <span class="tool-tag">Pandas</span>
    </div>
    <a href="https://github.com/WileyCubic/REPO-NAME" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">View on GitHub</a>
  </div>
</article>
```

Replace `CATEGORY` with one of: `finance`, `data-engineering`, `data-science`, `visualization`.
Update the card number (`card-num`) to continue the sequence.

To add to the **additional** grid instead, paste inside `<div class="projects-grid">` and remove `featured` from the class list.

---

## 7. Resume Section

**File:** `index.html` — Lines 343–361

**Line 351 — Summary text:**
```html
<p class="resume-summary">[Brief summary of your experience, skills, and what you bring to a role. 1–2 sentences.]</p>
```
Replace the `[...]` placeholder with 1–2 sentences.

**Line 353 — Resume PDF link:**
```html
<a href="assets/resume/resume.pdf" class="btn btn-outline" ...>
```
This already points to `assets/resume/resume.pdf`. Drop your PDF file at that path — no code change needed.

**Line 358 — Last updated date:**
```html
<p class="resume-note">Last updated: [Month Year]</p>
```
Change `[Month Year]` to something like `March 2026`.

---

## 8. Contact Section

**File:** `index.html` — Lines 363–385

**Line 371 — Contact heading:**
```html
<h2 class="contact-heading">Let's Connect</h2>
```
Change `Let's Connect` to any heading you prefer.

**Line 372 — Contact subtext:**
```html
<p class="contact-subtext">[Brief availability note or intro message — e.g. "Open to data science roles, freelance projects, and collaborations."]</p>
```
Replace the `[...]` with your message. Keep it 1–2 sentences.

**Example:**
```html
<p class="contact-subtext">Open to data science roles, quantitative research positions, and project collaborations. Based in San Diego — available remotely or in-person.</p>
```

The GitHub and LinkedIn buttons (lines 374–381) already link to your correct profiles.

---

## 9. Footer

**File:** `index.html` — Lines 387–394

**Line 390 — Copyright name:**
```html
<span>© 2026 Wiley Cubic</span>
```
Update the year or name as needed.

**Line 392 — Location:**
```html
<span>San Diego, CA</span>
```
Change to your city or remove this span entirely.

---

## 10. Changing Colors

**File:** `style.css` — Lines 18–28

```css
:root {
  --color-tan:    #C1B098;   /* Resume section background */
  --color-gray:   #9B9B93;   /* Muted text, placeholder backgrounds */
  --color-dark:   #39393A;   /* Hero, nav, contact backgrounds */
  --color-accent: #6B8CAE;   /* Buttons, links, tagline, card numbers */
  --color-light:  #F5F0EB;   /* Text on dark backgrounds */
}
```

Change any hex value here to update that color site-wide. For example, to change the accent from dusty blue to a warm gold:

```css
--color-accent: #B8922A;
```

> Use a tool like [coolors.co](https://coolors.co) or [color.adobe.com](https://color.adobe.com) to preview color combinations before committing.
