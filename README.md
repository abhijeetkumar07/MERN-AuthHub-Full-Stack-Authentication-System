# AuthVerse - Next Generation Authentication Platform

AuthVerse is a premium full-stack MERN authentication application with secure JWT cookie auth, protected routes, profile management, reset-password tokens, dark/light theme support, animated React UI, and a glassmorphism SaaS dashboard.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router, Axios, React Hot Toast, Lucide React, Recharts
- Backend: Node.js, Express, MongoDB, Mongoose, bcrypt.js, JWT, cookie-parser, Helmet, CORS, express-rate-limit
- Deployment: Vercel frontend, Render backend, MongoDB Atlas database

## Features

- Register, login, logout, persistent secure-cookie sessions
- Protected dashboard and profile routes
- Role-ready authorization middleware
- Forgot password and reset password token flow
- Modern landing page, auth pages, dashboard, profile, and 404 page
- Glassmorphism UI, animated gradients, cursor glow, particles, skeleton loaders
- Responsive sidebar navigation and analytics dashboard charts
- MVC backend architecture with centralized error handling

## Project Structure

```txt
frontend/
  src/
    animations/
    components/
    context/
    hooks/
    layouts/
    pages/
    utils/
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  utils/
```

## Environment Setup

Create `backend/.env`:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/authverse
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## Local Development

Install dependencies:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.
Backend runs at `http://localhost:5000`.

## API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `PUT /api/auth/profile`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password/:token`

## Deployment

### MongoDB Atlas

1. Create an Atlas cluster.
2. Add a database user.
3. Allow your Render backend IP or use `0.0.0.0/0` for broad access.
4. Copy the connection string into `MONGO_URI`.

### Backend on Render

1. Create a new Web Service from this repository.
2. Root directory: `backend`
3. Build command: `npm install`
4. Start command: `npm start`
5. Add the backend environment variables from `backend/.env.example`.
6. Set `CLIENT_URL` to your Vercel frontend URL.

### Frontend on Vercel

1. Import this repository into Vercel.
2. Root directory: `frontend`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add `VITE_API_URL=https://your-render-service.onrender.com/api`.

For production cookies, keep `NODE_ENV=production` on Render so cookies use `secure` and `sameSite=none`.
