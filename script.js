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

    start.style.transform="scale(.88)";

    paused=true;

    hero.style.transition="1s";
    hero.style.opacity="0";

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

                       continueBtn.classList.add("appear");
    }
);
                        setTimeout(()=>{
                            continueBtn.style.opacity="1";
                        },100);

                    }
                );

            }
        );

    },1000);

};


function typeText(text,element,callback){

    let i=0;

    element.innerHTML="";

    const timer=setInterval(()=>{

        element.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(callback) callback();

        }

    },65);

}
