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
        let humanchoice = "ROCK"
        playRound(humanchoice);
    });
    paperbtn.addEventListener("click", () => {
        let humanchoice = "PAPER"
        playRound(humanchoice);
    });
    scissorsbtn.addEventListener("click", () => {
        let humanchoice = "SCISSORS"
        playRound(humanchoice);
    });

}

function playRound(humanchoice) {
    const divhuman = document.createElement("div");
    divhuman.textContent = `Human chooses ${humanchoice}!`;
    container.appendChild(divhuman);
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
    const divcomputer = document.createElement("div");
    divcomputer.textContent = `Computer chooses ${computerchoice}!`;
    container.appendChild(divcomputer);
    console.log(`Computer chooses ${computerchoice}`);

    let humanscore = 0;
    let computerscore = 0;

    if (humanchoice == "ROCK" && computerchoice == "SCISSORS") {
        humanscore += 1;
        const div = document.createElement("div");
        div.textContent = "Human wins!";
        container.appendChild(div);
    }
    else if (humanchoice == "ROCK" && computerchoice == "PAPER") {
        computerscore += 1;
        const div = document.createElement("div");
        div.textContent = "Computer wins!"
        container.appendChild(div);
    }
    else if (humanchoice == "ROCK" && computerchoice == "ROCK") {
        const div = document.createElement("div");
        div.textContent = "Game Tied!"
        container.appendChild(div);
    }
    else if (humanchoice == "PAPER" && computerchoice == "ROCK") {
        humanscore += 1;
        const div = document.createElement("div");
        div.textContent = "Human wins!";
        container.appendChild(div);
    }
    else if (humanchoice == "PAPER" && computerchoice == "SCISSORS") {
        computerscore += 1;
        const div = document.createElement("div");
        div.textContent = "Computer wins!";
        container.appendChild(div);
    }
    else if (humanchoice == "PAPER" && computerchoice == "PAPER") {
        const div = document.createElement("div");
        div.textContent = "Game Tied!"
        container.appendChild(div);
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "ROCK") {
        const div = document.createElement("div");
        div.textContent = "Computer wins!"
        computerscore += 1;
        container.appendChild(div);
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "PAPER") {
        const div = document.createElement("div");
        div.textContent = "Human wins!"
        humanscore += 1;
        container.appendChild(div);
    }
    else if (humanchoice == "SCISSORS" && computerchoice == "SCISSORS") {
        const div = document.createElement("div");
        div.textContent = "Game Tied!"
        container.appendChild(div);
    }
    else {
        const div = document.createElement("div");
        div.textContent = "ERROR"
        container.appendChild(div);
    }


}
getHumanChoice();


