// 5-7_回到頂部

// 當用戶向下滾動20px時，顯示按鈕
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  // 檢查用戶是否向下滾動超過20px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // 顯示按鈕
    document.getElementById("myBtn").style.display = "block";
  } else {
    // 隱藏按鈕
    document.getElementById("myBtn").style.display = "none";
  }
}

// 當用戶點擊按鈕時，回到頁面頂部
function topFunction() {
  document.body.scrollTop = 0; // 對於Safari
  document.documentElement.scrollTop = 0; // 對於Chrome, Firefox, IE 和 Opera
}