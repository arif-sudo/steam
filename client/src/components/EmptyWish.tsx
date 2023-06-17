import React from 'react'
import { useAppSelector } from '../store'
import { Link } from 'react-router-dom';

const EmptyWish = () => {
    const { lang } = useAppSelector(state => state.auth);
    const t = lang === 'en';
    return (
        <div id='emptycart'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center ">
                            <h1>{t?"Wishlist is Empty":"Istək siyahısı Boşdur"}</h1>
                            <i className="fa-solid fa-shopping-cart"></i>
                        </div>
                        <p>{t?"Add some games  to your wishlist!":"Istək siyahısına bir neçə oyun əlavə edin!"}</p>
                        <Link to="/games" >
                            <button>{t?"Return to the games page":"Oyunlar səhifəsinə qayıdın"}</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmptyWish