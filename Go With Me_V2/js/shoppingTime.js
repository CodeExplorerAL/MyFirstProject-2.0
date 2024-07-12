// 4-1_開團商品_倒計時

const endTimes = [
    new Date('July 10, 2024 16:20:00'),
    new Date('July 11, 2024 16:20:00'),
    new Date('July 12, 2024 18:30:00'),
    new Date('July 13, 2024 12:30:00'),
    new Date('July 15, 2024 15:30:00'),
    new Date('July 19, 2024 10:00:00'),
    new Date('July 20, 2024 12:00:00'),
    new Date('July 25, 2024 09:45:00'),
];


function updateCountdown() {
    for (let i = 0; i < endTimes.length; i++) {
    const now = new Date();
    const difference = endTimes[i] - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById(`countdown${i + 1}`);
    const productCard = countdownElement.closest('.product-card');

    if (difference > 0) {
        if (days > 0) {
        countdownElement.innerHTML = `${days}天 ${hours}小時`;
        } else if (hours > 0) {
        countdownElement.innerHTML = `${hours}小時 ${minutes}分鐘`;
        } else {
        countdownElement.innerHTML = `${minutes}分鐘 ${seconds}秒`;
        }
    } else {
        countdownElement.innerHTML = '已結束';
        productCard.classList.add('expired');
    }
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();