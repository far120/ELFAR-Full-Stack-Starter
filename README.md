# 🚀 ELFAR Full-Stack Starter

A modern, enterprise-ready full-stack starter template built with **React 19**, **Vite**, **TypeScript**, **Express 5**, **MongoDB**, **Tailwind CSS v4**, **TanStack Query v5**, and **Google Gemini AI**.

Designed for high performance, maximum developer productivity, strict security, and stunning dark-mode UI aesthetics.

---

## 🌟 Key Features

### 💻 Frontend (Client)
- **⚡ React 19 & Vite**: Blazing fast development and bundle performance with TypeScript.
- **🎨 Tailwind CSS v4 & Glassmorphism**: Vibrant dark-mode UI design system with ambient glows, sleek micro-interactions, and custom badges.
- **🔒 Protected Routes & RBAC**: Centralized `ProtectedRoute` component enforcing authentication and Role-Based Access Control (`super-admin`, `admin`, `business-manager`, `user`).
- **👥 User Management Directory (`/dashboard/users`)**: Full CRUD table, inline role assignment, account block/unblock toggles, new user creation modal, dynamic numbered pagination, and search filters.
- **📊 Real-Time Audit Activity Logs (`/dashboard/logs`)**: Live tracking dashboard displaying user API calls, HTTP status codes, method badges (`GET`, `POST`, `PUT`, `DELETE`), response latencies, IP address, auto-refetching, and log clearance.
- **🤖 Read-Only AI Profile Summary (`/profile`)**: AI-generated summary metrics, user details, avatar fallback, and security options.
- **🔑 Change Password Service (`/change-password`)**: Form with show/hide password toggles, client-side Zod validation, and backend integration.
- **📈 Project Statistics Dashboard (`/dashboard`)**: High-level metric cards, account verification ratios, system infrastructure health, and quick service links.

### 🛡️ Backend (Server)
- **🟢 Node.js & Express 5**: Modern modular backend architecture (`modules/`, `core/`, `app/`, `routes/`).
- **🍃 MongoDB & Mongoose 9**: Schemas for Users and Audit Logs with custom indexes for optimized queries.
- **🔐 JWT Authentication & Security**: Secure token generation/verification, role authorization, `helmet`, `cors`, and `express-rate-limit`.
- **🪵 Winston & MongoDB Audit Logging**: Centralized logging system recording all API activity into Winston files (`logs/app.log`, `logs/error.log`) and MongoDB `AuditLog` collection.
- **🧠 Google Gemini AI Integration**: `@google/genai` integration for automated user analysis and project diagnostics.
- **📐 Request Validation**: Zod schema validation middleware for all API endpoints.

---

## 📁 Project Architecture

```
ELFAR Full-Stack Starter/
├── client/                     # Frontend Application (React 19 + Vite)
│   ├── src/
│   │   ├── app/
│   │   │   └── router/         # Router configuration & ProtectedRoute (RBAC)
│   │   ├── components/         # Shared Layout (Header, Navbar, Footer) & Feedback
│   │   ├── features/
│   │   │   ├── auth/           # Login & Register components
│   │   │   ├── user/           # Profile, UserManagement, Dashboard, ChangePassword
│   │   │   └── logs/           # UserActivityLogs table, hooks, and API services
│   │   ├── lib/                # Axios client with 401 interceptors
│   │   └── pages/              # Landing HomePage & public views
│   └── package.json
│
├── server/                     # Backend Application (Express 5 + MongoDB)
│   ├── src/
│   │   ├── app/                # Express app configuration & server initialization
│   │   ├── core/               # Database, Winston logger, and security middlewares
│   │   │   ├── database/       # Mongoose connection setup
│   │   │   ├── logger/         # Winston logger configuration
│   │   │   └── middleware/     # Auth, Authorization, RateLimit, UserLogger
│   │   ├── modules/
│   │   │   ├── users/          # User routes, controllers, services, model & Zod schemas
│   │   │   └── auditLog/       # Audit log routes, controllers, services & model
│   │   └── routes/             # Central API router (/api/v1)
│   └── package.json
│
├── .env                        # Environment configuration
├── package.json                # Monorepo concurrency scripts
└── README.md
```

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 6, TypeScript |
| **Styling & UI** | Tailwind CSS v4, Lucide React Icons |
| **State & Data Fetching**| TanStack React Query v5, Axios |
| **Forms & Validation** | React Hook Form, Zod |
| **Routing** | React Router v7 |
| **Backend Runtime** | Node.js, Express 5, TypeScript |
| **Database & ORM** | MongoDB, Mongoose 9 |
| **Security & Auth** | JWT, bcrypt, Helmet, Express-Rate-Limit, CORS |
| **Logging & AI** | Winston, @google/genai (Gemini SDK) |

---

## ⚡ Quick Start & Installation

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **MongoDB**: Local instance running on `mongodb://localhost:27017` or MongoDB Atlas URI

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/elfar-fullstack-starter.git
cd elfar-fullstack-starter
```

### 2. Install Dependencies
Install dependencies for root, client, and server:
```bash
# Install root monorepo dependencies
npm install

# Install client dependencies
npm --prefix client install

# Install server dependencies
npm --prefix server install
```

### 3. Environment Setup
Configure your `.env` file in the root directory (or inside `server/`):
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/elfar_starter
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
FRONTEND_URL=http://localhost:5173
```

### 4. Run Development Servers Concurrently
Start both frontend (Vite) and backend (Nodemon + TSX) simultaneously with a single command:
```bash
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend API Server**: `http://localhost:5000/api/v1`

---

## 📡 API Endpoints Summary

### Auth & Users (`/api/v1/users`)
- `POST /register`: Register a new account.
- `POST /login`: Authenticate user and receive JWT token.
- `GET /me`: Fetch authenticated user profile.
- `PUT /update/me`: Update profile details.
- `POST /change-password`: Change user password.
- `GET /all-users`: Fetch all users with pagination and search (`super-admin`, `admin`).
- `PUT /role/:id`: Change user role (`super-admin`).
- `PUT /block/:id`: Toggle block/unblock user (`super-admin`).
- `DELETE /delete/:id`: Delete user account (`super-admin`).
- `POST /create-user`: Provision user account (`super-admin`).
- `GET /ai-analysis`: Generate AI profile summary.

### Audit Logs (`/api/v1/logs`)
- `GET /activity`: Retrieve paginated user activity audit logs with search, method, and status filters (`super-admin`, `admin`).
- `DELETE /clear`: Clear recorded audit logs (`super-admin`).

---

## 🧪 Database Seeding

To seed initial test data and administrator accounts into MongoDB:
```bash
cd server
npm run seed
```

---



This project is Developed by Mostafa Elfar.
