function readygame() {
  document.getElementById("selectdog").style.visibility = "hidden";
  document.getElementById("dice-game").style.visibility = "visible";
  document.getElementById("description").innerHTML = "Time for battle!"
  document.getElementById("battle").innerHTML = "exciting, yes";
  document.getElementById("battle").style.fontFamily = "Merienda"
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function shakedice() {
  document.getElementById("dice-game").style.visibility = "hidden";
  document.getElementById("shaking").style.visibility = "visible";
  document.getElementById("description").style.visibility = "hidden";
  document.getElementById("battle").style.visibility = "hidden";
  topFunction();
}

function diceGame() {
  document.getElementById("dice-game").style.visibility = "visible";
  document.getElementById("shaking").style.visibility = "hidden";
  document.getElementById("description").style.visibility = "visible";
  document.getElementById("battle").style.visibility = "visible";


  var playerOneDice = Math.ceil(Math.random()*6);
  var playerTwoDice = Math.ceil(Math.random()*6);

  document.getElementById("player1").src = "images/Blue dice/" + playerOneDice + "diceblue.png";
  document.getElementById("player2").src = "images/Pink dice/" + playerTwoDice + "dicepink.png";

  document.getElementById("description").innerHTML = "wow!"

  if (playerOneDice > playerTwoDice) {
    document.getElementById("player1phoebe").src ="images/Phoebe/phoebejoy.png";
    document.getElementById("player2luna").src ="images/Luna/lunasad.png";
    document.getElementById("player1text").innerHTML = "Phoebe wins!";
    document.getElementById("player2text").innerHTML = "Luna loses!";
    document.getElementById("battle").innerHTML = "Phoebe wins! She farts to celebrate.";
  } else if (playerOneDice < playerTwoDice) {
    document.getElementById("player1phoebe").src ="images/Phoebe/phoebesad.png";
    document.getElementById("player2luna").src ="images/Luna/lunajoy.png";
    document.getElementById("player1text").innerHTML = "Phoebe loses!";
    document.getElementById("player2text").innerHTML = "Luna wins!";
    document.getElementById("battle").innerHTML = "Luna wins! She's terrified and delighted.";
  } else {
    document.getElementById("player1phoebe").src ="images/Phoebe/phoebeconfuse.png";
    document.getElementById("player2luna").src ="images/Luna/lunaconfuse.png";
    document.getElementById("player1text").innerHTML = "draw, ew";
    document.getElementById("player2text").innerHTML = "draw, oh no";
    document.getElementById("battle").innerHTML = "Draw. The dogs are confused.";
  }
}
