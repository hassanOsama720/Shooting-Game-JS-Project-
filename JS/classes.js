import { birds,bomb } from "./game.js";



let bombSound = new Audio("Sound/bomb.mp3");


export let score = 0;
export let kills = 0;
let scoreEle = document.querySelector(".score span");
let killsEle = document.querySelector(".kills span");

class Bird{
    #birdObj
    constructor(){
        this.position = {};
        this.position.left = -30;
        this.position.top = Math.floor(Math.random()*85);
        this.#birdObj = document.createElement("img");
        this.#birdObj.style.position = "absolute";
        this.#birdObj.style.left = this.position.left + "%";
        this.#birdObj.style.top = this.position.top + "%";
        this.#birdObj.addEventListener("click",()=>{this.birdShot()})
        
    }
    birdShot(){
        this.#birdObj.classList.add("hidden");
        score+=5
        kills++
        killsEle.innerText = kills;
        scoreEle.innerText = score;
    }
    get birdObj(){return this.#birdObj;}   
    moveBird(intervalTime){
        this.myInterval = setInterval(()=>{
            if((this.position.left+this.width) < 120){
                this.position.left+=1;
            }
            else{
                clearInterval(this.myInterval);
                this.position.left = -30;
                this.position.top = Math.floor(Math.random()*85);
                this.#birdObj.style.top = this.position.top + "%";
            }
            this.#birdObj.style.left = this.position.left + "%";
        },intervalTime)
    }
}

export class GreenBird extends Bird{
    constructor(){
        super()
        this.width = 30
        this.height = 25
        this.birdObj.style.width = this.width + "%";
        this.birdObj.style.height = this.height + "%";
        this.birdObj.src = "images/greenBird.gif";
        document.body.append(this.birdObj);
    }
}
export class BlueBird extends Bird{
    constructor(){
        super()
        this.width = 20
        this.height = 17
        this.birdObj.style.width = this.width + "%";
        this.birdObj.style.height = this.height + "%";
        this.birdObj.src = "images/blueBird.gif";
        document.body.append(this.birdObj);
    }
    birdShot(){
        this.birdObj.classList.add("hidden");
        score+=10
        kills++
        killsEle.innerText = kills;
        scoreEle.innerText = score;
    }
}
export class RedBird extends Bird{
    constructor(){
        super()
        this.width = 20
        this.height = 20
        this.birdObj.style.width = this.width + "%";
        this.birdObj.style.height = this.height + "%";
        this.birdObj.src = "images/redBird.gif";
        document.body.append(this.birdObj);
    }
    birdShot(){
        this.birdObj.classList.add("hidden");
        score-=10
        scoreEle.innerText = score;
    }
}

export class Bomb{
    #bombObj
    constructor(){
        this.position = {};
        this.position.top = -30;
        this.position.left = Math.floor(Math.random()*85);
        this.#bombObj = document.createElement("img");
        this.#bombObj.style.position = "absolute";
        this.#bombObj.style.left = this.position.left + "%";
        this.#bombObj.style.top = this.position.top + "%";
        this.#bombObj.addEventListener("click",this.bombed)
        

        this.width = 15
        this.height = 15
        this.#bombObj.style.width = this.width + "%";
        this.#bombObj.style.height = this.height + "%";
        this.#bombObj.src = "images/bomb.gif";
        document.body.append(this.#bombObj);
    }
    bombed(){
        bombSound.play();
        bomb.bombObj.classList.add("hidden");
        for (const key in birds) {
            if((birds[key].position.left + birds[key].width) > (bomb.position.left - 15) && birds[key].position.left < (bomb.position.left + 30) 
            && (birds[key].position.top + birds[key].height) > (bomb.position.top -15) && birds[key].position.top < (bomb.position.top + 30)){
                birds[key].birdShot();
            }
        }
    }
    get bombObj(){return this.#bombObj;}
    moveBomb(){
        this.myInterval = setInterval(()=>{
            if((this.position.top+this.height) < 100){
                this.position.top+=1;
            }
            else{
                clearInterval(this.myInterval);
                this.position.top = -30;
                this.position.left = Math.floor(Math.random()*85);
                this.#bombObj.style.left = this.position.left + "%";
            }
            this.#bombObj.style.top = this.position.top + "%";
        },20)
    }
}


