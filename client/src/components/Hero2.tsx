import React from 'react'
import Card from 'react-bootstrap/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero2 = () => {
    return (
        <div id="hero2">
            {/* change to swiper */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                <SwiperSlide className='mt-5 d-flex justify-content-center'>
                    <Card style={{ width: "300px" }} >
                        <Card.Img variant="" src="https://cdn.akamai.steamstatic.com/steam/spotlights/f5162cad6d5eb114fff01240/spotlight_image_english.jpg?t=1679955084" />
                        <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                            <Card.Title>Midweek madness</Card.Title>
                            <Card.Text>
                                offer ends 6 Apr @ 9:00pm.
                            </Card.Text>
                            <div className="d-flex align-items-center">
                                <div className='discount'>-40% </div>
                                <div className="prices">
                                    <div className="price">20.86$</div>
                                    <div className="original_price">34.78$</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='mt-5 d-flex justify-content-center'>
                    <Card style={{ width: "300px" }}>
                        <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/spotlights/1e447918d95f6620346dcf38/spotlight_image_english.jpg?t=1678813872 " />
                        <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                            <Card.Title>Midweek madness</Card.Title>
                            <Card.Text>
                                offer ends 8 Apr @ 9:00pm.
                            </Card.Text>
                            <div className="d-flex align-items-center">
                                <div className='discount'>-40% </div>
                                <div className="prices">
                                    <div className="price">13.79$</div>
                                    <div className="original_price">22.99$</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='mt-5 d-flex justify-content-center'>
                    <Card style={{ width: "300px" }}>
                        <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/spotlights/c0d9a71b51cc40c78195412c/spotlight_image_english.jpg?t=1678905831" />
                        <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                            <Card.Title>Midweek madness</Card.Title>
                            <Card.Text>
                                offer ends 3 Apr @ 9:00pm.
                            </Card.Text>
                            <div className="d-flex align-items-center">
                                <div className='discount'>-20% </div>
                                <div className="prices">
                                    <div className="price">2.63$</div>
                                    <div className="original_price">3.29$</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide className='mt-5 d-flex justify-content-center'>
                    <Card style={{ width: "300px" }}>
                        <Card.Img variant="top" src="https://cdn.akamai.steamstatic.com/steam/spotlights/1f7a37d631c3bdc25e4487e0/spotlight_image_english.jpg?t=1679091511" />
                        <Card.Body style={{ backgroundImage: `url("https://store.akamai.steamstatic.com/public/images/v6/home/background_spotlight.jpg")` }} className="secondary" >
                            <Card.Title>Midweek madness</Card.Title>
                            <Card.Text>
                                offer ends 5 Apr @ 9:00pm.
                            </Card.Text>
                            <div className="d-flex align-items-center">
                                <div className='discount'>-20% </div>
                                <div className="prices">
                                    <div className="price">20.86$</div>
                                    <div className="original_price">34.78$</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default Hero2