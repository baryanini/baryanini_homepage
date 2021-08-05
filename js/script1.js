function randomColor() {
  var c = "#";
  for (var i = 0; i < 6; i++) {
      c += (Math.random() * 16 | 0).toString(16);
  }
  return c;
}

function changeColor(){
  var a = document.getElementById("workplace1").style;
  a.backgroundColor = randomColor();
  console.log( a.backgroundColor);
};

function setBackground(){
  var a = document.getElementById("workplace1").style;
  console.log( a.backgroundColor);
  var body = document.getElementById("body").style;
  console.log( body.backgroundColor);
  body.backgroundColor = a.backgroundColor;
}

function reset(){
  var body = document.getElementById("body").style;
  body.backgroundColor = '#304059' ;
  var a = document.getElementById("workplace1").style;
  a.backgroundColor = '#304059';
}
btn1 = document.getElementById('button-random-1');
btn1.onclick = changeColor;

btn2 = document.getElementById('button-reset-1');
btn2.onclick = reset;
btn3 = document.getElementById('button-change-1');
btn3.onclick = setBackground;
