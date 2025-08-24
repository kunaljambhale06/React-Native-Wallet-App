# 💸Wallet Application 🚀

A full-stack expense tracking app built with **React Native (Expo)** on the frontend and **Express + PostgreSQL (Neon)** on the backend.  
Authentication is handled via **Clerk**, with Redis used for rate limiting.

---

## ✨ Features

- 🔐 **Authentication with email verification** using Clerk  
- 📝 Signup & Login flows with **6-digit email code**  
- 🏠 **Home Screen** showing current balance & past transactions  
- ➕ Add **income or expense** transactions  
- 🔄 **Pull to refresh** transactions from scratch  
- 🗑️ Delete transactions to update balance in real-time  
- 🚪 Logout & return to login screen
- 🧵 Manage **state & navigation** with React Navigation    
- 🛡️ Apply **Rate Limiting** with Express Rate Limiter
---

## .env Setup
### ⚙️ Backend
```bash
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

DATABASE_URL=<your_neon_postgres_connection_url>
```
### 📱Frontend
```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_key>
```

## ⚙️ Run the backend
```bash
cd backend
npm install
npm run dev
```

## 📱 Run the mobile
```bash
cd mobile
npm install
npx expo start
```




