import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useAppSelector } from '../store';

interface PropType {
    item: any;
    title: string;
    photo: string;
    price: number;
}

const SingleGame: React.FC<PropType> = (props) => {
    const {lang} = useAppSelector(state => state.auth)
    const { addItem } = useCart();
    const toast: any = useRef(null)
    const t = lang === 'en'
    return (
        <Col sm="6" lg="4" className='singlegame'>
            <Toast ref={toast} position="bottom-right" />
            <div className='card'>
                <img src={props.photo} alt='err' />
                <div className='cartinfo'>
                    <h5>{props.title}</h5>
                    <div className="text-dark d-flex justify-content-between w-100">
                        <div className="d-flex align-items-center">
                            <div className={`discount ${props.item.discount === "0" ? 'd-none' : ""} `}>{props.item.discount}%</div>
                            <div className="prices">
                                <div className="price">{props.item.price === '0' ? "FREE" : props.item.price + '$'}</div>
                                <div className={`original_price ${props.item.discount === "0" ? 'd-none' : ""}`}>{props.item.originalprice}$</div>
                            </div>
                        </div>
                        <button className='addto'
                            onClick={() => {
                                toast.current.show({ severity: 'success', summary: `${t?"Message":"Mesaj"}`, detail: `${t?"Item added":"Element əlavə edildi"}`, life: 2500 });
                                addItem(props.item)
                            }}>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default SingleGame