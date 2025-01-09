console.log("Program started!");



function getHumanChoice() {
    const text = document.createElement("h1");
    text.textContent = "Enter your choice!";
    const rockbtn = document.createElement("button");
    const paperbtn = document.createElement("button");
    const scissorsbtn = document.createElement("button");
    rockbtn.textContent = "ROCK";
    paperbtn.textContent = "PAPER";
    scissorsbtn.textContent = "SCISSORS";
    container.appendChild(text);
    container.appendChild(rockbtn);
    container.appendChild(paperbtn);
    container.appendChild(scissorsbtn);

    rockbtn.addEventListener("click", () => {
        let humanchoice="ROCK"
        playRound(humanchoice);
    });
    paperbtn.addEventListener("click", () => {
        let humanchoice="PAPER"
        playRound(humanchoice);
    });
    scissorsbtn.addEventListener("click", () => {
        let humanchoice="SCISSORS"
        playRound(humanchoice);
    });
    
}

function playRound(humanchoice) {
    console.log(`Human chooses ${humanchoice}`);
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

    let humanscore = 0;
    let computerscore = 0;

    if (humanchoice == "ROCK" && computerchoice == "SCISSORS") {
        humanscore += 1;
        console.log("Human wins!");
    }
    else if (humanchoice == "ROCK" && computerchoice == "PAPER") {
        computerscore += 1;
        console.log("Computer wins!");
    }
    else if (humanchoice == "ROCK" && computerchoice == "ROCK") {
        console.log("Game Tied!");
    }
    else if (humanchoice == "PAPER" && computerchoice == "ROCK") {
        humanscore += 1;
        console.log("Human wins!");
    }
    else if (humanchoice == "PAPER" && computerchoice == "SCISSORS") {
        computerscore += 1;
        console.log("Computer wins!");
    }
    else if (humanchoice == "PAPER" && computerchoice == "PAPER") {
        console.log("Game Tied!");
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "ROCK") {
        computerscore += 1;
        console.log("Computer wins!");
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "PAPER") {
        humanscore += 1;
        console.log("Human wins!");
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "SCISSORS") {
        console.log("Game Tied!");
    }
    else {
        console.log("Error");
    }
    
    
}
getHumanChoice();


