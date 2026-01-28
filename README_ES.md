# Drinks AI React

Este proyecto fue creado como parte de un portafolio y como ejercicio de aprendizaje para demostrar patrones modernos en React, manejo de estado por slices, consumo de APIs y uso responsable de herramientas de IA.

El enfoque está en la arquitectura limpia, el tipado fuerte y un flujo de UI realista, no en características a escala de producción.

---

## Descripción del Proyecto
Aplicación SPA para buscar recetas de cócteles, ver detalles, gestionar favoritos y generar recetas personalizadas utilizando IA.

El objetivo del proyecto es practicar patrones reales de frontend, integración con APIs y funcionalidades asistidas por IA de manera controlada y profesional.

Como proyecto de portafolio: es una base sólida, pero aún requiere mejoras en seguridad, manejo de errores y pulido de UX antes de estar listo para producción.

---

## Demo en Vivo
🔗 https://drinks-api-ai.netlify.app/

---

## Funcionalidades
- Búsqueda de cócteles por ingrediente y categoría
- Visualización de detalles en un modal
- Guardar y eliminar favoritos (persistidos en local storage)
- Generación de recetas con IA mediante streaming

---

## Tecnologías Utilizadas
- React + TypeScript
- Vite
- Zustand (manejo de estado por slices)
- Zod (validación de esquemas)
- Tailwind CSS
- React Router
- Axios
- OpenRouter (integración de IA)

---

## Estructura del proyecto
src/
  components/   Componentes reutilizables de UI
  layouts/      Layout de la aplicación
  lib/          Clientes de API
  services/     Servicios de datos
  stores/       Store y slices de Zustand
  utils/        Esquemas Zod y utilidades
  views/        Páginas por ruta

---

## Instalación y Configuración

```bash
npm install
npm run dev
