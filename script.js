const hearts = document.getElementById("hearts");

let paused = false;

function createHeart() {

    if (paused) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["🥹", "💕", "🫶🏽"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (20 + Math.random() * 18) + "px";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 350);


const hero = document.querySelector(".hero");
const intro = document.getElementById("intro");
const start = document.getElementById("startButton");

const typing = document.getElementById("typing");
const typing2 = document.getElementById("typing2");

const continueBtn = document.getElementById("continueBtn");


start.onclick = () => {

    start.style.transform = "scale(.88)";

    paused = true;

    hero.style.transition = "1s";
    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        intro.classList.remove("hidden");

        requestAnimationFrame(() => {
            intro.classList.add("show");
        });

        typeText(
            "Hi babyyyy RayRay 🥹💕",
            typing,
            () => {

                typeText(
                    "Welcome to our little world...",
                    typing2,
                    () => {

                        continueBtn.classList.add("appear");

                    }
                );

            }
        );

    }, 1000);
};


function typeText(text, element, callback) {

    let i = 0;

    element.innerHTML = "";

    const timer = setInterval(() => {

        element.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

            if (callback) callback();

        }

    }, 65);
}
const chapter1 = document.getElementById("chapter1");

continueBtn.onclick = () => {

    intro.classList.remove("show");

    setTimeout(() => {

        intro.classList.add("hidden");

        chapter1.classList.remove("hidden");

        requestAnimationFrame(() => {
            chapter1.classList.add("show");
        });

    }, 800);

};
const storyPage = document.getElementById("storyPage");

nextButton.onclick = () => {

    chapter1.classList.remove("show");

    setTimeout(() => {

        chapter1.classList.add("hidden");

        storyPage.classList.remove("hidden");

        requestAnimationFrame(() => {
            storyPage.classList.add("show");
        });

    }, 800);

};
const chapter2 = document.getElementById("chapter2");
const chapter3 = document.getElementById("chapter3");

const storyChapter1 = document.getElementById("storyChapter1");

const storyNext1 = document.getElementById("storyNext1");
const storyNext2 = document.getElementById("storyNext2");

storyNext1.onclick = () => {

    storyChapter1.classList.add("hidden");
    chapter2.classList.remove("hidden");

    requestAnimationFrame(() => {
        chapter2.classList.add("show");
    });

};

storyNext2.onclick = () => {

    chapter2.classList.add("hidden");
    chapter3.classList.remove("hidden");

    requestAnimationFrame(() => {
        chapter3.classList.add("show");
    });

};
const videoPage = document.getElementById("videoPage");
const storyNext3 = document.getElementById("storyNext3");

storyNext3.onclick = () => {

    storyPage.classList.remove("show");

    setTimeout(() => {

        storyPage.classList.add("hidden");

        videoPage.classList.remove("hidden");

        requestAnimationFrame(() => {
            videoPage.classList.add("show");
        });

    }, 800);
};
const surprisePage = document.getElementById("surprisePage");
const surpriseNext = document.getElementById("surpriseNext");
const songPage = document.getElementById("songPage");

videoNext.onclick = () => {

    videoPage.classList.remove("show");

    setTimeout(() => {
        videoPage.classList.add("hidden");

        surprisePage.classList.remove("hidden");

        requestAnimationFrame(() => {
            surprisePage.classList.add("show");
        });

    }, 800);

};

surpriseNext.onclick = () => {

    surprisePage.classList.remove("show");

    setTimeout(() => {
        surprisePage.classList.add("hidden");

        songPage.classList.remove("hidden");

        requestAnimationFrame(() => {
            songPage.classList.add("show");
        });

    }, 800);

};
