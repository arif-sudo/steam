
interface Wish {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface WishState {
    wishs: Wish[];
}

const wishState: any = {
    wishs: []
}

type Action = { type: "ADD_WISH"; wish: Wish }
| { type: "REMOVE_WISH"; id: number };

const wishlistReducer = (state = wishState, action: Action): WishState => {
    switch (action.type) {
        case "ADD_WISH":
            return { ...state, wishs: [...state.wishs, action.wish] }
        case "REMOVE_WISH":
            return state.filter(({ id }:{id:number}) => {
                return id !== action.id;
            });
        default:
            return state;
    }
};

export default wishlistReducer;
