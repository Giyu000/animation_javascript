// .containerクラスを持つ要素を取得
const container = document.querySelector(".container");
// 50個のブロックを作成
for (var i = 0; i <= 50; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block")
    container.appendChild(blocks);
}

// Anime.js を使用しアニメーションを定義
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
// ページをロードした後にアニメーションを開始
window.addEventListener("load", animateBlocks);