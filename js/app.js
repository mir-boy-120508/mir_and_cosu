// Firebase SDK の読み込み (互換性の高いバージョンを指定)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnEWphWXdlGamhQPp5i1HFOg6TcDoQqdg",
  authDomain: "mir-and-cosu.firebaseapp.com",
  projectId: "mir-and-cosu",
  storageBucket: "mir-and-cosu.firebasestorage.app",
  messagingSenderId: "597556523101",
  appId: "1:597556523101:web:338d402cd97dbf23c15db4",
  measurementId: "G-294PKSL137"
};

const app = initializeApp(firebaseConfig);

// 💡 どのHTMLからでも「window.db」や「window.auth」で直接呼べるように仕込みます！
window.auth = getAuth(app);
window.db = getFirestore(app);
