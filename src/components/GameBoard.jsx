import "./GameBoard.css";



export default function GameBoard({ onHandleSelect, board }) {
  

  return (
    <div>
      <ol className="gameboard">
        {board.map((row, rowIndex) => (
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
