// 2-1_導覽列_漢堡收回

// 獲取折疊按鈕和導航內容
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarContent = document.querySelector('.navbar-collapse');
let isNavbarExpanded = false; // 跟蹤導航欄的狀態

// 監聽折疊按鈕的點擊事件
navbarToggler.addEventListener('click', function() {
    isNavbarExpanded = !isNavbarExpanded; // 切換導航欄狀態
});

// 監聽頁面上的點擊事件
document.addEventListener('click', function(event) {
    // 檢查點擊事件是否發生在折疊按鈕之外的區域
    const isClickInsideNavbar = navbarContent.contains(event.target);
    const isClickNavbarToggler = navbarToggler.contains(event.target);
    
    // 如果點擊發生在折疊按鈕之外的區域並且導航欄是展開狀態，則收起導航欄
    if (!isClickInsideNavbar && !isClickNavbarToggler && isNavbarExpanded && window.innerWidth <= 768) {
        navbarToggler.click(); // 模擬點擊折疊按鈕以收起導航欄
        isNavbarExpanded = false; // 更新導航欄狀態
    }
});
