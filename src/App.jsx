import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/Gameover";
import { useState } from "react";
import Log from "./components/Log";
import { victorylist } from "./victorylist";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const onHandleSelect = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTunrs = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTunrs;
    });
  };

  let gameboard = [...initGameBoard.map((item) => [...item])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  let winner;

  for (const combination of victorylist) {
    const firstSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSymbol = gameboard[combination[1].row][combination[1].column];
    const thirdSymbol = gameboard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const onReset = () => {
    setGameTurns([])
  };

  return (
    <>
      <div className="game-container">
        <ol className="player-list">
          <Player name="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver  onReset={onReset} winner={winner} />}
        <GameBoard onHandleSelect={onHandleSelect} board={gameboard} />
        <Log turns={gameTurns} />
      </div>
    </>
  );
}

export default App;
