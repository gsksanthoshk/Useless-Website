<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ultimate Useless Web</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Particles -->
<canvas id="particles"></canvas>

<!-- Loader -->
<div id="loader">
    <div class="spinner"></div>
</div>

<div class="container">
    <h1 class="neon">
        TAKE ME <br>
        <span>TO ANOTHER</span> <br>
        USELESS <br>
        WEBSITE
    </h1>

    <button id="uselessBtn">PLEASE</button>

    <div class="controls">
        <button id="musicToggle">🎵 Music: OFF</button>
    </div>
</div>

<audio id="clickSound">
    <source src="https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3">
</audio>

<audio id="bgMusic" loop>
    <source src="https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3">
</audio>

<script src="script.js"></script>
</body>
</html>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    height:100vh;
    background:#0f0f1a;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
}

/* Canvas background */
#particles{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
}

/* Loader */
#loader{
    position:fixed;
    width:100%;
    height:100%;
    background:#0f0f1a;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
}

.spinner{
    width:60px;
    height:60px;
    border:6px solid #222;
    border-top:6px solid #ff00cc;
    border-radius:50%;
    animation:spin 1s linear infinite;
}

@keyframes spin{
    100%{transform:rotate(360deg);}
}

.container{
    text-align:center;
    backdrop-filter:blur(15px);
    padding:40px;
    border-radius:20px;
    background:rgba(255,255,255,0.05);
}

/* Neon Glow Text */
.neon{
    font-size:50px;
    text-shadow:
        0 0 5px #ff00cc,
        0 0 10px #ff00cc,
        0 0 20px #ff00cc,
        0 0 40px #ff00cc;
    animation:flicker 2s infinite alternate;
}

@keyframes flicker{
    from{opacity:1;}
    to{opacity:0.8;}
}

.neon span{
    font-size:18px;
    letter-spacing:4px;
    color:#00f7ff;
}

/* Button */
button{
    margin-top:30px;
    padding:15px 40px;
    border:none;
    border-radius:50px;
    font-size:18px;
    cursor:pointer;
    background:linear-gradient(45deg,#ff00cc,#3333ff);
    color:white;
    position:relative;
    overflow:hidden;
}

/* Ripple Effect */
button::after{
    content:"";
    position:absolute;
    background:rgba(255,255,255,0.5);
    width:10px;
    height:10px;
    border-radius:50%;
    transform:scale(1);
    opacity:0;
    pointer-events:none;
}

button:active::after{
    animation:ripple 0.6s linear;
}

@keyframes ripple{
    from{transform:scale(1);opacity:0.6;}
    to{transform:scale(30);opacity:0;}
}

.controls{
    margin-top:20px;
}

/* Mobile */
@media(max-width:600px){
    .neon{font-size:32px;}
    button{padding:12px 30px;font-size:16px;}
}
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
