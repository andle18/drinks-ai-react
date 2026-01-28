# Drinks AI React

This project was built as a portfolio and learning project to demonstrate modern React patterns, state management with slices, API integration, and responsible usage of AI tools.

The focus is on clean architecture, type safety, and a realistic UI flow rather than production-scale features.

---

## Project Overview
Single-page application to search cocktail recipes, view details, manage favorites, and generate a custom cocktail recipe using AI.

The goal of this project is to practice real-world frontend patterns, API consumption, and AI-assisted features in a controlled and professional way.

If you are reviewing this as a portfolio project: it is a solid foundation, but it still requires security hardening, improved error handling, and minor UX polish before being production-ready.

---

## Live Demo
🔗 https://drinks-api-ai.netlify.app/

---

## Features
- Search cocktails by ingredient and category
- View recipe details in a modal
- Save and remove favorite drinks (persisted in local storage)
- AI-generated cocktail recipes streamed to the UI

---

## Tech Stack
- React + TypeScript
- Vite
- Zustand (state management with slices)
- Zod (schema validation)
- Tailwind CSS
- React Router
- Axios
- OpenRouter (AI integration)

---

## Project Structure
src/
-   components/   Reusable UI components
-   layouts/      Application layout
-   lib/          API clients
-   services/     Data and API services
-   stores/       Zustand store and slices
-   utils/        Zod schemas and helpers
-  views/        Route-level pages

---

## Installation & Setup

```bash
npm install
npm run dev
