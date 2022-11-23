function readygame() {
  document.getElementById("selectdog").style.visibility = "hidden";
  document.getElementById("dice-game").style.visibility = "visible";
  document.getElementById("description").innerHTML = "Time for battle!"
  document.getElementById("battle").innerHTML = "exciting, yes";
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

  var playerOne = Math.ceil(Math.random()*6);
  var playerTwo = Math.ceil(Math.random()*6);

  if (playerOne === 1) {
    document.getElementById("player1").src = "images/Blue dice/onediceblue.png";
  } else if (playerOne === 2) {
    document.getElementById("player1").src = "images/Blue dice/twodiceblue.png";
  } else if (playerOne === 3) {
    document.getElementById("player1").src = "images/Blue dice/threediceblue.png";
  } else if (playerOne === 4) {
    document.getElementById("player1").src = "images/Blue dice/fourdiceblue.png";
  } else if (playerOne === 5) {
    document.getElementById("player1").src = "images/Blue dice/fivediceblue.png";
  } else if (playerOne === 6) {
    document.getElementById("player1").src = "images/Blue dice/sixdiceblue.png";
  }

  if (playerTwo === 1) {
    document.getElementById("player2").src = "images/Pink dice/onedicepink.png";
  } else if (playerTwo === 2) {
    document.getElementById("player2").src = "images/Pink dice/twodicepink.png";
  } else if (playerTwo === 3) {
    document.getElementById("player2").src = "images/Pink dice/threedicepink.png";
  } else if (playerTwo === 4) {
    document.getElementById("player2").src = "images/Pink dice/fourdicepink.png";
  } else if (playerTwo === 5) {
    document.getElementById("player2").src = "images/Pink dice/fivedicepink.png";
  } else if (playerTwo === 6) {
    document.getElementById("player2").src = "images/Pink dice/sixdicepink.png";
  }

  document.getElementById("description").innerHTML = "wow!"

  if (playerOne > playerTwo) {
    document.getElementById("player1phoebe").src ="images/Phoebe/phoebejoy.png";
    document.getElementById("player2luna").src ="images/Luna/lunasad.png";
    document.getElementById("player1text").innerHTML = "Phoebe wins!";
    document.getElementById("player2text").innerHTML = "Luna loses!";
    document.getElementById("battle").innerHTML = "Phoebe wins! She farts to celebrate.";
  } else if (playerOne < playerTwo) {
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
