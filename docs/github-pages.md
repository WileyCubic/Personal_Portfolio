# GitHub Pages Deployment Guide

How to publish your portfolio so it's live at `https://wileycubic.github.io`.

No build step. No server. Just push files — GitHub handles the hosting for free.

---

## Overview

GitHub Pages serves your `index.html` directly from a repository. Because your portfolio is plain HTML/CSS/JS, the deployment is as simple as creating a repo and pushing your files.

**Your live URL will be:** `https://wileycubic.github.io`

---

## Prerequisites

- A GitHub account at [github.com](https://github.com) (you already have one: WileyCubic)
- Git installed on your Mac — check by running `git --version` in Terminal
- If Git is not installed: run `xcode-select --install` in Terminal

---

## Step 1 — Create the GitHub Repository

1. Go to [github.com/new](https://github.com/new) (make sure you're logged in)
2. Set the **Repository name** to exactly:
   ```
   WileyCubic.github.io
   ```
   > This exact name is required for your site to be hosted at `https://wileycubic.github.io`. If the name differs, the URL will be different.
3. Set visibility to **Public**
4. Leave "Initialize this repository" **unchecked** — you'll push existing files
5. Click **Create repository**

---

## Step 2 — Initialize Git in Your Portfolio Folder

Open **Terminal** and run these commands one at a time:

```bash
cd "/Users/wiley/Personal_Portfolio"
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio"
```

---

## Step 3 — Connect to GitHub and Push

```bash
git remote add origin https://github.com/WileyCubic/WileyCubic.github.io.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

You'll be prompted for your GitHub username and password (or a Personal Access Token — see note below).

> **Note on GitHub authentication:** GitHub no longer accepts your account password for Git pushes. You need a **Personal Access Token (PAT)**.
>
> To create one:
> 1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
> 2. Click **Generate new token (classic)**
> 3. Give it a name (e.g. "portfolio"), set expiration, check the **repo** scope
> 4. Click **Generate token** and copy it
> 5. Use this token as your "password" when Git prompts you
>
> Alternatively, use the [GitHub CLI](https://cli.github.com) (`brew install gh`, then `gh auth login`) to avoid tokens entirely.

---

## Step 4 — Enable GitHub Pages

1. Go to your repository: `https://github.com/WileyCubic/WileyCubic.github.io`
2. Click the **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

GitHub will display a green banner:
> "Your site is live at https://wileycubic.github.io"

It typically goes live within **1–2 minutes**.

---

## Step 5 — Verify It's Live

Open your browser and go to:
```
https://wileycubic.github.io
```

If it shows a 404, wait another minute and refresh — the first deploy sometimes takes a few minutes.

---

## Updating the Site After Changes

Every time you edit `index.html`, `style.css`, `script.js`, or add new images, run these commands to push the changes live:

```bash
cd "/Users/wiley/Personal_Portfolio"
git add .
git commit -m "Update about me text"
git push
```

The site will update within **1–2 minutes** of pushing.

---

## Updating the Resume PDF

1. Name your PDF file `resume.pdf`
2. Copy it to `assets/resume/resume.pdf`
3. Push the change:
   ```bash
   cd "/Users/wiley/Personal_Portfolio"
   git add assets/resume/resume.pdf
   git commit -m "Add resume PDF"
   git push
   ```

---

## Adding Your Domain (Optional)

If you own a custom domain (e.g. `wileycubic.com`), you can point it to your GitHub Pages site:

1. Go to GitHub → your repo → **Settings → Pages**
2. Under **Custom domain**, enter your domain (e.g. `wileycubic.com`)
3. Click **Save**
4. At your domain registrar, add a **CNAME record**:
   - Name: `www`
   - Value: `wileycubic.github.io`
5. Check **Enforce HTTPS** once the domain validates

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Wait 2–3 minutes, then check Settings → Pages to confirm Pages is enabled |
| CSS / images not loading | Make sure all file paths are relative (e.g. `assets/images/...`), not absolute |
| Changes not showing | Check that you committed AND pushed (`git push`) — just saving the file is not enough |
| Authentication failed | Use a Personal Access Token, not your GitHub account password (see Step 3) |
| Wrong URL | Repo must be named exactly `WileyCubic.github.io` (case-sensitive) |
| Resume PDF 404 | Confirm `resume.pdf` is in `assets/resume/` and was included in your last push |

---

## Repository Structure on GitHub

After pushing, your GitHub repository will look like this:

```
WileyCubic.github.io/
├── index.html
├── style.css
├── script.js
├── docs/
│   ├── README.md
│   ├── content-guide.md
│   ├── images-guide.md
│   └── github-pages.md
└── assets/
    ├── images/
    │   ├── headshot-placeholder.svg
    │   └── project-placeholder.svg
    └── resume/
        └── resume.pdf   (add before pushing)
```

The `docs/` folder will be visible on GitHub but won't appear on the live website — it's only for your reference.
