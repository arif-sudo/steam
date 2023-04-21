import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog, removeBlog } from "../../../myredux/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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


const EditBlog: React.FC = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const { blogs }: BlogState[] | any = useSelector((state: RootState) => state.blogs);
  const blog = blogs.find((b: any) => b.id === id);



  const [editBlog, setEditBlog] = useState<Blog>({
    id: blog.id, //err here
    title: blog.title,
    description: blog.description,
    image: blog.image
  });

  const handleEditBlog = () => {
    dispatch(updateBlog(editBlog.id, editBlog))
    navigate('/blog')
  }
  const handleRemoveBlog = () => {
    dispatch(removeBlog(editBlog.id))
    navigate('/blog')
  }
  return (
    <div id="editblog">
      <h1>Edit Blog</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleEditBlog() }}>
        <input type="text" placeholder="Title" value={editBlog.title} onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })} />
        <input type="text" placeholder="Description" value={editBlog.description} onChange={(e) => setEditBlog({ ...editBlog, description: e.target.value })} />
        <input type="text" placeholder="Image URL" value={editBlog.image} onChange={(e) => setEditBlog({ ...editBlog, image: e.target.value })} />
        <div className="form_btn">
          <button type="submit">Save changes</button>
          <button type='submit' onClick={() => {
            handleRemoveBlog();
          }}>Remove Blog</button>

        </div>

      </form>

    </div>
  )
}

export default EditBlog