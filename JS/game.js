import { BlueBird,GreenBird,RedBird,Bomb,kills } from "./classes.js";
import { flyBird,dropBomb,clearMyInterval } from "./functions.js";

let greenTimers = [4563,5123,5632,6213,6631,7189,7783,8342,8796]
let blueTimers = [8342,8796,9531,10754,12642,15784]
let bombTimers = [15000,20000,25000,22000,30000]
let timeLimitInterval;



let soundTrack = new Audio("Sound/index.mp3");
let soundTrack2 = new Audio("Sound/main.mp3");
let winSound = new Audio("Sound/win.mp3");
let loseSound = new Audio("Sound/lose.mp3");
let shootSound = new Audio("Sound/shoot.mp3");
let birdSound = new Audio("Sound/birds.wav");



const startButton = document.querySelector(".startMessage button");
const againButton = document.querySelectorAll(".againButton");
const homeButtons = document.querySelectorAll(".home");
const startMessage = document.querySelector(".startMessage");
const winMessage = document.querySelector(".winMessage");
const loseMessage = document.querySelector(".loseMessage");
const timeLimitEle = document.querySelector(".limit span");
const nameEle = document.querySelector(".info span");
const cursorAim = document.querySelector('.aim');


const moveCursor = (e)=> {
  const mouseY = e.y;
  const mouseX = e.x;
   
  cursorAim.style.transform = `translate3d(${mouseX-20}px, ${mouseY-20}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)



//-----------------------------------------------------------------------------------------

soundTrack.play();
soundTrack.loop = true;

window.onmousedown = ()=>{
    shootSound.play();
}

export let birds = {
    bird : new GreenBird(),
    bird2 : new GreenBird(),
    bird3 : new GreenBird(),
    bird4 : new GreenBird(),
    bird5 : new RedBird(),
    bird6 : new RedBird(),
    bird7 : new RedBird(),
    bird8 : new RedBird(),
    bird9 : new BlueBird(),
    bird10 : new BlueBird(),
}
export let bomb = new Bomb;

nameEle.innerText = window.localStorage.getItem('playerName')


againButton[0].addEventListener("click",()=>{
    location.reload()
})
againButton[1].addEventListener("click",()=>{
    location.reload()
})

for (let i = 0; i < 3; i++) {
    homeButtons[i].addEventListener("click",()=>{
        location.href = "index.html"
    })
    
}

//----------------------------------------------------------------------------------------

startButton.addEventListener("click",()=>{
    soundTrack.pause();
    soundTrack2.play();
    birdSound.play();
    birdSound.loop = true;
    soundTrack2.loop = true;
    let counter = 60;
    startMessage.classList.add("hidden");
    setTimeout(()=>{
        timeLimitEle.innerText = " 00 : 00"
        clearInterval(timeLimitInterval);
        clearMyInterval(birds,bomb);
        if(kills > 24){
            winMessage.classList.remove("hidden")
            winSound.play();
            birdSound.pause();
        }
        else{
            loseMessage.classList.remove("hidden")
            loseSound.play();
            birdSound.pause();
        }
    },60000)
    timeLimitInterval = setInterval(()=>{
        counter--
        timeLimitEle.innerText = " 00 : "+counter
    },1000)



    flyBird(birds.bird,greenTimers,40)
    flyBird(birds.bird2,greenTimers,40)
    flyBird(birds.bird3,greenTimers,40)
    flyBird(birds.bird4,greenTimers,40)
    flyBird(birds.bird5,greenTimers,40)
    flyBird(birds.bird6,greenTimers,40)
    flyBird(birds.bird7,greenTimers,40)
    flyBird(birds.bird8,greenTimers,40)
    flyBird(birds.bird9,blueTimers,20)
    flyBird(birds.bird10,blueTimers,20)
    dropBomb(bomb,bombTimers);
})

