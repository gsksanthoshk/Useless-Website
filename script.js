const btn = document.getElementById("uselessBtn");
const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const loader = document.getElementById("loader");

/* Loader */
window.addEventListener("load",()=>{
    setTimeout(()=>{ loader.style.display="none"; },1500);
});

/* AI Generated Useless Site */
function generateUselessSite(){
    const words1=["fluffy","crazy","dancing","sleepy","flying","confused"];
    const words2=["banana","penguin","robot","cat","potato","unicorn"];
    const random1=words1[Math.floor(Math.random()*words1.length)];
    const random2=words2[Math.floor(Math.random()*words2.length)];
    return `https://www.${random1}${random2}.com`;
}

/* Button Click */
btn.addEventListener("click",()=>{
    clickSound.play();
    btn.innerText="Generating...";
    setTimeout(()=>{
        window.location.href=generateUselessSite();
    },1200);
});

/* Music Toggle */
musicToggle.addEventListener("click",()=>{
    if(bgMusic.paused){
        bgMusic.play();
        musicToggle.innerText="🎵 Music: ON";
    }else{
        bgMusic.pause();
        musicToggle.innerText="🎵 Music: OFF";
    }
});

/* Floating Particles */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particlesArray=[];

class Particle{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.size=Math.random()*3+1;
        this.speedX=Math.random()*1-0.5;
        this.speedY=Math.random()*1-0.5;
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.x<0||this.x>canvas.width) this.speedX*=-1;
        if(this.y<0||this.y>canvas.height) this.speedY*=-1;
    }
    draw(){
        ctx.fillStyle="#ff00cc";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init(){
    for(let i=0;i<100;i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
