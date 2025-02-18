function openGift() {
    let giftBox = document.querySelector(".gift-box");
    let heading = document.querySelector("h1");
    let messageBox = document.querySelector(".message-box");

    giftBox.classList.toggle("open");

    if (giftBox.classList.contains("open")) {
        heading.style.opacity = "0"; // Ẩn khi mở hộp
        typeText();
        createConfetti();
    } else {
        heading.style.opacity = "1"; // Hiện lại khi đóng hộp
        document.getElementById("typing-text").innerHTML = ""; // Xóa chữ cũ khi đóng hộp
    }
}

        function createConfetti() {
    for (let i = 0; i < 200; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.width = Math.random() * 6 + 4 + "px";
        confetti.style.height = confetti.style.width;
        
        let color = `hsl(${Math.random() * 360}, 100%, 80%)`; 
        confetti.style.background = color;
        confetti.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`; 
        
        confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
        confetti.style.top = -Math.random() * 100 + "vh";
        document.body.appendChild(confetti);
        
       setTimeout(() => confetti.remove(), 15000);  
       
    }
}


function typeText() {
    let text = "Chúc tất cả những người phụ nữ tuyệt vời một ngày tràn ngập niềm vui, tiếng cười và hạnh phúc! Bạn là những bông hoa rực rỡ nhất, mạnh mẽ nhưng cũng đầy dịu dàng, luôn mang đến sự yêu thương và ấm áp cho thế giới này. Hãy luôn tự tin, tỏa sáng và yêu thương chính mình! Mỗi ngày trôi qua, bạn đều xứng đáng nhận được những điều tuyệt vời nhất.";
    let index = 0;
    let typingText = document.getElementById("typing-text");

   
    typingText.innerHTML = "";
    typingText.classList.add("typing");

   
    if (window.typingInterval) clearInterval(window.typingInterval);

    window.typingInterval = setInterval(() => {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(window.typingInterval);
            typingText.classList.remove("typing"); 
        }
    }, 50);
}