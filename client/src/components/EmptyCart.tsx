import React from 'react'
import { useAppSelector } from '../store'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    const { lang } = useAppSelector(state => state.auth);
    const t = lang === 'en';
    return (
        <div id='emptycart'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center ">
                            <h1>The Cart is Empty</h1>
                            <i className="fa-solid fa-shopping-cart"></i>
                        </div>
                        <p>Add some games  to your cart!</p>
                        <Link to="/games" >
                            <button>Return to the games page</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmptyCart