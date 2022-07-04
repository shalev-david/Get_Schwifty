export class DisplayWinning{
    constructor(){

    }

    Won(game){
        let winningMessage = this.#CreateWinningMessage(game)
    }

    #CreateWinningMessage(game){
        let winningMessage = document.createElement("div");
        winningMessage.className = "won";
        winningMessage.innerHTML = `Congrats! You have won a game of difficulty ${game.difficulty} in ${game.moves} moves`;
        
        winningMessage.appendChild(playerCreation);

        return winningMessage;
    }

    #CreatePlayerInput(){
        let playerCreation = document.createElement("div");
        playerCreation.className = "player-creation-form";

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "name";

        let submitButton = document.createElement("submit");
        submitButton.className("submit");
        submitButton.innerText("Submit");
        
        playerCreation.appendChild(nameInput);
        playerCreation.appendChild(submitButton);
        return playerCreation;        
    }
}