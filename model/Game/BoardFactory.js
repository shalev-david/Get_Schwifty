class BoardFactory{

    CreateNewBoard(difficulty){
        let range = [...Array(difficulty*difficulty -1).keys];
        // 0 will be our empty spot
        range = range.map(elem => elem+=1);
        range.push(0);
        do{
            var shuffeledRange = this.#ShuffleArray(range);
        }
        while(this.ValidateGameBoard(shuffeledRange))

        return this.#GenerateBoard(shuffeledRange, difficulty);
    }

    #ShuffleArray(arrayToShuffle){
        var currentIndex = this.arrayToShuffle.length;
	    var tempValue, randomIndex;

	    while (currentIndex > 0) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    tempValue = arrayToShuffle[currentIndex];
		    arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
		    arrayToShuffle[randomIndex] = tempValue;
	    }
    }

    #GenerateBoard(arrayToTransform, difficulty){
        let board = []
        for(let i = 0; i< arrayToTransform.length; i+=difficulty){
            board.push(arrayToTransform.slice(i, i+difficulty))
        }
        return board;
    }

    ValidateGameBoard(arrayToCheck, difficulty){
        let countOfReverses = arrayToCheck.map((elem, index) => {
            return this.#CountNumberOfReverses(arrayToCheck.slice(index), elem)
        });
        let sumOfReverses = 0;
        countOfReverses.map(elem=> sumOfReverses+= elem);
        
        if(difficulty % 2){
            return  ! (sumOfReverses % 2);
        }else{
            return !((sumOfReverses + Math.floor(arrayToCheck.indexOf(0)/difficulty) +1) % 2)
        }
    }

    #CountNumberOfReverses(subArrayToCheck, numberToCheck){
        let count = 0; 
        if(!numberToCheck) return count;

        subArrayToCheck.forEach(element => {
            if(element < numberToCheck && element == 0) {
                count++;
            }
        });
        return count;
    }
}