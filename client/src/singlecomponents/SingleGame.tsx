import React, { useRef } from 'react'
import { Col } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface PropType {
    item: any;
    title: string;
    photo: string;
    price: number;
}

const SingleGame: React.FC<PropType> = (props) => {
    const { addItem } = useCart();
    const toast: any = useRef(null)
    return (
        <Col sm="6" md="4" className='singlegame'>
            <Toast ref={toast} position="bottom-right" />
            <div className='card'>
                <img src={props.photo} alt='err' />
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

                    <button className='addto'
                        onClick={() => {
                            toast.current.show({ severity: 'success', summary: 'Message', detail: 'Message Content', life: 2500 });
                            addItem(props.item)
                        }}>Add to Cart
                    </button>
                </div>
            </div>
        </Col>
    )
}

export default SingleGame