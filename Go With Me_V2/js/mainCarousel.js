// 3_主輪播圖_開始/暫停

// 獲取 Carousel 元件的實例
var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
  interval: 2000 // 設置自動播放的時間間隔，單位為毫秒
});

// 獲取控制按鈕元素
var pauseButton = document.getElementById('pauseButton');
var playButton = document.getElementById('playButton');

// 設定按鈕狀態的函數
function updateButtonState() {
  if (carousel._isPaused) {
      pauseButton.classList.add('active-carouselButton');
      playButton.classList.remove('active-carouselButton');
  } else {
      playButton.classList.add('active-carouselButton');
      pauseButton.classList.remove('active-carouselButton');
  }
}

// 暫停按鈕點擊事件處理函數
pauseButton.addEventListener('click', function() {
  carousel.pause(); // 暫停輪播
  updateButtonState(); // 更新按鈕狀態
});

// 開始按鈕點擊事件處理函數
playButton.addEventListener('click', function() {
  carousel.cycle(); // 開始輪播
  updateButtonState(); // 更新按鈕狀態
});

// 初始化時更新按鈕狀態
updateButtonState();
