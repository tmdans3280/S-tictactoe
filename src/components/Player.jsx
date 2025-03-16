import "./Player.css";
import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEdting] = useState(false);

  const onClickEdit = () => {
    setIsEdting((isEdit) => !isEdit);
  };

  const onChangeInput = (e) => {
    setPlayerName(e.target.value);
  };

  let inputPlayerName = <span>{playerName}</span>;

  if (isEditing) {
    inputPlayerName = (
      <input value={playerName} onChange={onChangeInput}></input>
    );
  }

  return (
    <li className={isActive?"player_active":"player"}>
      {inputPlayerName}
      <span>{symbol}</span>
      <button onClick={onClickEdit} className="edit">
        Edit
      </button>
    </li>
  );
}
