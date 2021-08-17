var box = document.getElementById('square');

var posX = 170;
var posY = 150;

var btnDown = document.getElementById('squareBtnDown');
var btnRight = document.getElementById('squareBtnRight');
var btnLeft = document.getElementById('squareBtnLeft');
var btnUp = document.getElementById('squareBtnUp');

btnDown.onmousedown = down;
btnLeft.onclick = left;
btnRight.onclick = right;
btnUp.onmousedown = up;



function left(){
  if (posX < 10){
    posX=0
  }
  else{
    posX-=10;
    box.style.left=posX+'px';
  }
}
 function right(){
  if (posX > 340){
    posX = 350
  }
  else{
  posX+=10;
  box.style.left=posX+'px';
  }
}
function down(){
  if (posY > 290){
    posY = 300
  }
  else{
    f = setInterval(down, 200);
    posY+=10;
    box.style.top=posY+'px'
    btnDown.onmouseup = clearInterval(f);
  }
}
function up(){
  if (posY < 10){
    posY=0
  }
  else{
  posY-=10;
  box.style.top=posY+'px'
  }
}

function CircCoords(){
  circPosX = Math.round(Math.random()*380);
  circPosY = Math.round(Math.random()*330);
  circle.style.left = circPosX + 'px';
  circle.style.top = circPosY + 'px';
}
function CircCoordsDif(){
  circPosX += Math.round(Math.random()*10 - 5);
  circPosY += Math.round(Math.random()*10 - 5);
  circle.style.left = circPosX + 'px';
  circle.style.top = circPosY + 'px';
  if(circPosY<0){
    circPosY=0
  }else if(circPosY>330){
    circPosY=330
  }else if(circPosX<0){
    circPosX=0
  }else if(circPosX>380){
    circPosX=380
  }
}
CircCoords();


var counter =0;
function isEaten(){
  if(Math.abs(posX-circPosX+15)<=35 && Math.abs(posY-circPosY+15)<=35){
    counter+=1;
    CircCoords();
    var c = document.getElementById('circleCounter');
    c.innerHTML = counter.toString();
  }
}
setInterval(isEaten, 10);
setInterval(CircCoordsDif,400);
