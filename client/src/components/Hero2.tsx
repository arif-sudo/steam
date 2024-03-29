import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GameContext } from '../context/GameContext';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { useAppSelector } from '../store';
const Hero2 = () => {
    const { lang } = useAppSelector(state => state.auth)
    const [game] = useContext<any>(GameContext);
    const t = lang === 'en'
    return (
        <div id="hero2">
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1224: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {game.filter((item: any) => item.category === 'midweak').map((item: any) => (
                        <SwiperSlide className='mt-5 d-flex justify-content-center'>
                            <Card className='hero2-card' style={{ width: "300px" }} >
                                <Card.Img variant="" src={item.imagev} />
                                <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                                    <Card.Title>Midweek madness</Card.Title>
                                    <Card.Text>
                                        {t ? "Offer ends 25 July @ 9:00pm." : "Təklif 25 iyul saat 21:00-da başa çatır."}
                                    </Card.Text>
                                    <div className="d-flex align-items-center">
                                        <div className={`discount  ${item.discount === "0" ? 'd-none' : ""}`}>{item.discount === '0' ? "" : item.discount + '%'}</div>
                                        <div className="prices">
                                            <div className="price">{item.price}$</div>
                                            <div className={`original_price ${item.discount === "0" ? 'd-none' : ""}`}>{item.originalprice}$</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero2