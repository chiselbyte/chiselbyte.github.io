import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4mIgTAWy97HH4smFV5-2PxK1tMtQXpMw",
  authDomain: "gym-training-app-f84a2.firebaseapp.com",
  projectId: "gym-training-app-f84a2",
  storageBucket: "gym-training-app-f84a2.firebasestorage.app",
  messagingSenderId: "188999264627",
  appId: "1:188999264627:web:bfa182efd35e5d4192fd06"
};

// Ensure we don't re-initialize if already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const db = getFirestore(app);

export { db };