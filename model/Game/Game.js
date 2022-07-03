class Game {
    constructor(board, startTime, difficulty){
        this.board = board;
        this.startTime = startTime;
        this.difficulty = difficulty;
    }

    CanMove(id){
        if(id == 0) return false;
        let index = this.#GetIndexById(id);
       if(this.#CanMoveTo([index[0]+1, index[1]])) return [index[0]+1, index[1]];
       if(this.#CanMoveTo([index[0]-1, index[1]])) return [index[0]-1, index[1]];
       if(this.#CanMoveTo([index[0], index[1]])) return [index[0], index[1]+1];
       if(this.#CanMoveTo([index[0], index[1]])) return [index[0], index[1]-1];

       return false;
    }

    Move(id){
        let indexOfEmptySlot = CanMove(id);

        if(indexOfEmptySlot){
            board[indexOfEmptySlot[0], indexOfEmptySlot[1]] = id;
            let indexOfId = this.#GetIndexById(id);
            board[indexOfId[0],indexOfId[1]] = 0;
            return true;
        }
        else return false;
    }

    #CanMoveTo(row, column){
        if(row == -1 || row == difficulty || column == -1 || column == difficulty) return false;
        else return !board[row, column];
    }

    #GetIndexById(id){
        let index;
        for(let i=0; i< difficulty; i++){
            if(board[i].has(id)){
                index = [i, board[i].indexOf(id)];
                break;
            }          
        }
        return index
    }
}