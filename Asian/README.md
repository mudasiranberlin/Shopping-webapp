# Asian Institute of Cambodia Website

This version preserves the existing React/Vite design while fixing navigation and adding a production-ready API foundation.

## Frontend

```bash
npm install
cp .env.example .env
npm run dev
```

Frontend API variable:

```ini
VITE_API_URL=http://localhost:5000/api
```

## Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The backend runs on port 5000 by default.

## Routing

The original application was a single page using hash anchors. It now uses a lightweight history-based router so existing links navigate to real paths without a full page reload. Vite's SPA fallback handles direct browser navigation during development/preview. Production hosting must also be configured to serve `index.html` for unknown frontend paths.

## Design

Existing CSS, components, images, responsive layout, colors, typography and visual structure were retained. Changes are limited to routing, navigation behavior, asset path correction, form/API integration, and backend functionality.
