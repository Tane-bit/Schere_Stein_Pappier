let round = 0;
let playerPunkte = 0;
let computerPunkte = 0;
let computers_choice, players_choice, choices, timeout;


function startGame() {
    document.getElementById("start").innerText = "Triff deine Wahl";
    document.getElementById("result").innerText = "";

    choices = ["stein", "papier", "schere"];
    computers_choice = Math.floor(Math.random() * 3);
    computers_choice = choices[computers_choice];

    round = 0;
    playerPunkte = 0;
    computerPunkte = 0;
    document.getElementById("playerPunkte").innerText = playerPunkte;
    document.getElementById("computerPunkte").innerText = computerPunkte;    
}
function checkInput(playerChoice) {
    if (computers_choice == null) {
        return;
    }
    if (round < 3) {
        players_choice = playerChoice;
        choices = ["stein", "papier", "schere"];
        computers_choice = Math.floor(Math.random() * 3);
        computers_choice = choices[computers_choice];

        if (computers_choice === "stein") {
            document.getElementById("zwei").src = "./emoji/Alex_Kidd_Rock.png";
        } else if (computers_choice === "papier") {
            document.getElementById("zwei").src = "./emoji/Alex_Kidd_Paper.png";
        } else if (computers_choice === "schere") {
            document.getElementById("zwei").src = "./emoji/Alex_Kidd_Scissor.png";
        }

        if (players_choice === "stein") {
            document.getElementById("eins").src = "./emoji/Alex_Kidd_Rock.png";
        } else if (players_choice === "papier") {
            document.getElementById("eins").src = "./emoji/Alex_Kidd_Paper.png";
        } else if (players_choice === "schere") {
            document.getElementById("eins").src = "./emoji/Alex_Kidd_Scissor.png";
        }
        
        let result = "";

        if (players_choice === computers_choice) {
            result = "Unentschieden!";
        } else if (
            (players_choice === "stein" && computers_choice === "schere") ||
            (players_choice === "pappier" && computers_choice === "stein") ||
            (players_choice === "schere" && computers_choice === "pappier")
        ) {
            round += 1;
            result = `Runde ${round}: Gewinner !`;
            playerPunkte++;
            
        } else {
            round += 1;
            result = `Runde ${round}: Verlierer !`;
            computerPunkte++;
        }
        setTimeout(() => {
            document.getElementById("eins").src = "./emoji/Alex_Kidd_Dance.gif";
            document.getElementById("zwei").src = "./emoji/Alex_Kidd_Dance.gif";
            result = ""
        }, 2000);

        document.getElementById("playerPunkte").innerText = playerPunkte;
        document.getElementById("computerPunkte").innerText = computerPunkte;

        document.getElementById("result").innerText = result;
        } else {
            if (playerPunkte > computerPunkte) {
            document.getElementById("result").innerText = "Glückwunsch. Du hast das Spiel gewonnen.";

            }else {
            document.getElementById("result").innerText = "Du hast gegen den Computer verloren.";
            }
            document.getElementById("zwei").src = "./emoji/Alex_Kidd_Dance.gif";
            document.getElementById("eins").src = "./emoji/Alex_Kidd_Dance.gif";
        }
    } 
    document.getElementById("start").innerText = "Starte das Spiel mit einem Klick hier";

document.getElementById("stein").onclick = function() { checkInput("stein"); };
document.getElementById("papier").onclick = function() { checkInput("papier"); };
document.getElementById("schere").onclick = function() { checkInput("schere"); };