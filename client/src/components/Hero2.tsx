import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GameContext } from '../context/GameContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero2 = () => {
    const [game] = useContext<any>(GameContext);
    return (
        <div id="hero2">
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        0: {
                            width: 0,
                            slidesPerView: 1,
                        },
                        575: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 4
                        },
                        1044: {
                            slidesPerView: 4,
                        },
                    }}>
                    {game.filter((item: any) => item.category === 'midweak').map((item:any) => (
                        <SwiperSlide className='mt-5 d-flex justify-content-center'>
                            <Card className='hero2-card' style={{ width: "300px" }} >
                                <Card.Img variant="" src={item.imagev} />
                                <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                                    <Card.Title>Midweek madness</Card.Title>
                                    <Card.Text>
                                        offer ends 6 Apr @ 9:00pm.
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