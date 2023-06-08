import React from "react";
import Table from "react-bootstrap/Table";
import DashboardItem from "./DashboardItem";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Navbar0 from "../../components/Navbar0";
import { useAppSelector } from "../../store";

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

const Dashboard = () => {
  const { blogs }: State[] | any = useAppSelector((state: RootState) => state.posts);//cant figure out type of blogs    
  const {lang} = useAppSelector(state => state.auth)
  const t = lang === 'en'
  return (
    <div id="dashboard" >
      <Navbar0 />
      <h1>Admin</h1>
      <Table bordered className="dashboard_table" >
        <thead>
          <tr>
            <th>#</th>
            <th>{t?"Iamge":"Şəkil"}</th>
            <th>{t?"Title":"Başlıq"}</th>
            <th>{t?"Description":"Təsvir"}</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog: any, index: number) => {
            return <DashboardItem key={index} title={blog.title} image={blog.image} description={blog.description} count={index} id={blog.id} />
          })}
        </tbody>
      </Table>
      <LinkContainer to="/addblog">
        <Button variant="success" >{t?"Add blog":"BLog əlavə edin"}</Button>
      </LinkContainer>
    </div>
  )
}

export default Dashboard