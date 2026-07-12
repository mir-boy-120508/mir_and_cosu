import { auth } from './app.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. ログイン状態の監視（全ページ共通で使う用）
export function checkAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}

// 2. 新規会員登録
export async function registerEmail(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("登録エラー:", error);
        return { success: false, error: error.message };
    }
}

// 3. ログイン
export async function loginEmail(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("ログインエラー:", error);
        return { success: false, error: error.message };
    }
}

// 4. ログアウト
export async function logoutUser() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error("ログアウトエラー:", error);
        return { success: false };
    }
}
