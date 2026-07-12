// Firebase SDK の読み込み (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// コピーしていただいたミール専用のConfig
const firebaseConfig = {
  apiKey: "AIzaSyAnEWphWXdlGamhQPp5i1HFOg6TcDoQqdg",
  authDomain: "mir-and-cosu.firebaseapp.com",
  projectId: "mir-and-cosu",
  storageBucket: "mir-and-cosu.firebasestorage.app",
  messagingSenderId: "597556523101",
  appId: "1:597556523101:web:338d402cd97dbf23c15db4",
  measurementId: "G-294PKSL137"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// 各ページで使えるようにexportしておく
export const auth = getAuth(app);
export const db = getFirestore(app);
