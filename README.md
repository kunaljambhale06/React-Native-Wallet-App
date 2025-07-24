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

---

## 📁 .env Setup

### Backend (`/backend`)

Create an `.env` file inside the `/backend` folder with the following content:

```bash
PORT=5001
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
DATABASE_URL=<your_neon_postgres_connection_url>
```
⚙️ Run the Backend
Make sure you are in the backend folder, then install dependencies and start the server:

bash
Copy
Edit
cd backend
npm install
npm run dev
ℹ️ The backend will run on http://localhost:5001 (or whichever port you set in .env).

📱 Run the Mobile App
Navigate to the mobile folder, install dependencies, and start the Expo development server:

bash
Copy
Edit
cd mobile
npm install
npx expo start
📲 Scan the QR code using the Expo Go app on your phone to run it on a physical device, or launch a simulator if you're on macOS or using Android Studio.

🔄 API & Mobile Integration
Ensure that your mobile app points to the correct backend API URL. If you're using fetch or axios, update the base URL to match your local IP (for example, http://192.168.1.5:5001) instead of localhost, especially when testing on a physical device.

You can usually find your IP with:

bash
Copy
Edit
ipconfig   # on Windows
ifconfig   # on macOS/Linux
