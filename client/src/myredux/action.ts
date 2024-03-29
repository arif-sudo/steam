
interface Blog {
    id: number,
    title: string,
    description: string,
    image: string
}

interface Wish {
    id: number;
    title: string;
    price: string;
    image: string;
}

type Action =
    { type: "ADD_WISH"; wish: Wish }
    | { type: "REMOVE_WISH"; id: number }
    | { type: "ADD_BLOG"; payload: Blog }
    | { type: "UPDATE_BLOG"; payload: { id: number, update: Partial<Blog> } }
    | { type: "REMOVE_BLOG"; payload: number };
// Partial<Blog> is a TypeScript utility type that creates a new type by making all properties of the original Blog type optional. 

export const addBlog = (blog: Blog): Action => ({
    type: "ADD_BLOG",
    payload: blog
})

export const updateBlog = (id: number, update: Partial<Blog>): Action => ({
    type: "UPDATE_BLOG",
    payload: {
        id,
        update
    }
})

export const removeBlog = (id: number): Action => ({
    type: "REMOVE_BLOG",
    payload: id
})

export const addWish = ({ id, title, price, image }: Wish): Action => ({
    type: "ADD_WISH",
    wish: {
        id,
        title,
        price,
        image,
    },
});

export const removeWish = ({ id }: { id: number }): Action => ({
    type: "REMOVE_WISH",
    id
});