import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const Hero3 = () => {
    return (
        <div id='hero3'>
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

                    <SwiperSlide>
                        <div className="card ">
                            <img src="https://store.steampowered.com/categories/homepageimage/freetoplay?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,0) 100%)" }} ></div>
                            <h5>Card title</h5>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="card">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(0,0,139) 100%" }}></div>
                            <h5>Survival</h5>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="card">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(184,134,11) 100%" }}></div>
                            <h5>Anime</h5>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="card">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(0,139,139) 100%" }}></div>
                            <h5>Action</h5>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="card">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(139,0,139) 100%)" }} ></div>
                            <h5>Role-Playing</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <img src="https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&l=english" alt="err  " />
                            <div className="gradient" style={{ background: "linear-gradient(rgba(0,0,0,0), rgb(233,140,0) 100%" }} ></div>
                            <h5>Open World</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero3