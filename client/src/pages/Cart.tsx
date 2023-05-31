import React, { useRef } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { useMediaQuery } from 'usehooks-ts'
import EmptyCart from '../components/EmptyCart'
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar0 from '../components/Navbar0'

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
        ? <>
            <Navbar0 />
            <EmptyCart />
        </>
        : (
            <div id='cart'>
                <Navbar0 />
                <Container className='mt-5' >
                    <Toast ref={toastRemove} />
                    <Row className="g-5 mt-5">
                        <Col sm="10" lg="10" >
                            {items.map((item: any) => (
                                <Col className='singlecart'>
                                    {/* <div className='cart' > */}
                                    {isMedia
                                        ? <div>
                                            <img src={item.image} className='img-fluid cartimg' alt='err' />
                                        </div>
                                        : <Col>
                                            <img src={item.image} className='img-fluid cartimg' alt='err' />
                                        </Col>}
                                    <Col className='cartinfo'>
                                        <div className="text-dark d-flex flex-column">
                                            <h5>{item.title}</h5>
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
                                        <div className='m-0 mx-2 d-flex align-items-center item_quantity'>
                                            {item.quantity}
                                        </div>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</Button>
                                    </Col>
                                    <Col>
                                        <button className='del' onClick={() => {
                                            toastRemove.current.show({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
                                            removeItem(item.id);
                                        }}> DEL</button>

                                    </Col>
                                    {/* </div> */}
                                </Col>
                            ))}
                        </Col>
                        <Col sm="2" className='cart-title p-0'>
                            <div className='your' >
                                <h1>Y</h1>
                                <h1>O</h1>
                                <h1>U</h1>
                                <h1>R</h1>
                            </div>
                            <div className='shopping'>
                                <h1>S</h1>
                                <h1>H</h1>
                                <h1>O</h1>
                                <h1>P</h1>
                                <h1>P</h1>
                                <h1>I</h1>
                                <h1>N</h1>
                                <h1>G</h1>
                            </div>
                            <div className='cart'>
                                <h1>C</h1>
                                <h1>A</h1>
                                <h1>R</h1>
                                <h1>T</h1>
                            </div>
                        </Col>
                    </Row>
                    <Button className='delall' onClick={() => emptyCart()}>DELETE ALL</Button>
                </Container>
            </div>
        )

}

export default Cart