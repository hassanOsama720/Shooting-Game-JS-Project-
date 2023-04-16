let goButton = document.querySelector("button");
let playerNameBox = document.querySelector("input");
let warning = document.querySelector(".warning")
const cursorAim = document.querySelector('.aim');
let soundTrack = new Audio("Sound/index.mp3");
let played = false




const moveCursor = (e)=> {
    const mouseY = e.y;
    const mouseX = e.x;
    
    cursorAim.style.transform = `translate3d(${mouseX-20}px, ${mouseY-20}px, 0)`;
    
}

window.addEventListener('mousemove', moveCursor)
window.addEventListener('mousedown', ()=>{
    if(played == false){
        soundTrack.play();
        soundTrack.loop = true;
        played = true

    }
})

soundTrack.play();
soundTrack.loop = true;


goButton.addEventListener("click",()=>{
    if(playerNameBox.value == ""){
        warning.classList.remove("hidden")
    }
    else{
        window.localStorage.setItem('playerName',playerNameBox.value);
        location.href = 'game.html';
    }
})