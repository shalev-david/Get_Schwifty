class ScoreBoard{
    constructor(scoreBoard){
        this.scoreBoard = scoreBoard
    }

    AddPlayerToScoreBoard(player){
        if(!this.scoreBoard.has(player.difficulty)){
            this.scoreBoard.set(player.difficulty, []);
        }
        let currentScoreBoard = this.scoreBoard.get(player.difficulty);
        currentScoreBoard.push(player);
        currentScoreBoard.sort((firstPlayer,secondPlayer)=>{
            this.#PlayersCompare(firstPlayer, secondPlayer);
        });

        if(currentScoreBoard.length >= 6){
            currentScoreBoard = currentScoreBoard.slice(0,5);
        }
        this.scoreBoard.set(player.difficulty, currentScoreBoard);
        return currentScoreBoard;
    }

    #PlayersCompare(firstPlayer,secondPlayer){
        if(firstPlayer.moves < secondPlayer.moves) return -1;
        else if(firstPlayer.moves > secondPlayer.moves) return 1;
        return 0;
    }
}