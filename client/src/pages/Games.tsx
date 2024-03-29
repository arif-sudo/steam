import React, { useContext } from 'react'
import SingleGame from '../singlecomponents/SingleGame';
import Navbar0 from '../components/Navbar0';
import { GameContext } from '../context/GameContext';
import { useAppSelector } from '../store';

const Games = () => {
  const [game] = useContext<any>(GameContext);
  const {lang} = useAppSelector(state => state.auth);
  const t = lang === 'en';

  return (
    <div id='games'>
      <Navbar0 />
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <h1>{t?"Games":"Oyunlar"}</h1>
          </div>
        </div>
        <div className="row g-3">
          {game.map((item: any, index: number) => {
            return <SingleGame key={index + 1} photo={item.image} title={item.title} price={item.price} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Games