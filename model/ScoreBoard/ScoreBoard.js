class ScoreBoard{
    constructor(players){
        this.players = players
    }

    AddPlayerToScoreBoard(player){
        this.players.push(player);
        this.players.sort((firstPlayer,secondPlayer)=>{
            this.#PlayersCompare(firstPlayer, secondPlayer);
        });

        if(this.players.length >= 6){
            this.players = this.players.slice(0,5);
        }

        return this.players;
    }

    #PlayersCompare(firstPlayer,secondPlayer){
        if(firstPlayer.difficulty > secondPlayer.difficulty) return -1;
            else if (firstPlayer.difficulty > secondPlayer.difficulty) return 1;
            else{
                if(firstPlayer.moves < secondPlayer.moves) return -1;
                else if(firstPlayer.moves > secondPlayer.moves) return 1;
            }
            return 0;
    }
}