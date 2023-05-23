import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface PropType {
    title: string;
    photo: string;
    price: number;
}


const SingleCard: React.FC<PropType> = (props) => {
    return (
        <Col sm="2" className='d-flex justify-content-end'>
            <LinkContainer to="/about" >
                <Card className='searchcard' >
                    <Card.Img src={props.photo} className='img-fluid' />
                    <Card.Body>
                        <h5>{props.title.slice(0, 14)}</h5>
                        <p>
                            Price: {props.price}
                        </p>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col>
    )
}

export default SingleCard