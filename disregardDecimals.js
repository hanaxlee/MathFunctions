var playerOne = prompt("Give a number between 1-6. Decimals disregarded");
var playerOne = Math.floor(parseInt(playerOne));

if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)) {
	window.alert("You cannot follow directions");
}
else {
var playerTwo = prompt("Give a number between 1-6");
if (playerOne == playerTwo) {
window.alert("You win!");
}
else {
window.alert("Player one's answer was " + playerOne);
window.alert("You chose " + playerTwo);
}
}