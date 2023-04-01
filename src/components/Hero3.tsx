import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero3 = () => {
    return (
        <div id='hero3'>
            <Swiper
                className='swipe_hero3'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/freetoplay?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%)"}} ></div>
                        <h5>Card title</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,0,139) 100%"}}></div>
                        <h5>Survival</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(184,134,11) 100%"}}></div>
                        <h5>Anime</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,100,0) 100%"}}></div>
                        <h5>Anime</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/freetoplay?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%)"}} ></div>
                        <h5>Card title</h5>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Hero3