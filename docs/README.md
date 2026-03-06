# Wiley Cubic — Portfolio Documentation

This folder contains guides for maintaining and deploying your portfolio site.

---

## Quick Links

| Guide | Description |
|-------|-------------|
| [content-guide.md](content-guide.md) | Edit all text fields — about me, projects, contact, etc. |
| [images-guide.md](images-guide.md) | Swap your headshot and project images |
| [github-pages.md](github-pages.md) | Deploy the site to GitHub Pages |

---

## Project Structure

```
Personal_Portfolio/
├── index.html              Main HTML file — all sections live here
├── style.css               All visual styling, colors, fonts, layout
├── script.js               Scroll animations, nav behavior, project filter
├── docs/                   This documentation folder
│   ├── README.md           You are here
│   ├── content-guide.md    How to edit text
│   ├── images-guide.md     How to swap images
│   └── github-pages.md     How to deploy to GitHub Pages
└── assets/
    ├── images/
    │   ├── headshot-placeholder.svg    Replace with your real photo
    │   └── project-placeholder.svg    Replace with project screenshots
    └── resume/
        └── resume.pdf                 Drop your PDF here (not included)
```

---

## How to Preview Locally

No server or build step required. Just open the file directly in your browser:

**Option 1 — Finder:**
Double-click `index.html` in Finder.

**Option 2 — Terminal:**
```bash
open "/Users/wiley/Personal_Portfolio/index.html"
```

**Option 3 — VS Code:**
Right-click `index.html` → Open with Live Server (if you have the extension).

> After any edit, save the file and refresh the browser tab to see changes.

---

## Site Sections At a Glance

| Section | Location in index.html | Background |
|---------|------------------------|------------|
| Navigation | Lines 15–36 | Transparent → dark on scroll |
| Hero / About | Lines 38–70 | Dark charcoal `#39393A` |
| Projects | Lines 72–341 | Light `#F5F0EB` |
| Resume | Lines 343–361 | Warm tan `#C1B098` |
| Contact | Lines 363–385 | Dark charcoal `#39393A` |
| Footer | Lines 387–394 | Near-black `#2e2e2f` |

---

## Color Palette

Defined as CSS variables at the top of `style.css` (lines 18–28).

| Variable | Hex | Used for |
|----------|-----|----------|
| `--color-tan` | `#C1B098` | Resume section background, accents |
| `--color-gray` | `#9B9B93` | Placeholder backgrounds, muted text |
| `--color-dark` | `#39393A` | Hero, nav, contact backgrounds |
| `--color-accent` | `#6B8CAE` | Buttons, links, card numbers, tagline |
| `--color-light` | `#F5F0EB` | Text on dark backgrounds |

To change any color site-wide, edit the value in `style.css` — it updates everywhere automatically.

---

## Fonts

| Font | Used for | Source |
|------|----------|--------|
| Roboto Slab | Headings, name, section titles | Google Fonts |
| JetBrains Mono | Body text, tagline, nav links | Google Fonts |

Fonts load from Google Fonts CDN (requires internet). Defined in `style.css` lines 24–25 and loaded via `<link>` in `index.html` lines 8–10.

---

## Pending Items (Placeholders to Fill)

| Item | Location | Guide |
|------|----------|-------|
| Your headshot photo | `assets/images/` | [images-guide.md](images-guide.md) |
| About Me paragraphs | `index.html` lines 50–52 | [content-guide.md](content-guide.md) |
| Resume PDF | `assets/resume/resume.pdf` | [content-guide.md](content-guide.md) |
| Resume summary text | `index.html` line 351 | [content-guide.md](content-guide.md) |
| Resume last-updated date | `index.html` line 358 | [content-guide.md](content-guide.md) |
| Contact availability note | `index.html` line 372 | [content-guide.md](content-guide.md) |
| Project images (11 cards) | `assets/images/` | [images-guide.md](images-guide.md) |
| Trading strategy GitHub link | `index.html` line 158 | [content-guide.md](content-guide.md) |
| Black-Scholes GitHub link | `index.html` line 180 | [content-guide.md](content-guide.md) |
