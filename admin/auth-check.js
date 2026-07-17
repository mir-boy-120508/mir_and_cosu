// 💡 Firebaseのログイン状態を常にチェックする
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("管理者ログイン確認済み:", user.email);
        
        // admin.html にあるパンのリスト描画処理を動かして表示させる
        if (typeof window.renderProducts === "function") {
            window.renderProducts();
        }
    } else {
        console.log("未ログインのため、ログイン画面に移行します。");
        
        // 未ログインなら即座にlogin.html（パスワード画面）にジャンプ
        window.location.href = "login.html";
    }
});
