import { initializeApp, getApps } from "firebase/app";

// 🔥 Apna config yaha paste karo (Firebase console se)
const firebaseConfig = {
  apiKey: "AIzaSyBB-yIhd0HWB0EfVq5M59gPd6wRXwwsRHc",
  authDomain: "portfolio-contact-a995e.firebaseapp.com",
  projectId: "portfolio-contact-a995e", // 👈 IMPORTANT (same hona chahiye)
  storageBucket: "portfolio-contact-a995e.firebasestorage.app",
  messagingSenderId: "711285983670",
  appId: "1:711285983670:web:d228c4f92ed548d6bc5917"
};

// 🔥 Duplicate init se bachne ke liye (best practice)
const app = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApps()[0];

// 🔍 Debug ke liye (optional but useful)
console.log("Firebase Project 👉", app.options.projectId);

export default app;