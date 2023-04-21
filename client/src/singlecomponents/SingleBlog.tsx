import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface SingleBlogType {
    title: string;
    description: string;
    image: string;
}

const SingleBlog = ({ title, description, image }:SingleBlogType) => {
    return (
        <Col sm="6" md="4" className="d-flex justify-content-center" >
            <Card className="blog_card">
                <Card.Img className="blog_img" height={300} variant="top" src={image} alt={title} />
                <Card.Body className="blog_body" >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default SingleBlog