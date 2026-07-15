// Firebaseの初期化（他のファイルで既に初期化されている場合は重複を避ける）
const firebaseConfig = {
    apiKey: "AIzaSyAnEWphWXdlGamhQPp5i1HFOg6TcDoQqdg",
    authDomain: "mir-and-cosu.firebaseapp.com",
    projectId: "mir-and-cosu"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// ユーザーがログイン状態か常に監視
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // 未ログインの場合、強制的にログイン画面へ戻す
        window.location.href = "login.html";
    } else {
        console.log("ログイン中の管理者:", user.email);
        // 必要に応じて、ここで「管理者のデータ読み込み処理」などのコールバックを呼び出せます
    }
});
