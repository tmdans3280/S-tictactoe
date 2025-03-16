import "./GameBoard.css";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onHandleSelect, turns }) {
  let gameboard = [...initGameBoard.map((item) => [...item])];
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  return (
    <div>
      <ol className="gameboard">
        {gameboard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol className="row">
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    className="clickbtn"
                    onClick={() => onHandleSelect(rowIndex, colIndex)}
                    disabled={col !== null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
