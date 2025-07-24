# Project Overview

This isn't just a front-end app — it's a complete mobile application with backend integration, authentication, and cloud-based storage.

## ✅ Features

- **Works on iOS & Android** (simulator or real device)
- **Uses your existing React knowledge**
- **No need for Swift, Kotlin, or native modules**

## 📱 App Features Overview

- 🔐 **Authentication with email verification using Clerk**
- 📝 **Signup & Login flows with 6-digit email code**
- 🏠 **Home Screen** that shows your current balance & past transactions
- ➕ **Create Screen** to add income or expense transactions
- 🔄 **Pull to refresh functionality** from scratch
- 🗑️ **Delete transactions** to update balance
- 🚪 **Logout** to navigate back to login screen

## ⚙️ About The Project

- Build and deploy an **Express API** with **PostgreSQL** using **Neon**
- Implement authentication & email verification with **Clerk**
- Build a full mobile app with **React Native & Expo**
- Manage state and navigation using **React Navigation**
- Understand and apply **Rate Limiting** using **Redis**
- Deploy both backend & mobile with cloud-based tools

## 📁 .env Setup

### Backend (`/backend`)

```bash
PORT=5001
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
DATABASE_URL=<your_neon_postgres_connection_url>

## ⚙️ Backend Setup

### Environment Variables

In the `/backend` folder, create an `.env` file with the following variables:

```bash
PORT=5001
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
DATABASE_URL=<your_neon_postgres_connection_url>

## ⚙️ Run the Backend
   ```bash
   cd backend
   npm install
   npm run dev

## 📱 Run the mobile
    ```bash
    cd mobile
    npm install
    npx expo start
    
    




