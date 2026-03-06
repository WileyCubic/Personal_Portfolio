# Images Guide

How to replace placeholder images with your real photos and project screenshots.

---

## Table of Contents

1. [Replacing Your Headshot](#1-replacing-your-headshot)
2. [Replacing Project Images](#2-replacing-project-images)
3. [Image Format & Size Recommendations](#3-image-format--size-recommendations)
4. [Preparing Your Photos (macOS)](#4-preparing-your-photos-macos)

---

## 1. Replacing Your Headshot

The headshot appears in the left column of the hero section.

### Step 1 — Prepare your photo

- Crop to a **portrait aspect ratio** (tall, not wide) — roughly 3:4 or 2:3 works best
- Minimum size: **600 × 800 px**
- Recommended format: **JPG** (smaller file) or **PNG** (if you need transparency)
- Suggested filename: `headshot.jpg`

### Step 2 — Place the file

Copy your photo into:
```
Personal_Portfolio/assets/images/headshot.jpg
```

### Step 3 — Update the HTML

Open `index.html` and find **line 41**:
```html
<img src="assets/images/headshot-placeholder.svg" alt="Wiley Cubic" loading="eager">
```

Change `headshot-placeholder.svg` to your filename:
```html
<img src="assets/images/headshot.jpg" alt="Wiley Cubic" loading="eager">
```

Save the file and refresh your browser — your photo should appear immediately.

> The image fills the left column with `object-fit: cover`, meaning it will crop to fill the space rather than stretch or shrink. If the crop cuts off your face, adjust `object-position` in `style.css` — find `.hero-photo img` and change `object-position: center top` to `object-position: center center` or `object-position: top`.

---

## 2. Replacing Project Images

Each of the 11 project cards currently shows the same `project-placeholder.svg`. You can add a unique screenshot or mockup for each one.

### Step 1 — Prepare your images

- Crop to **16:9 aspect ratio** (wide format) — e.g. 1280×720 px, 800×450 px
- Minimum size: **800 × 450 px**
- Recommended format: **PNG** (for screenshots) or **JPG** (for photos/mockups)
- Suggested naming convention: `project-01-gtc.jpg`, `project-02-capstone.jpg`, etc.

### Step 2 — Place the files

Copy your images into:
```
Personal_Portfolio/assets/images/
```

### Step 3 — Update each card in index.html

Find the card you want to update and change the `<img src>` to your filename.

**Card 01 — Game Time Couture (line 97):**
```html
<!-- Before: -->
<img src="assets/images/project-placeholder.svg" alt="Game Time Couture Business Analytics">

<!-- After: -->
<img src="assets/images/project-01-gtc.jpg" alt="Game Time Couture Business Analytics">
```

Also update the `alt` text to describe your image (this helps with accessibility and SEO).

### All project card image locations

| Card | Project | Line | Suggested Filename |
|------|---------|------|--------------------|
| 01 | Game Time Couture | 97 | `project-01-gtc.jpg` |
| 02 | Data Science Capstone | 120 | `project-02-capstone.jpg` |
| 03 | Mean Reversion Strategy | 141 | `project-03-trading.jpg` |
| 04 | Black-Scholes Dashboard | 164 | `project-04-blackscholes.jpg` |
| 05 | Machine Learning | 194 | `project-05-ml.jpg` |
| 06 | House Price Analytics | 215 | `project-06-housing.jpg` |
| 07 | TSLA & GME Dashboard | 236 | `project-07-stocks.jpg` |
| 08 | Data Visualization | 257 | `project-08-dataviz.jpg` |
| 09 | Database / SQLite | 278 | `project-09-sql.jpg` |
| 10 | ETL — Bank Market Cap | 299 | `project-10-etl-bank.jpg` |
| 11 | ETL Pipeline Practice | 320 | `project-11-etl.jpg` |

You can update any subset of cards — cards without updated images will continue showing the default placeholder.

---

## 3. Image Format & Size Recommendations

### Headshot

| Setting | Recommendation |
|---------|----------------|
| Aspect ratio | 3:4 (portrait) or 2:3 |
| Minimum size | 600 × 800 px |
| Maximum size | 1200 × 1600 px |
| File format | JPG (quality 80–90%) |
| File size target | Under 300 KB |
| Background | Plain or blurred — avoids visual clutter |

### Project Images

| Setting | Recommendation |
|---------|----------------|
| Aspect ratio | 16:9 (widescreen) |
| Minimum size | 800 × 450 px |
| Maximum size | 1600 × 900 px |
| File format | PNG for screenshots, JPG for photos |
| File size target | Under 400 KB per image |
| Content | A chart, dashboard screenshot, code snippet, or mockup |

> **Performance note:** Large image files slow down page load. If your images are large (over 1 MB), compress them first (see below).

---

## 4. Preparing Your Photos (macOS)

### Resize and compress with Preview (built-in)

1. Open your image in **Preview**
2. Go to **Tools → Adjust Size**
3. Set the width to `1200` (headshot) or `1600` (project) — height adjusts automatically
4. Click **OK**
5. Go to **File → Export**
6. Choose **JPEG**, set quality to **80%**, save

### Compress with Squoosh (free, browser-based)

1. Go to [squoosh.app](https://squoosh.app)
2. Drop in your image
3. Choose **MozJPEG** or **WebP** format
4. Drag the quality slider to ~80
5. Download the compressed file

### Take a good project screenshot on macOS

**Full-screen screenshot:**
Press `Cmd + Shift + 3` — saves to Desktop

**Selected area screenshot:**
Press `Cmd + Shift + 4`, then drag to select the area you want

**Window screenshot:**
Press `Cmd + Shift + 4`, then press `Space`, then click the window
