score = 0;
cross = true;

Audio = new Audio('br music.mp3')
setTimeout(() => {
    Audio.play()
}, 1000);
document.onkeydown=function(e){
    console.log("key is: ",e.key)
    if(e.key === "ArrowUp"){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 500);
    }
    if(e.key === "ArrowRight"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.key === "ArrowLeft"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML = "Game Over - Reload to Start";
        obstacle.classList.remove('obstacleani');
        setTimeout(() => {
            Audio.pause()
        }, 100);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 1500);
        
    }
    
}, 10);

function updateScore(score){
    scorecount.innerHTML = "Your Score: " + score;
}