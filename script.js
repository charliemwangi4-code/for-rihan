const hearts = document.getElementById("hearts");

let paused = false;

function createHeart(){

    if(paused) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis=["🥹","💕","🫶🏽"];

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    heart.style.fontSize=(20+Math.random()*18)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);
}

setInterval(createHeart,350);

const hero=document.querySelector(".hero");
const intro=document.getElementById("intro");
const start=document.getElementById("startButton");

const typing=document.getElementById("typing");
const typing2=document.getElementById("typing2");
const continueBtn=document.getElementById("continueBtn");

start.onclick=()=>{

    
    createSparkles(); // ✨ ADD THIS

    paused=true;

    hero.style.transition="1s";
    hero.style.opacity="0";

    document.body.classList.add("screenFade"); // 🌸 ADD THIS

    setTimeout(()=>{

        hero.style.display="none";

        intro.classList.remove("hidden");

        requestAnimationFrame(()=>{
            intro.classList.add("show");
        });

        typeText(
            "Hi babyyyy RayRay 🥹💕",
            typing,
            ()=>{
                typeText(
                    "Welcome to our little world...",
                    typing2,
                    ()=>{
                        continueBtn.style.display="inline-block";

                        setTimeout(()=>{
                            continueBtn.classList.add("appear");
                        },100);
                    }
                );
            }
        );

    },1000);

};
function typeText(text,element,callback){

    let i=0;

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(callback) callback();

        }

    },65);

}
function createSparkles(){

    for(let i=0;i<25;i++){

        const sparkle=document.createElement("div");

        sparkle.innerHTML="✨";
        sparkle.className="sparkle";

        sparkle.style.left="50%";
        sparkle.style.top="50%";

        sparkle.style.setProperty("--x",Math.random()*400-200+"px");
        sparkle.style.setProperty("--y",Math.random()*400-200+"px");

        document.body.appendChild(sparkle);


        setTimeout(()=>{
            sparkle.remove();
        },1000);

    }

}
