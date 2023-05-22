import React, { useRef } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { useMediaQuery } from 'usehooks-ts'
import EmptyCart from '../components/EmptyCart'
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Cart = () => {
    const toastRemove: any = useRef(null)
    const {
        items,
        isEmpty,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart()
    const isMedia = useMediaQuery('(max-width: 767px)')


    return isEmpty
        ? <EmptyCart/>
        : (
            <div id='cart'>
                <Container>
                    <Toast  ref={toastRemove}  /> 
                    <h1 className='mb-5'>Your Shopping Cart</h1>
                    <Row className="g-5">
                        {items.map((item: any) => (
                            <Col sm="12" className='singlecart'>
                                <Row className='cart' >
                                    {isMedia
                                        ? <div>
                                            <img src={item.image} className='img-fluid cartimg' alt='err' />
                                        </div>
                                        : <Col>
                                            <img src={item.image} className='img-fluid cartimg' alt='err' />
                                        </Col>}
                                    <Col className='cartinfo'>
                                        <div className="text-dark d-flex flex-column">
                                            <h5>{(item.title).slice(0, 10)}</h5>
                                            <div className="d-flex align-items-center">
                                                <div className='discount'>-40% </div>
                                                <div className="prices">
                                                    <div className="price">20.86$</div>
                                                    <div className="original_price">34.78$</div>
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                    <Col className='btns'>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</Button>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</Button>
                                    </Col>
                                    <Col>
                                        <button className='del' onClick={() => {
                                            toastRemove.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
                                            removeItem(item.id);
                                        }}> DEL</button>
                                        
                                    </Col>
                                    <Col className=' item_quantity'>
                                        Count: {item.quantity}
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                    <Button className='delall' onClick={() => emptyCart()}>DELETE ALL</Button>
                </Container>
            </div>
        )

}

export default Cart