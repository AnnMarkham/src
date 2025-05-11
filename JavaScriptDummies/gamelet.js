/*Starting Point for Writing Games
Author: Chris Minnick
Version 1.0

Instructions:
Include gamelet.js in an HTML document containing
an element with an id of 'ball'
The script will detect when the left or right arrow key is pressed and will move the ball element accordingly. 
 listens for keydown events,checks to see if key ways left or rigt arrow and moves the cursor acordingly.*/

const ball = document.getElementById('ball');
document.addEventListener('keydown',handleKeyPress);
let position = 0  // Initial horizontal position in pixels

// Listen for keydown events
function handleKeyPress(event){
    const step= 10;// Pixels to move per key press

if (event.key ==='ArrowRight'){
    position +=step;
}
if(event.key ==='ArrowLeft'){
 position -=step;
}
ball.style.left = position +'px';
}
document.addEventListener('keydown',handleKeyPress);




