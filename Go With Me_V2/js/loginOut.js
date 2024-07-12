// 2-3. 會員登入/登出功能

// 監聽 DOMContentLoaded 事件：
// 當 HTML 文件完成解析後，執行內部的匿名函數。
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");

  // 查找並設置登出按鈕的點擊事件綁定，以及檢查和設置登入狀態。
  if (logoutButton) {
    logoutButton.addEventListener("click", simulateLogout);
  }

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const loginButton = document.querySelector(".btn-success");

  // 根據登入狀態調整按鈕顯示和功能
  if (isLoggedIn === "true") {
    logoutButton.style.display = "inline-block"; // 登出按鈕顯示
    loginButton.textContent = "歡迎回來AL"; // 登入按鈕文字更新
  } else {
    logoutButton.style.display = "none"; // 登出按鈕隱藏
  }
});

// simulateLogin 函數：
// 當登入按鈕被點擊時觸發。
function simulateLogin() {
  const loginButton = document.querySelector(".btn-success");
  const logoutButton = document.getElementById("logoutButton");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // 模擬登入成功
  if (email === "1" && password === "1") {
    sessionStorage.setItem("isLoggedIn", "true"); // 存儲登入狀態
    loginButton.textContent = "歡迎回來EL"; // 登入按鈕文字更新
    logoutButton.style.display = "inline-block"; // 登出按鈕顯示

    const modal = new bootstrap.Modal(document.getElementById("loginModal"));
    modal.hide(); // 隱藏登入模態對話框

    // 導向至指定網址
    window.location.href = "./Go With Me_V2.html";
  } else {
    alert("登入失敗，請檢查帳號密碼！");
  }
}

// simulateLogout 函數：
// 當登出按鈕被點擊時觸發。
function simulateLogout() {
  const loginButton = document.querySelector(".btn-success");
  const logoutButton = document.getElementById("logoutButton");

  sessionStorage.removeItem("isLoggedIn"); // 刪除登入狀態
  loginButton.textContent = "登入/註冊"; // 登入按鈕文字恢復
  logoutButton.style.display = "none"; // 登出按鈕隱藏
}
