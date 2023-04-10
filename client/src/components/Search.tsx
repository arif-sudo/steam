import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Search = () => {
  const [game, setGame] = useState([]);
  const [query, setQuery] = useState<string>('');

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setGame(res.data);
    });
  }, []) 

  return (
    <div id="search">
      <div className="container">
        <div className="searchbar">
          <input onChange={(e:any)=>{setQuery(e.target.value)}} type="text" placeholder='Search'  />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Search