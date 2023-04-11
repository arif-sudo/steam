import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SingleCard from '../singlecomponents/SingleSearch';

interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Search:React.FC = () => {
  const [game, setGame] = useState<ProductsType[]>([]);
  const [query, setQuery] = useState<string>('');
  const [check, setCheck] = useState<string>('');

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setGame(res.data);
    });
  }, []) 

  return (
    <div id="search">
      <div className="container">
        <div className="searchbar">
          <input onChange={(e:any)=>{
            setQuery(e.target.value);
            setCheck(e.target.value)}} type="text" placeholder='Search'  />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
        <div className="row my-5">
            {check.length === 0 
            ? <></>
            : game.filter(item=> item.title.toLocaleLowerCase().includes(query)).map((item: any, index:number) => (
              <SingleCard
              photo={item.image}
              title={item.title}
              price={item.price}
              key={index+1} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Search