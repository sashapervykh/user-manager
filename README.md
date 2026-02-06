# USER MANAGER APP

User Management App
A full-stack web application for user management with authentication, authorization, and email verification. Built with React, Express, PostgreSQL, and deployed on Vercel (frontend) and Render (backend).

🎯 Task Requirements Implemented
✅ Core Features

- User Registration & Authentication with JWT tokens
- Email Verification sent asynchronously after registration
- Admin Panel with user management table
- Multi-user Operations (Block/Unblock/Delete multiple users)
- Role-based Access Control (Authenticated users only)

✅ Technical Requirements

- Unique Database Index on email column (enforced at database level)
- User Status Management (Active/Blocked/Unverified)
- Hard Delete (users are permanently deleted, not marked)
- Responsive Design works on desktop and mobile
- No Buttons in Table Rows (uses toolbar for actions)

🏗️ Architecture
Frontend (React + TypeScript)

Framework: React 18 with Vite
UI Library: Ant Design + Bootstrap 5
State Management: React Context + Custom Hooks
Routing: React Router DOM v6
HTTP Client: Fetch API with custom wrapper
Architecture: Feature-Sliced Design (FSD)

Backend (Express + TypeScript)

Framework: Express.js
Database: PostgreSQL with pg driver
Authentication: JWT tokens with bcrypt hashing
Email Service: Gmail API
Error Handling: Custom error classes with middleware

Database (PostgreSQL)

🚀 Deployment
[Live Application](https://user-manager-gamma-gilt.vercel.app)

Environment Variables
See .env.example files in both frontend and backend folders for required configuration.
