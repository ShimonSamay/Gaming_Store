import "./Games.css";
import GameCard from "../Game/Game";
import { useContext, useEffect } from "react";
import { setGamesData } from "../../../Actions/games";
import { globalStatesContext } from "../../../Contexts/reducers";
import { Game } from "../../../Interfaces/game";
import { fetchGamesData } from "../../../Services/games";

const Games = () : JSX.Element => {

  const { games , gamesDispatch } = useContext(globalStatesContext);

  useEffect(() => {
    fetchGamesData(gamesDispatch, setGamesData);
  }, []);

  return (
    <section className="cards_games_container">
    {
       games.map(( game : Game ) => <GameCard key={game._id} GameProps={game}/>)
    }
    </section>
  );
};

export default Games;
