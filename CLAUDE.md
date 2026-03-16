# Portfolio Project Guide (CLAUDE.md)

This file summarizes the core architecture, instructions, and preferences established during the development of this dual-profile portfolio.

## 🚀 Project Overview
A multi-path portfolio built with **React, TypeScript, MUI, and SCSS**. It supports two distinct professional identities (Blockchain Developer and Full Stack Engineer) through route-based data injection.

---

## 🏗 Architecture & Routing

### Dual Profile Logic
- **Primary Pages**: `/blockchain` (default redirect) and `/fullstack`.
- **Logic**: Each route loads a unique `Page` component which passes specific data objects (`blockchainResume` or `fullstackResume`) down to the core UI components (`Main`, `Expertise`, `Timeline`, `Project`).
- **Data Definition**: All TypeScript interfaces are centralized in `src/types/resume.ts`.

### Navigation (In-Page Scrolling)
- **Behavior**: The top navigation bar prioritizes smooth scrolling to sections within the current page (Expertise, History, Projects, Contact).

---

## 📦 Data Management

### Resumes
- `src/data/blockchainResume.ts`
- `src/data/fullstackResume.ts`
- **Expertise Split**:
  - **Blockchain**: Blockchain Development, Full Stack Web Dev, DevOps.
  - **Full Stack**: Frontend, Backend, DevOps.

---

## 🌎 Deployment (Vercel)
- **vercel.json**: Standard rewrite rule `/(.*) -> /index.html` is used to handle client-side routing.
