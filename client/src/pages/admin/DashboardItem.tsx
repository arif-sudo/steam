import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


interface DashboardItemProp  {
    title: string;
    description: string;
    image: string;
    id: number;
    count: number,
}

const DashboardItem: React.FC<DashboardItemProp> = ({ title, description, image, id, count }) => {
  

  return (
    <>
      <tr>
        <td>{count + 1}</td>
        <td><img width={120} src={image} alt={title} /></td>
        <td>{title}</td>
        <td>{description.substring(0, 10) + "..."}</td>
        <td className="">
          <LinkContainer  to={`/editblog/${id}`}>
            <Button className="editbtn"  variant='primary'>Edit</Button>
          </LinkContainer>
        </td>
      </tr>
    </>
  )
}

export default DashboardItem