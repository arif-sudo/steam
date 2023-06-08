
interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
}
interface Wish {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface InitialState {
    blogs: Blog[];
    wishs: Wish[];
}

const initialState: InitialState = {
    blogs: [],
    wishs: []
};

type Action =
    { type: "ADD_WISH"; wish: Wish }
    | { type: "REMOVE_WISH"; id: number }
    | { type: "ADD_BLOG"; payload: Blog }
    | { type: "UPDATE_BLOG"; payload: { id: number, update: Partial<Blog> } }
    | { type: "REMOVE_BLOG"; payload: number };

export const Reducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "ADD_BLOG":
            return { ...state, blogs: [...state.blogs, action.payload] }

        case "UPDATE_BLOG":
            return {
                ...state,
                blogs: state.blogs.map((blog) => (
                    blog.id === action.payload.id ? { ...blog, ...action.payload.update } : blog
                ))
            }

        case "REMOVE_BLOG":
            return {
                ...state,
                blogs: state.blogs.filter((blog: Blog) => (
                    blog.id !== action.payload
                ))
            }
        case "ADD_WISH":
            return { ...state, wishs: [...state.wishs, action.wish] }
        case "REMOVE_WISH":
            return {
                ...state,
                wishs: state.wishs.filter((wish: Wish) => (
                    wish.id !== action.id
                ))
            }
        default:
            return state;
    }
}