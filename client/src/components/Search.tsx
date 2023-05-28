import React, { useState,  useContext } from 'react'
import SingleCard from '../singlecomponents/SingleSearch';
import { useAppSelector } from '../store';
import { GameContext } from '../context/GameContext';

// interface ProductsType {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

const Search:React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { lang } = useAppSelector(state => state.auth)
  const t = lang === 'en';

  const [game] = useContext<any>(GameContext);
  

  return (
    <div id="search">
      <div className="container">
        <div className="searchbar">
          <input onChange={(e:any)=>{
            setQuery(e.target.value)}} type="text" placeholder={t ? "Search" : "Axtarın"}  />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
        <div className="row my-5">
            {query.length === 0 
            ? <></>
            : game.filter((item:any) => item.title.toLocaleLowerCase().includes(query)).map((item: any, index:number) => (
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