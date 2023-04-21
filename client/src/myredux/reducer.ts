
interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface BlogState {
    blogs: Blog[];
}

const initialState: BlogState = {
    blogs: []
};

type Action =
    | { type: "ADD_BLOG"; payload: Blog }
    | { type: "UPDATE_BLOG"; payload: { id: number, update: Partial<Blog> } }
    | { type: "REMOVE_BLOG"; payload: number };

export const blogReducer = (state = initialState, action: Action): BlogState => {
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
                blogs: state.blogs.filter((blog) => (
                    blog.id !== action.payload
                ))
            }
        default:
            return state;
    }
}