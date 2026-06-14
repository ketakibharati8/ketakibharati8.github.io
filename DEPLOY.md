# GitHub Pages Deployment (GitHub Actions)

This repository uses GitHub Actions to build and deploy the site to GitHub Pages.

Summary
- Workflow: `.github/workflows/deploy.yml`
- Build output: `dist/` (Vite)
- Trigger: push to `main` (or `master`)
- Pages publishing is handled by `actions/deploy-pages` and `actions/upload-pages-artifact`.

How to deploy (push-based, recommended)
1. Make your changes on `main`.
2. Commit and push:

```powershell
git add -A
git commit -m "chore: prepare site for deployment"
git push origin main
```

3. Open GitHub → Actions → **Build and Deploy** workflow and watch the run.
4. After the workflow completes, open GitHub → Settings → Pages. The "Source" will show "GitHub Actions" and the published URL.

Troubleshooting
- Build fails:
  - Open the failing workflow run and inspect `npm run build` logs.
  - Ensure required environment variables or secrets (if any) are configured in repository Settings → Secrets.
- Pages not published after success:
  - Confirm the workflow completed the `actions/deploy-pages` step successfully.
  - Confirm repository Settings → Pages permissions allow publishing (usually handled by the workflow).

Manual alternative (not recommended)
- If you prefer to use the Pages UI to "Deploy from a branch" → `main` → `/dist`, you must commit the built `dist/` folder to the branch (force-add since `dist/` is in `.gitignore`). This is discouraged because build artifacts should not be stored in Git history.

Notes
- The workflow already sets `permissions.pages: write` and `id-token: write` required for the deployment action.
- The PR comment that appears after a successful deploy now uses the repository name dynamically as the preview URL.

Image & 3D guidance
- Convert large raster images to WebP or AVIF to reduce bytes on the wire; keep a small PNG fallback if needed.
- Use `loading="lazy"` for non-critical images (profile thumbnails, project screenshots) — this repo now adds `loading="lazy"` for several images.
- If you plan to add 3D assets, prefer a progressive enhancement approach:
  1. Use a static poster image or SVG as the initial visual.
  2. Lazy-load a 3D viewer (e.g., `<model-viewer>` or `@react-three/fiber`) on user interaction or after the main content loads.
  3. Compress 3D models with Draco and serve via CDN.

Tools & commands
- Run a Lighthouse audit locally (Chrome required):
```powershell
npx -y lighthouse https://ketakibharati.github.io/ --output html --output-path ./reports/lighthouse.html --chrome-flags="--no-sandbox --headless"
```

- Run Lighthouse against a local preview (build + preview in background):
```powershell
npm run build
npm run preview -- --port 5173
# then, in another shell:
npx -y lighthouse http://127.0.0.1:5173 --output html --output-path ./reports/lighthouse-local.html --chrome-flags="--no-sandbox --headless"
```

CI
- Consider adding `lhci` to CI for tracking performance trends over time.
