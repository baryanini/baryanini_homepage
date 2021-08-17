function init() {
  var ctx = tablet.getContext('2d');
  var paint = false;

  tablet.addEventListener("mousedown", Down);
  tablet.addEventListener("mouseup", Up);
  tablet.addEventListener("mousemove", Move);

  function Down(e) {
    paint = true;
    ctx.beginPath();
    ctx.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  }

  function Up(e) {
    paint = false;
    ctx.closePath();
  }

  function Move(e) {
    if (paint == true) {
      ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      ctx.stroke();
    }
  }

  document.querySelector('form.canvas-attrs').addEventListener('change', setStyle);
  function setStyle() {
    ctx.strokeStyle = this.strokeStyle.value;
    ctx.lineWidth = this.lineWidth.value;
  }
}
init();
