const blindBox = document.querySelector('.blind-box');
const card = document.querySelector('.card');
const openSound = document.getElementById('openSound');
const audio = document.getElementById('openSound');

// Đặt âm lượng về 50%
audio.volume = 0.2025;
let isCardVisible = false;

blindBox.addEventListener('click', () => {
  isCardVisible = !isCardVisible;

  if (isCardVisible) {
    card.style.opacity = 1;
    openSound.play(); // Phát âm thanh khi mở
  } else {
    card.style.opacity = 0;
    openSound.pause(); // Dừng âm thanh khi đóng
    openSound.currentTime = 0; // Đặt lại âm thanh về đầu
  }
});