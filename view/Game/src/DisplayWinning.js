export class DisplayWinning{
    constructor(game){
        this.game = game;
    }

    Won(){
        let winningMessage = this.#CreateWinningMessage()
        document.body.appendChild(winningMessage);
    }

    #CreateWinningMessage(){
        let winningMessage = document.createElement("div");
        winningMessage.className = "won";
        
        winningMessage.appendChild(this.#CreatePlayerInput());

        return winningMessage;
    }

    #CreatePlayerInput(){

        let playerCreation = document.createElement("div");
        playerCreation.className = "player-creation-form";

        let playerScore = document.createElement("span");
        playerScore.className = "score";
        playerScore.innerHTML = `Congrats! You have won a game of difficulty ${this.game.difficulty} in ${this.game.moves} moves`;


        let nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "name";

        let submitButton = document.createElement("button");
        submitButton.className = "submitPlayer";
        submitButton.innerHTML = "Submit";
        
        playerCreation.appendChild(playerScore);
        playerCreation.appendChild(nameInput);
        playerCreation.appendChild(submitButton);
        return playerCreation;        
    }
}