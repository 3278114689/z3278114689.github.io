// 获取页面上的音乐播放器元素
var musicPlayer = document.getElementById('musicPlayer');

// 获取礼物表情符号元素
var giftEmoji = document.getElementById('giftEmoji');

// 获取彩带和爱心容器
var confettiContainer = document.getElementById('confetti-container');
var heartsContainer = document.getElementById('hearts-container');

// 为礼物表情符号添加点击事件监听器
if (giftEmoji) {
    giftEmoji.addEventListener('click', function() {
        // 点击礼物表情符号时播放音乐
        musicPlayer.play();
        // 播放音乐后开始动画
        startConfetti();
        startHearts();
    });
}

// 彩带动画函数
function startConfetti() {
    // 这里可以添加彩带的 HTML 元素，或者使用 JavaScript 动态创建
    // 例如，创建一些 div 元素代表彩带，并添加到页面中
    for (var i = 0; i < 50; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // 随机动画时长
        confetti.innerHTML = '✨💖'; // 彩带的简单表示
        confettiContainer.appendChild(confetti);
    }
    // 添加 CSS 动画
    confettiContainer.style.display = 'block';
    confettiContainer.style.animation = 'confetti-fall 5s linear 2 forwards';
}

// 爱心动画函数
function startHearts() {
    // 这里可以添加爱心的 HTML 元素，或者使用 JavaScript 动态创建
    // 例如，创建一些 div 元素代表爱心，并添加到页面中
    for (var i = 0; i < 20; i++) {
        var heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // 随机动画时长
        heart.innerHTML = '❤️'; // 爱心的简单表示
        heartsContainer.appendChild(heart);
    }
    // 添加 CSS 动画
    heartsContainer.style.display = 'block';
    heartsContainer.style.animation = 'heart-fall 5s linear 2 forwards';
}

// 添加一些基本的 CSS 动画样式
document.write(`
    <style>
        .confetti {
            position: absolute;
            top: -10vh;
            opacity: 0;
            animation: confetti-fall 5s linear 2 forwards;
        }
        .heart {
            position: absolute;
            top: -10vh;
            opacity: 0;
            animation: heart-fall 5s linear 2 forwards;
        }
        @keyframes confetti-fall {
            to {
                transform: translateY(110vh);
                opacity: 1;
            }
        }
        @keyframes heart-fall {
            to {
                transform: translateY(110vh);
                opacity: 1;
            }
        }
    </style>
`);