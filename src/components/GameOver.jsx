export default function GameOver({ winner, onReset }) {
  return (
    <div className="gameover">
      <h2>Game Over!!!</h2>
      <p>{winner ? `${winner} win!!!` : "has draw"}</p>
      <button onClick={onReset}>ReMatch</button>
    </div>
  );
}
