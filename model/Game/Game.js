export class Game {
    constructor(board, startTime, difficulty){
        this.board = board;
        this.startTime = startTime;
        this.difficulty = difficulty;
    }

    CanMove(id){
        if(id == 0) return false;
        let index = this.#GetIndexById(id);
        if(this.#CanMoveTo(index[0]+1, index[1])) return [index[0]+1, index[1]];
        if(this.#CanMoveTo(index[0]-1, index[1])) return [index[0]-1, index[1]];
        if(this.#CanMoveTo(index[0], index[1]+1)) return [index[0], index[1]+1];
        if(this.#CanMoveTo(index[0], index[1]-1)) return [index[0], index[1]-1];
        
        return false;
    }

    Move(id){
        let indexOfEmptySlot = this.CanMove(id);

        if(indexOfEmptySlot){
            let indexOfId = this.#GetIndexById(id);
            this.board[indexOfEmptySlot[0]][indexOfEmptySlot[1]] = id;
            this.board[indexOfId[0]][indexOfId[1]] = 0;
            return true;
        }
        else return false;
    }

    #CanMoveTo(row, column){
        if(row == -1 || row == this.difficulty || column == -1 || column ==this. difficulty) return false;
        else return !this.board[row][column];
    }

    #GetIndexById(id){
        let index;
        for(let i=0; i< this.difficulty; i++){
            if(this.board[i].includes(id)){
                index = [i, this.board[i].indexOf(id)];
                break;
            }          
        }
        return index
    }
}