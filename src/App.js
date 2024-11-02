import GameCard from "./GameCard"

const gamesList = [
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "Fun"
  },
  {
    id: 1,
    name: "sksksksks",
    rating: null,
    category: "smash"
  },
  {
    id: 2,
    name: "jfjfjf",
    rating: null,
    category: "lup"
  },
]
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {gamesList.map(g => <GameCard game={g} />)}
    </div>
  );
}

export default App;
