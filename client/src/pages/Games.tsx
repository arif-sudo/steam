import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleGame from '../singlecomponents/SingleGame';
import Navbar0 from '../components/Navbar0';

const Games = () => {
  const [game, setGame] = useState([]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setGame(res.data))
  }, [])

  return (
    <div id='games'>
      <Navbar0 />
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <h1>Games</h1>
          </div>
        </div>
        <div className="row g-5">
          {game.map((item: any, index: number) => {
            return <SingleGame key={index + 1} photo={item.image} title={item.title} price={item.price} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Games