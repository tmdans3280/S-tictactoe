import "./Log.css"

export default function Log({ turns }) {
  return (
    <ol className="gamelog">
      {turns.map((item) => (
        <li  key={`${item.square.row} ${item.square.col}`}>
          {item.square.row},{item.square.col} select {item.player}
        </li>
      ))}
    </ol>
  );
}
