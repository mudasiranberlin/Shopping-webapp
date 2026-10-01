# AIC Backend

Node.js + Express + MongoDB backend for the existing AIC React website.

## Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Set `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`, `PORT`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in `.env`. On first startup the configured admin account is created automatically.

Health check: `GET http://localhost:5000/api/health`

## API

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` (Bearer token)
- `POST /api/contact`
- `GET /api/contact` (admin)
- `PATCH /api/contact/:id` (admin)
- `DELETE /api/contact/:id` (admin)
- `POST /api/newsletter`
- `GET /api/newsletter` (admin)
- `DELETE /api/newsletter/:id` (admin)
- `GET /api/admin/dashboard` (admin)
- `GET /api/admin/users` (admin)
- `PATCH /api/admin/users/:id/role` (admin)
- `GET /api/content`
- `GET /api/content/:key`
- `PUT /api/content/:key` (admin)
- `DELETE /api/content/:key` (admin)

Passwords are hashed with bcryptjs and are never returned by the API.
