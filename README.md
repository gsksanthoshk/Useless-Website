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
