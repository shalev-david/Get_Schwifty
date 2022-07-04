export class GameController{
    constructor(game){
        this.game = game
    }

    Move(moveCell, id){
        if(this.game.Move(id))
        { 
            moveCell(id.toString());
        }
    }
}