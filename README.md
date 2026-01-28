# Drinks React TypeScript

## English

### Project overview
Single-page app to search cocktail recipes, view details, manage favorites, and generate a custom recipe using AI. Built to practice a real-world UI flow, state management with slices, API consumption, and streaming AI responses.

If you are reviewing this as a portfolio project: it is a good foundation, but still needs security hardening, error handling, and documentation polish before being production‑ready.

### Features
- Search cocktails by ingredient and category
- View recipe details in a modal
- Save/remove favorites (stored in local storage)
- AI‑generated recipe text streamed to the UI

### Tech stack
- React 19 + TypeScript
- Vite
- Zustand (state management)
- Zod (schema validation)
- Tailwind CSS
- React Router
- Axios
- OpenRouter (AI)

### Installation & setup
```bash
npm install
npm run dev
```

### Environment variables
Create a .env file in the project root:
```
VITE_OPENROUTER_API_KEY=your_api_key_here
```

### Scripts
- npm run dev — start dev server
- npm run build — build for production
- npm run preview — preview production build
- npm run lint — run ESLint

### Project structure
```
src/
  components/   UI components (cards, modal, notification)
  layouts/      App layout
  lib/          API clients (OpenRouter, axios)
  services/     API services
  stores/       Zustand slices and store
  utils/        Zod schemas
  views/        Route pages
```

### Future improvements
- Move AI calls to a backend to avoid exposing keys in the client
- Add loading and error states for all API calls
- Improve routing consistency and Tailwind class usage
- Add tests for services and slices
- Support more ingredients/measures in recipe details

---

## Español

### Descripción del proyecto
Aplicación SPA para buscar recetas de cócteles, ver detalles, gestionar favoritos y generar una receta con IA. Diseñada para practicar un flujo real de UI, manejo de estado por slices, consumo de APIs y streaming de respuestas.

Como proyecto de portafolio: es una buena base, pero requiere mejoras en seguridad, manejo de errores y documentación para estar listo para producción.

### Funcionalidades
- Búsqueda de cócteles por ingrediente y categoría
- Detalle de receta en modal
- Favoritos con persistencia en local storage
- Receta generada por IA en streaming

### Tech stack
- React 19 + TypeScript
- Vite
- Zustand
- Zod
- Tailwind CSS
- React Router
- Axios
- OpenRouter (IA)

### Instalación y setup
```bash
npm install
npm run dev
```

### Variables de entorno
Crear un archivo .env en la raíz:
```
VITE_OPENROUTER_API_KEY=tu_api_key_aqui
```

### Scripts
- npm run dev — iniciar el servidor de desarrollo
- npm run build — build para producción
- npm run preview — previsualizar build
- npm run lint — ejecutar ESLint

### Estructura del proyecto
```
src/
  components/   Componentes UI
  layouts/      Layout principal
  lib/          Clientes API
  services/     Servicios de datos
  stores/       Slices de Zustand
  utils/        Esquemas Zod
  views/        Páginas de rutas
```

### Mejoras futuras
- Mover llamadas de IA a backend para proteger la clave
- Agregar estados de carga y error en todas las llamadas
- Corregir consistencia de rutas y clases Tailwind
- Añadir tests para servicios y slices
- Soportar más ingredientes/medidas en detalles
