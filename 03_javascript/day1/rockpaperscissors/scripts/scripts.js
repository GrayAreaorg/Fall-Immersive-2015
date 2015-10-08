function play() {
	console.log('play');

	var user_input = document.getElementById("user-input");
	var user_move = user_input.value;

	var lowercase = user_move.toLowerCase();


	console.log("user_move", lowercase);


	var possible_moves =["rock", "paper", "scissors"];
	var i = Math.floor(Math.random()*3);
	var computer_move = possible_moves[i];
	console.log("computer_move", computer_move);

	var computer_div = document.getElementById("computermove");
	computer_div.innerHTML = "computer chose: " + computer_move;


	var outcome;

	if(computer_move === "rock"){
		if(lowercase === "rock"){
			outcome = "draw";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});

		} else if (lowercase === "paper"){
			outcome = "The user wins!";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"})
						.velocity({rotateZ: 360})
						.velocity('reverse', {delay: 250})
						.velocity({fillGreen: 255});
			$("#scissors").velocity({fill: "#000"});
		} else if (lowercase === "scissors"){
			outcome = "The computer wins!";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"})
			              .velocity({rotateZ: 360})
						  .velocity('reverse', {delay: 250})
						  .velocity({fillRed: 255});
		} else {
			outcome = "unknown";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		}

	} else if (computer_move === "paper"){

		if(lowercase === "rock"){
			outcome = "The computer wins!";
			$("#rock").velocity({fill: "#000"})
			          .velocity({rotateZ: 360})
					  .velocity('reverse', {delay: 250})
			          .velocity({fillRed: 255});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		} else if (lowercase === "paper"){
			outcome = "draw";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		} else if (lowercase === "scissors"){
			outcome = "The user wins!";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"})
			              .velocity({rotateZ: 360})
						  .velocity('reverse', {delay: 250})
			              .velocity({fillGreen: 255});
		} else {
			outcome = "unknown";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		}


	} else if (computer_move === "scissors"){
				if(lowercase === "rock"){
			outcome = "The user wins!";
			$("#rock").velocity({fill: "#000"})
			          .velocity({rotateZ: 360})
					  .velocity('reverse', {delay: 250})
			          .velocity({fillGreen: 255});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		} else if (lowercase === "paper"){
			outcome = "The computer wins!";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"})
			           .velocity({rotateZ: 360})
					   .velocity('reverse', {delay: 250})
					   .velocity({fillRed: 255});
			$("#scissors").velocity({fill: "#000"});
		} else if (lowercase === "scissors"){
			outcome = "draw";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		} else {
			outcome = "unknown";
			$("#rock").velocity({fill: "#000"});
			$("#paper").velocity({fill: "#000"});
			$("#scissors").velocity({fill: "#000"});
		}

	}



	console.log("the outcome of the game is: ", outcome);
	var outcome_div = document.getElementById("outcome");
	outcome_div.innerHTML = outcome;


}