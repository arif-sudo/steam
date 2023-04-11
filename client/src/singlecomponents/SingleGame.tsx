import React from 'react'
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart'


interface PropType {
    item: any;
    title: string;
    photo: string;
    price: number;
}


const SingleGame: React.FC<PropType> = (props) => {
    const { addItem } = useCart()
    return (
        <Col sm="6" md="4" className='singlegame'>
            <div className='card' >
                <img src={props.photo} className='sgameimg' alt='err' />
                <div className='cartinfo'>
                    <div className="text-dark d-flex flex-column">
                        <h5>{(props.title).slice(0, 10)}</h5>
                        <div className="d-flex align-items-center">
                                <div className='discount'>-40% </div>
                                <div className="prices">
                                    <div className="price">20.86$</div>
                                    <div className="original_price">34.78$</div>
                                </div>
                            </div>
                    </div>

                    <button onClick={() => { addItem(props.item) }}>Add to Cart</button>
                </div>
            </div>
        </Col>
    )
}

export default SingleGame