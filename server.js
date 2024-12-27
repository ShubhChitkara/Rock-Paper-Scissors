console.log("Program started!");



function playGame() {
    let humanscore = 0;
    let computerscore = 0;
    for(let i = 0; i < 5; i++){
        function getComputerChoice() {
            let randnum = Math.floor(Math.random() * 3);
            console.log(randnum);
            if (randnum == 0) {
                return "ROCK";
            }
            else if (randnum == 1) {
                return "PAPER";
            }
            else {
                return "SCISSORS";
            }
        }
        let computerchoice = getComputerChoice();
        console.log(`Computer chooses ${computerchoice}`);
        
        function getHumanChoice() {
            let valu = prompt("ROCK or PAPER or SCISSORS");
            return valu;
        }
        let humanchoice = getHumanChoice();
        console.log(`Human chooses ${humanchoice.toUpperCase()}`);
        
    
        function playRound(humanchoice, computerchoice) {
            if (humanchoice.toUpperCase() == "ROCK" && computerchoice.toUpperCase() == "SCISSORS") {
                humanscore += 1;
                console.log("Human wins!");
            }
            else if (humanchoice.toUpperCase() == "ROCK" && computerchoice.toUpperCase() == "PAPER") {
                computerscore += 1;
                console.log("Computer wins!");
            }
            else if (humanchoice.toUpperCase() == "ROCK" && computerchoice.toUpperCase() == "ROCK") {
                console.log("Game Tied!");
            }
            else if (humanchoice.toUpperCase() == "PAPER" && computerchoice.toUpperCase() == "ROCK") {
                humanscore += 1;
                console.log("Human wins!");
            }
            else if (humanchoice.toUpperCase() == "PAPER" && computerchoice.toUpperCase() == "SCISSORS") {
                computerscore += 1;
                console.log("Computer wins!");
            }
            else if (humanchoice.toUpperCase() == "PAPER" && computerchoice.toUpperCase() == "PAPER") {
                console.log("Game Tied!");
            }
            else if (humanchoice.toUpperCase() == "SCISSORS" && computerchoice.toUpperCase() == "ROCK") {
                computerscore += 1;
                console.log("Computer wins!");
            }
            else if (humanchoice.toUpperCase() == "SCISSORS" && computerchoice.toUpperCase() == "PAPER") {
                humanscore += 1;
                console.log("Human wins!");
            }
            else if (humanchoice.toUpperCase() == "SCISSORS" && computerchoice.toUpperCase() == "SCISSORS") {
                console.log("Game Tied!");
            }
            else {
                console.log("Error");
            }
            return humanscore;
            return computerscore;
        }
        playRound(humanchoice,computerchoice);
    }
    if(humanscore>computerscore){
        console.log("Human finally wins!")
    }
    else {
        console.log("Computer finally wins!")
    }

}
playGame()