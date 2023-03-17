var Smin = 15;
var Ssec = 0;
var Bmin = 5;
var Bsec = 0;
var sec = 0;
var min = Smin;
var temp1 = Smin;
var temp2 = Bmin
var Smintxt = document.getElementById("Smin");
var Bmintxt = document.getElementById("Bmin");
var timer = true;
var flag = true;
var count = 1;
var id1;

function start(){
  if(timer){
    flag = false;
    id1 = setInterval(pomodoroClock, 1000);
  }
  else{
    alert("Errorrrrrrrrrrr.....");
  }

  document.getElementById("start").style.display = "none";
  document.getElementById("pause").classList.remove("disable");
  document.getElementById("pause").style.display = "";
}

function pomodoroClock(){
  document.getElementById("Sdec").style.cursor = "not-allowed";
  document.getElementById("Sinc").style.cursor = "not-allowed";
  document.getElementById("Bdec").style.cursor = "not-allowed";
  document.getElementById("Binc").style.cursor = "not-allowed";

  //session Timer countdown
  if(Smin > 0 || Ssec > 0){
    document.getElementById("d1").style.backgroundColor = "rgb(45, 177, 230)";
    document.getElementById("s1").style.color = "rgb(45, 177, 230)";
    document.getElementById("ss").innerText = "Session " + count ;
    if(Ssec != 0){
      sec = Ssec--;
    }
    else if(Smin != 0 && Ssec ==  0){
      Ssec = 59;
      sec = Ssec;
      Smin--;
      min = Smin;
    }
  }

  //break timer countdown
  else if(Smin == 0 && Ssec == 0){
    document.getElementById("d1").style.backgroundColor = "orangered";
    document.getElementById("s1").style.color = "orangered";
    document.getElementById("ss").innerText = "Break " + count;
    min = Bmin;
    if(Bsec != 0){
      Bsec--;
      sec = Bsec
    }
    else if(Bmin != 0 && Bsec == 0){
      Bsec = 59;
      sec = Bsec;
      Bmin--;
      min = Bmin;
    }
  }

  var minStr = min;
  var secStr = sec;
  if (min < 10){
    minStr = "0" + min;
  }
  if (sec < 10){
    secStr = "0" + sec;
  }
  document.getElementById("min").innerText = minStr;
  document.getElementById("sec").innerText = secStr;

  //increment counter
  if(Smin == 0 && Ssec == 0 && Bmin == 0 && Bsec == 0){
    Smin = temp1;
    min = Smin;
    Bmin = temp2;
    count += 1;
  }

}
function stopInterval(){
  clearInterval(id1);
}
  

function pause(){
  timer = true;
  document.getElementById("start").style.display = "";
  document.getElementById("pause").style.display = "none";
  stopInterval();
}
function reset(){
  timer = true;
  flag = true;
  Smin = 15;
  Ssec = 0;
  Bmin = 5;
  Bsec = 0;
  temp1 = Smin;
  temp2 = Bmin;
  Smintxt.innerText = Smin + " min";
  Bmintxt.innerText = Bmin + " min";

  count = 1;

  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";

  document.getElementById("d1").style.backgroundColor = "rgb(45, 177, 230)";
  document.getElementById("s1").style.color = "rgb(45, 177, 230)";
  document.getElementById("ss").innerText = "Session";

  document.getElementById("start").style.display = "";
  document.getElementById("pause").style.display = "none";

  document.getElementById("Sdec").style.cursor = "pointer";
  document.getElementById("Sinc").style.cursor = "pointer";
  document.getElementById("Bdec").style.cursor = "pointer";
  document.getElementById("Binc").style.cursor = "pointer";

  stopInterval();
}
function sessionIncrease(){
  if (flag == true){
    Smin = Smin + 1;
    temp1 = Smin;
    Smintxt.innerText = Smin + " min";
  }
}
function sessionDecrease(){
  if (Smin > 0 & flag == true){
    Smin = Smin - 1;
    temp1 = Smin;
    Smintxt.innerText = Smin + " min";
  }
}
function breakIncrease(){
  if (flag == true){
    Bmin = Bmin + 1;
    temp2 = Bmin;
    Bmintxt.innerText = Bmin + " min";
  }
}
function breakDecrease(){
  if (Bmin > 0 && flag == true){
    Bmin = Bmin - 1;
    temp2 = Bmin;
    Bmintxt.innerText = Bmin + " min";
  }
}