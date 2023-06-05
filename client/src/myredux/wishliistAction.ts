
interface Wish {
    id: number;
    title: string;
    price: string;
    image: string;
}

type Action =
    | { type: "ADD_WISH"; wish: Wish }
    | { type: "REMOVE_WISH"; id: number };



export const addWish = ({ id, title, price, image }:Wish): Action => ({
    type: "ADD_WISH",
    wish: {
      id,
      title,
      price,
      image,
    },
  });
  
  export const removeWish = ({id}:{id: number}):Action => ({
    type: "REMOVE_WISH",
    id
  });