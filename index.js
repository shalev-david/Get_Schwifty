import { Game } from "./model/Game/Game.js";
import { BoardFactory } from "./model/Game/BoardFactory.js";
import { DisplayBoard } from "./view/Game/src/DisplayBoard.js";
import { GameController } from "./controller/Game/GameController.js";
import {DisplayWinning} from "./view/Game/src/DisplayWinning.js";

let boardFactory = new BoardFactory();
let difficulty = parseInt(prompt("Please enter the difficulty", "3"));
let game = new Game(boardFactory.CreateNewBoard(difficulty), 0, difficulty);
let gameController = new GameController(game);
let displayBoard = new DisplayBoard(game);
let displayWin = new DisplayWinning(game)

displayBoard.Display(gameController, (elem) => elem.innerText = elem.id, displayWin);

