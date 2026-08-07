const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = ["🥹","💕","🫶🏽"];

heart.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];
    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration =
    (4+Math.random()*4)+"s";

    heart.style.fontSize =
    (20+Math.random()*18)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,350);
