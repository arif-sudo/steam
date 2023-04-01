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
            {/* <div className="container"> */}
            <Swiper
                className='swipe_hero3'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={4}
                slidesPerGroup={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}>
                <SwiperSlide  >
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
                        <h5>Puzzle</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,139,139) 100%"}} ></div>
                        <h5>Horror</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,139) 100%"}} ></div>
                        <h5>Adventure</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/strategy_cities_settlements?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(233,140,0) 100%"}} ></div>
                        <h5>City & Settlement</h5>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%"}} ></div>
                        <h5>Racing</h5>
                    </div>
                </SwiperSlide>
                {/* sd */}
                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,0,139) 100%"}} ></div>
                        <h5>Visual novel</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(233,140,0) 100%"}} ></div>
                        <h5>Simulation</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,100,0) 100%"}} ></div>
                        <h5>Rogue-Like</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="card">
                        <img src="https://store.steampowered.com/categories/homepageimage/category/casual?cc=us&l=english"  alt="err  " />
                        <div className="gradient" style={{background: "linear-gradient(rgba(0,0,0,0), rgb(0,139,139) 100%"}} ></div>
                        <h5>Casual</h5>
                    </div>
                </SwiperSlide>

            </Swiper>
            {/* </div> */}
        </div>
    )
}

export default Hero3