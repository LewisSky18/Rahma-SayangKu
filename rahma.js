// Bikin love jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Tombol interaktif
document.getElementById("forgiveBtn").addEventListener("click", () => {
    alert("Yay! Makasih udah maafin aku 😍💕\nAku janji lebih baik lagi buat kamu!");
});