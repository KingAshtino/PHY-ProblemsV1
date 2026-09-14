# Physics I problem collection

Live site: [https://kingashtino.github.io/PHY-ProblemsV1/](https://kingashtino.github.io/PHY-ProblemsV1/)

A browsable set of introductory mechanics problems in three categories:

- **A — Baseline.** Ordinary complete-information homework (control set).
- **B — Modified twins.** Same physics as A, with a jagged interface (bad diagrams, noisy data, conflicting captions).
- **C — Human-advantage tasks.** Messy stimuli, modeling choices, and planted AI write-ups to critique.
- **Major Collaborative Problems.** Longer assignments (starting with the skier-over-moguls modeling task). You keep the representations consistent and work with GenAI without handing it the last word.
- **Proposal Problems.** Shorter standalone tasks from the same moguls situation, written for a research proposal.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/PHY-ProblemsV1/`). Start with **Category C**.

Solutions and critique keys are behind **Show rubric / self-check** on each problem page.

## Stack

Vite, React, TypeScript, React Router. Problem content lives in `src/data/`. Diagrams are hand-authored SVGs in `src/diagrams.tsx`.
