import { useSelector } from "react-redux";
import SingleBlog from "../singlecomponents/SingleBlog";
import { Row } from "react-bootstrap";
import Navbar0 from "../components/Navbar0";

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

interface State {
    blogs: Blog[];
    wishs: Wish[]
}

interface RootState {
    posts: {
        blogs: Array<{
            id: number,
            title: string,
            description: string,
            image: string
        }>
        wishs: Array<{
            id: number;
            title: string;
            price: string;
            image: string;
        }>
    }
}

const BlogList = () => {
    const { blogs }: State[] | any = useSelector((state: RootState) => state.posts);//cant figure out type of blogs    
    return (
        <div id="bloglist">
            <Navbar0 />
            <h1 className="text-center">Blog List</h1>
            <Row className="g-5 d-flex justify-content-center" >
                {blogs.map((blog: any) => (
                    <SingleBlog key={blog.id} title={blog.title} image={blog.image} description={blog.description} />
                ))}
            </Row>

        </div>
    )
}

export default BlogList