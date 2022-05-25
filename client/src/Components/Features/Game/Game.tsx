import { FC } from "react";
import { Game } from "../../../Interfaces/game";
import "./Game.css" ;

interface GamePropsType {
    GameProps : Game ;
}

const GameCard : FC<GamePropsType> = ({ GameProps } : { GameProps : Game }) : JSX.Element => {

  return ( 
     <section className="card_game_container">
       <section className="image_container">
         <img src={GameProps.image}/>
       </section>
       <section className="content_container">
         <section className="game_title_container">
            <h1>{GameProps.name}</h1>
         </section>
       <section className="description_container">
        <section className="description">
           <span>{GameProps.description}</span>
           <p className="price">{GameProps.price}$</p> 
        </section>
       </section>
       <section className="icons_container">
        <section className="icons">
        </section>
       </section>
       </section>
     </section>
  )
}

export default GameCard ;