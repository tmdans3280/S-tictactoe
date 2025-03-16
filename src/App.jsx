import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { victorylist } from "./victorylist";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer=deriveActivePlayer(gameTurns)

  const onHandleSelect = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {

      const currentPlayer=deriveActivePlayer(prevTurns)

      const updateTunrs = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTunrs;
    });
  };

  return (
    <>
      <div className="game-container">
        <ol className="player-list">
          <Player name="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard onHandleSelect={onHandleSelect} turns={gameTurns} />
        <Log turns={gameTurns} />
      </div>
    </>
  );
}

export default App;
