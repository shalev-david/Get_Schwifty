export class GameController{
    constructor(game){
        this.game = game
    }

    Move(moveCell, id, alertWin){
        if(this.game.Move(id))
        { 
            moveCell(id.toString());
            if(this.game.Win()){
                alertWin();
            }
        }
    }
}