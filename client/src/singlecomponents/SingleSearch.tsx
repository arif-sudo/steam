import React from 'react'
import {  Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface PropType {
    title: string;
    photo: string;
    price: number;
}


const SingleCard: React.FC<PropType> = (props) => {
    return (
        <div className='col-6 col-md-4 col-lg-3 '>
            <LinkContainer to="/about" >
                <Card className='searchcard' >
                    <Card.Img src={props.photo} className='img-fluid' />
                    <Card.Body>
                        <h5>{props.title}</h5>
                        <p>
                            Price: {props.price}
                        </p>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </div>
    )
}

export default SingleCard