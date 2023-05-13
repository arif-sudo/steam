import React from "react";
import Table from "react-bootstrap/Table";
import DashboardItem from "./DashboardItem";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

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

const Dashboard = () => {
  const { blogs }: BlogState[] | any = useSelector((state: RootState) => state.blogs);//cant figure out type of blogs    
  return (
    <div id="dashboard" >
      <h1>Admin</h1>
      <Table bordered className="dashboard_table" >
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th className="" >Edit</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog: any, index: number) => {
            return <DashboardItem key={index} title={blog.title} image={blog.image} description={blog.description} count={index} id={blog.id} />
          })}
        </tbody>
      </Table>
      <LinkContainer to="/addblog">
        <Button variant="success" >Add blog</Button>
      </LinkContainer>
    </div>
  )
}

export default Dashboard