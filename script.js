var obj1 = document.getElementsByClassName("start-stop");
var obj2 = document.getElementsByClassName("pause-play");
var obj3 = document.getElementsByClassName("reset-game");
var box = document.getElementById("box");
var outer_box = document.getElementById("game-area");
var scorebox = document.getElementById("score");
initial_height = box.offsetTop;
leftPos = box.offsetLeft;
topPos = box.offsetTop;
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
var end_game_timer=0;
var timer;
check = 0;
var score = 0;
var miss =0;

// funtion to randomly change the position of the box
function random_mover() {
  timer = setInterval(function () {
    box.style.transform = "none";
    var left_change =
      Math.floor(Math.random() * (window.innerWidth - boxWidth - 5)) + "px";
    if (parseInt(left_change) < 3) {
      left_change = parseInt(left_change) + 3 + "px";
    }
    box.style.left = left_change;

    var top_change =
      Math.floor(Math.random() * (outer_box.offsetHeight - boxHeight)) + "px";
    if (parseInt(top_change) < 3) {
      top_change = parseInt(top_change) + 3 + "px";
    }
    box.style.top = top_change;
    check = 0;
  }, 500);
}

// count the score
function score_count() {
  if (check == 0) {
    score = score + 1;
    scorebox.innerHTML = score;
    check = 1;
  }
}

function count_miss(){

}

// start the game
obj1[0].addEventListener("click", function () {
  
    obj2[0].style.display = "inline-block";
    obj3[0].style.display = "inline-block";
    score = 0;
    scorebox.innerHTML = score;
    obj1[0].style.display = "none";
    random_mover();
  
});

// Play and pause the game
obj2[0].addEventListener("click", function () {
  if (obj2[0].id == "pause") {
    obj2[0].id = "play";
    obj2[0].innerHTML = "PLAY";
    clearInterval(timer);
  } else if (obj2[0].id == "play") {
    random_mover();
    obj2[0].id = "pause";
    obj2[0].innerHTML = "PAUSE";
  }
});

// reset the game
obj3[0].addEventListener("click", function () {
  clearInterval(timer);
  score = 0;
  scorebox.innerHTML = score;
  obj2[0].id = "pause";
  obj2[0].style.display = "none";
  obj3[0].style.display = "none";
  obj1[0].style.display = "inline-block";
  box.setAttribute(
    "style",
    "top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);"
  );
});

box.addEventListener("click", function () {
  if (obj2[0].id == "pause") {
    score_count();
  }
});
