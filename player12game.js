var p1n = prompt("enter name of 1st player");
var p2n = prompt("enter name of 2nd player");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
name1.textContent = p1n;
name2.textContent = p2n;
p1Button.addEventListener("click", function () {
	if (gameOver == false) {                 //also if(!gameOver)//
		p1Score++;
		if (p1Score == winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;


			name1.classList.add("winner");
			name2.classList.add("loser");

			// alert( p1n +" win's");	    
		}
		p1Display.textContent = p1Score;

	}
});

p2Button.addEventListener("click", function () {
	if (gameOver == false) {
		p2Score++;
		if (p2Score == winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;


			name2.classList.add("winner");
			name1.classList.add("loser");

			// alert( p2n +" win's");	

		}
		p2Display.textContent = p2Score;
	}
});

function reset() {
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;       //because gameover is still true
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	name1.classList.remove("winner");
	name2.classList.remove("winner");
	name1.classList.remove("loser");
	name2.classList.remove("loser");
}

resetButton.addEventListener("click", function () {
	reset();
});

numInput.addEventListener("change", function () {
	winningScoreDisplay.textContent = this.value;
	winningScore = this.value;
	reset();
});