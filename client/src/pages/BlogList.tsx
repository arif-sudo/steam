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

interface BlogState {
    blogs: Blog[];
}

interface RootState {
    blogs: Array<{
        id: number,
        title: string,
        description: string,
        image: string
    }>;
}

const BlogList = () => {

    const { blogs }: BlogState[] | any = useSelector((state: RootState) => state.blogs);//cant figure out type of blogs    
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