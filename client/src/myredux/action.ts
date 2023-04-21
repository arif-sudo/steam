
interface Blog {
    id: number,
    title: string,
    description: string,
    image: string
}

type Action =
    | { type: "ADD_BLOG"; payload: Blog }
    | { type: "UPDATE_BLOG"; payload: { id: number, update: Partial<Blog> } }
    // Partial<Blog> is a TypeScript utility type that creates a new type by making all properties of the original Blog type optional. 
    | { type: "REMOVE_BLOG"; payload: number };

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