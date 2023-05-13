import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../myredux/action";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

interface Blog {
  id: any;
  title: string;
  description: string;
  image: string;
}


const AddBlog:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState<Blog>({
    id: uuidv4(),
    title: "",
    description: "",
    image: ""
  })


  const handleAddBlog = () => {
    dispatch(addBlog(newBlog))
    navigate("/blog")
  }
  return (
    <div id="addblog">
      <h1>Add Blog</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleAddBlog(); }}>
        <input type="text" placeholder="Title" value={newBlog.title} onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })} />
        <input type="text" placeholder="Description" value={newBlog.description} onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newBlog.image} onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddBlog