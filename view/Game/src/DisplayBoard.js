export class DisplayBoard{
    constructor (game){
        this.game = game;
    }

    Display(gameController, addValueToCell, alertWin){
        let container = this.#GenerateBoard(this.game.difficulty);
        this.#AddCellsToContainer(gameController,container,addValueToCell, alertWin)
        document.body.appendChild(container);
    }

    #AddCellsToContainer(gameController, container, addValueToCell, alertWin){
        var self = this;

        for(let i = 0; i<this.game.difficulty; i++){
            for(let j = 0; j<this.game.difficulty; j++){
                
                let gridItem = document.createElement("div");
                gridItem.id = this.game.board[i][j];
                gridItem.className = "container-item";
                if(this.game.board[i][j]) 
                {
                    addValueToCell(gridItem);
                    gridItem.addEventListener("click",function() {gameController.Move(self.MoveCell, parseInt(gridItem.id), function(){alertWin.Won()})});
                }
                container.appendChild(gridItem);
            }
        }
    }


    #GenerateBoard(difficulty){
        let container = document.createElement("div");
        let gridStyle = ""
        container.className = "container"
        for(let i =0; i< this.game.difficulty; i++) {
            gridStyle += "auto ";
        }
        container.style.gridTemplateColumns = gridStyle;
        return container
    }

    MoveCell(id){
        const emptyCell = document.getElementById("0");
        const currentCell = document.getElementById(id);

        const container = document.getElementsByClassName("container")[0];
        const spcaeToMove = emptyCell.nextSibling === currentCell ? emptyCell : emptyCell.nextSibling;
    
        container.insertBefore(emptyCell, currentCell);
    
        container.insertBefore(currentCell, spcaeToMove);
        
    }
}