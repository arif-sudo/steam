import React from 'react'
import {  Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useAppSelector } from '../store'

interface PropType {
    title: string;
    photo: string;
    price: number;
}


const SingleCard: React.FC<PropType> = (props) => {
    const { lang } = useAppSelector(state => state.auth);
    const t = lang === 'en';
    return (
        <div className='col-6 col-md-4 col-lg-3 '>
            <LinkContainer to="/about" >
                <Card className='searchcard' >
                    <Card.Img src={props.photo} className='img-fluid' />
                    <Card.Body>
                        <h5>{props.title}</h5>
                        <p>
                            {t?"Price":"Qiymət"}: {props.price}
                        </p>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </div>
    )
}

export default SingleCard