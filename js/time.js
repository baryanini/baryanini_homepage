function  printTime(){
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var miliSecs = d.getMilliseconds()
  t = document.getElementById('time');
  if(secs<10){
    secs = '0' + secs;
  }
  if(mins<10){
    mins = '0' + mins;
  }
  if(miliSecs<10){
    miliSecs = '00' + miliSecs;
  }else if(miliSecs<100){
    miliSecs = '0' + miliSecs;
  }

  t.innerHTML = hours + ':' + mins + ':' + secs + ':' + miliSecs;
}
setInterval(printTime,0);



