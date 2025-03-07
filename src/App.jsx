import Player from './components/Player'
import GameBoard from './components/Gameboard'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
