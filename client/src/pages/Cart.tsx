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
import { useAppSelector } from '../store'
import ScrollToTop from '../components/ScrollToTop'

const Cart = () => {
    const { lang } = useAppSelector(state => state.auth)
    const t = lang === 'en';
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
                <ScrollToTop />
                <Container className='mt-5' >
                    <Toast ref={toastRemove} />
                    <Row className="d-flex justify-content-center mt-5">
                        <Col sm="12" md="10" lg="10" >
                            {items.map((item: any) => (
                                <Col className='singlecart'>
                                    <div className='cart' >
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
                                                    <div className={`discount ${item.discount === "0" ? 'd-none' : ""} `}>{item.discount}%</div>
                                                    <div className="prices">
                                                        <div className="price">{item.price === '0' ? "FREE" : (item.price * item.quantity).toFixed(2) + '$'}</div>
                                                        <div className="original_price">{item.originalprice}$</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col className='btns m-0'>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</Button>
                                            <div className='m-0 mx-2 text-white d-flex align-items-center item_quantity'>
                                                {item.quantity}
                                            </div>
                                            <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</Button>
                                        </Col>
                                        <Col>
                                            <button className='del' onClick={() => {
                                                toastRemove.current.show({ severity: 'error', summary: `${t ? "Message" : "Mesaj"}`, detail: `${t ? "Item deleted" : "Element silindi"}`, life: 3000 });
                                                removeItem(item.id);
                                            }}>{t ? "DEL" : "SIL"}</button>

                                        </Col>
                                    </div>
                                </Col>
                            ))}
                        </Col>
                        <Col sm="2" className='cart-title p-0'>
                            <div className="cart-title-child d-flex justify-content-between align-items-center ">
                                <div className='your' >
                                    <h1>{t ? "Y" : "A"}</h1>
                                    <h1>{t ? "O" : "L"}</h1>
                                    <h1>{t ? "U" : "I"}</h1>
                                    <h1>{t ? "R" : "Ş"}</h1>
                                </div>
                                <div className='shopping'>
                                    <h1>{t ? "S" : "S"}</h1>
                                    <h1>{t ? "H" : "Ə"}</h1>
                                    <h1>{t ? "O" : "B"}</h1>
                                    <h1>{t ? "P" : "Ə"}</h1>
                                    <h1>{t ? "P" : "T"}</h1>
                                    <h1>{t ? "I" : "İ"}</h1>
                                    <h1>{t ? "N" : "N"}</h1>
                                    <h1>{t ? "G" : "İ"}</h1>
                                    <h1>{t ? "" : "Z"}</h1>
                                </div>
                                <div className='cart'>
                                    <h1>{t ? "C" : ""}</h1>
                                    <h1>{t ? "A" : ""}</h1>
                                    <h1>{t ? "R" : ""}</h1>
                                    <h1>{t ? "T" : ""}</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* <Button className='buy' onClick={() => emptyCart()}>{t?"Buy items":"Əşyaları alın"}</Button> */}
                    <div>
                        {/* Button trigger modal */}
                        <button type="button" onClick={() => emptyCart()} className="btn btn-primary buy" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {t ? "Buy items" : "Əşyaları alın"}
                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark ">
                                    <div className="modal-header">
                                        <h1 className="modal-title  fs-5" id="exampleModalLabel">Modal {t?"title":"başlıq"}</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        {t ? "Your purchase was succesfully completed!!" : "Alış-verişiniz uğurla tamamlandı!!"}    
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t?"Close":"Bağlayın"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        )

}

export default Cart