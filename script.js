const demo = document.getElementById("demo");

let playTime = Number.parseInt(prompt("How many time You want to play :"));

function main() {
    let wins = 0;
    let losses = 0;
    let draw = 0;

    for (let i = 0; i < playTime; i++) {
        let UserInput = "";
        while (UserInput !== "w" && UserInput !== "s" && UserInput !== "g") {
            UserInput = prompt(`Which you want to selected : 
            1. Water for  'W'    
            2. Snake for  'S'    
            3. Gun for    'G'` );
            UserInput = UserInput.toLowerCase();
            if (UserInput !== "w" && UserInput !== "s" && UserInput !== "g") {
                alert("Invalid input. Please enter 'W', 'S', or 'G'");
            }
        }

        let ComputerInput;

        let number = Math.floor(Math.random() * 100) + 1;

        if (number < 33) {
            ComputerInput = "w";
        } else if (number > 33 && number < 66) {
            ComputerInput = "s";
        } else if (number > 66 && number < 100) {
            ComputerInput = "g";
        }

        let result = GameAction(UserInput, ComputerInput);



        if (result === 1) {
            wins++;
            alert("You won!");
            console.log("You won!")
        } else if (result === -1) {
            losses++;
            alert("You lost.");
            console.log("You lost.")
        } else {
            draw++;
            alert("It's a Draw.");
            console.log("It's a Draw.")
        }
        alert(`Computer Input = ${ComputerInput}   &&   User Input = ${UserInput}`);
    }

    demo.innerHTML = `Final score: Wins: ${wins}, Losses: ${losses}, Draw: ${draw}`;
}

main();

function GameAction(user, computer) {

    if (user === computer) {
        return 0;
    }

    if (user === "s" && computer === "w") {
        return 1;
    } else if (user === "w" && computer === "s") {
        return -1;
    }

    if (user === "g" && computer === "s") {
        return 1;
    } else if (user === "s" && computer === "g") {
        return -1;
    }

    if (user === "w" && computer === "g") {
        return 1;
    } else if (user === "g" && computer === "w") {
        return -1;
    }
}
