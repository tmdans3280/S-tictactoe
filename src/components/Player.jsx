import { useState } from 'react'

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  const onClickBtn = () => {
    setIsEditing((editing) => !editing)
  }

  const onChangeInput = (e) => {
    setPlayerName(e.target.value)
  }

  let inputPlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    inputPlayerName = (
      <input onChange={onChangeInput} type="text" value={playerName} required />
    )
  }
  return (
    <li>
      <span className="player">
        {inputPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickBtn}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
