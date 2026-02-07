﻿# Drinks AI React

Aplicación SPA para buscar recetas de cócteles, ver detalles, gestionar favoritos y generar recetas asistidas por IA. Proyecto de portafolio para demostrar patrones en React + TypeScript, slices con Zustand y consumo de APIs.

Demo: https://drinks-api-ai.netlify.app/

## Descripción del proyecto
- Búsqueda de cócteles por ingrediente y categoría
- Detalles de receta en modal
- Favoritos con persistencia en local storage
- Generación de recetas con IA (streaming)

## Funcionalidades
- Filtro de recetas
- Detalle en modal
- Favoritos persistentes
- Generación con IA

## Tecnologías
- React + TypeScript
- Vite
- Zustand (store por slices)
- Zod
- Tailwind CSS
- React Router
- Axios
- OpenRouter (IA)

## Instalación y configuración
```bash
npm install
npm run dev
```

## Variables de entorno
Crea un archivo .env en la raíz del proyecto:
```bash
VITE_OPENROUTER_API_KEY=tu_key_aqui
```
Notas:
- La funcionalidad de IA requiere esta clave.
- Al ser cliente, la clave se expone en el navegador. Para producción, mover la integración a un backend o función serverless.

## Scripts
- dev: inicia el servidor de desarrollo
- build: type-check y build
- preview: previsualiza el build
- lint: ejecuta ESLint

## Estructura del proyecto
```
src/
	components/   Componentes reutilizables de UI
	layouts/      Layout de la aplicación
	lib/          Clientes de API
	services/     Servicios de datos
	stores/       Store y slices de Zustand
	types/        Tipos compartidos
	utils/        Esquemas Zod y utilidades
	views/        Páginas por ruta
```

## Mejoras futuras
- Mover la integración de IA a backend para no exponer claves
- Mejorar manejo de errores y estados de carga
- Mejorar accesibilidad (focus states, aria labels)
- Agregar tests a store y componentes
- Expandir el parseo de ingredientes más allá de seis
