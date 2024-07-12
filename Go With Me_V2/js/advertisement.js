//  1-2_頂端列_文字宣傳廣告
const texts = [
"📣 ～賀～新店開幕 全店滿千折百，另送購物袋",
"📣 今日特惠商品：鮭魚 1公斤$499",
"📣 加入會員 立即領優惠9折券",
];
let currentIndex = 0;
const textElement = document.getElementById("advertisementText");

function updateAdvertisementText() {
textElement.style.opacity = "0"; // 淡出效果
setTimeout(() => {
    textElement.textContent = texts[currentIndex];
    textElement.style.opacity = "1"; // 淡入效果
    currentIndex = (currentIndex + 1) % texts.length;
}, 2000);
}

updateAdvertisementText();
setInterval(updateAdvertisementText, 5000); // 每5秒更換一次文字
