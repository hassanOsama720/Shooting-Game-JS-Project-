let timeOut = false;

export function flyBird(obj,timers,intervalTime){
    setTimeout(()=>{
        obj.birdObj.classList.remove("hidden");
        obj.moveBird(intervalTime);
        if(timeOut == false){
            flyBird(obj,timers,intervalTime)
        }
    },timers[Math.floor(Math.random()*timers.length)])
}
export function dropBomb(obj,timers){
    setTimeout(()=>{
        obj.bombObj.classList.remove("hidden");
        obj.moveBomb();
        if(timeOut == false){
            dropBomb(obj,timers)
        }
    },timers[Math.floor(Math.random()*timers.length)])
}

export function clearMyInterval(birds,bomb){
    timeOut = true;
    for (const key in birds) {
        birds[key].position.left = 100;
        birds[key].birdObj.classList.add("visible");
    }
    bomb.position.top = 100;
    bomb.bombObj.classList.add("visible");
}