﻿# Drinks AI React

Single-page app to search cocktail recipes, view details, manage favorites, and generate AI-assisted recipes. Built as a portfolio project to showcase React + TypeScript patterns, state slices, and API consumption.

Live demo: https://drinks-api-ai.netlify.app/

## Project overview
- Search cocktails by ingredient and category
- View recipe details in a modal
- Save/remove favorites (local storage)
- AI-generated cocktail recipes streamed to the UI

## Features
- Recipe search with filters
- Modal recipe details
- Favorites with persistence
- AI recipe generation

## Tech stack
- React + TypeScript
- Vite
- Zustand (slice-based store)
- Zod
- Tailwind CSS
- React Router
- Axios
- OpenRouter (AI)

## Installation & setup
```bash
npm install
npm run dev
```

## Environment variables
Create a .env file at the project root:
```bash
VITE_OPENROUTER_API_KEY=your_key_here
```
Notes:
- The AI feature requires this key.
- This is a client-side build, so the key is exposed in the browser. For production, move AI calls to a backend or serverless function.

## Scripts
- dev: start the dev server
- build: type-check and build the app
- preview: preview the production build
- lint: run ESLint

## Project structure
```
src/
	components/   Reusable UI components
	layouts/      Application layout
	lib/          API clients
	services/     Data and API services
	stores/       Zustand store and slices
	types/        Shared TypeScript types
	utils/        Zod schemas and helpers
	views/        Route-level pages
```

## Future improvements
- Move AI integration to a backend to avoid exposing keys
- Add error handling and loading states for API calls
- Improve accessibility (focus states, aria labels)
- Add tests for store logic and UI components
- Expand ingredient parsing beyond six items
