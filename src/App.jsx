
import Game from "./components/Game"
import useGameCollection from "./components/hooks/useGamerCollection"
import NewGameForm from "./components/NewGameForm"

export default function App (){
const {games,addGame,remuveGame} = useGameCollection()
  
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm
        addGame={addGame}
      />
      <div className="games">
        {games.length > 0
          ? games.map((game) => (
            <Game 
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={()=>remuveGame(game.id)}
            />))
            :(
              <h2 style={{margin:"4rem auto"}}>Insira algum jogo</h2>
            )}
      </div>
    </div>
  )
}