const container = document.querySelector(".container");
for (var i = 0; i <= 50; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block")
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: ".block",
        translateX: function () {
            return anime.random(-800, 700)
        },
        translateY: function () {
            return anime.random(-500, 500)
        },
        scale: function () {
            return anime.random(1, 5)
        },
        boxShadow: [
            '0 0 0 rgba(0,0,0,0)',
            '10px 10px 50px rgba(0,0,0,0.3)'
        ],
        duration: 3000,
        delay: anime.stagger(20),
        easing: "easeInOutQuad",
        loop: false,
        direction: "alternate"
    });
}
window.addEventListener("load", animateBlocks);