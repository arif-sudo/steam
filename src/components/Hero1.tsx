import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'usehooks-ts';




const Hero1 = () => {
    const isMedia = useMediaQuery('(max-width: 767px)')
    const isMediaImagesR1 = useMediaQuery('(max-width: 1057px)')
    const isMediaImageR = useMediaQuery('(max-width: 1364px)')
    return (
        <>
            <div id="hero1">
                <div className="container-fluid">
                    <div className="row">
                        {isMedia ? <></> :
                            <div className={isMedia ? "" : "col-2"}>
                                <div className="hero1_gutter">
                                    <img src="https://store.cloudflare.steamstatic.com/public/images//gift/steamcards_promo_02.png" alt="" />
                                    <div className="list">
                                        <ul className=''>
                                            <li>Gift Cards</li>
                                            <li>Now aviable on steam</li>
                                            <li></li>
                                            <li>Recomended</li>
                                            <li>By Friends</li>
                                            <li>By Curators</li>
                                            <li>Tags</li>
                                            <li>Top Sellers</li>
                                            <li>New Releases</li>
                                            <li>Upcoming</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>}
                        <div className={isMedia ? "col-12" : "col-10"} >
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                className="myslide"
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1668125812" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>Counter-Strike: Global Offensive</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_118cb022b9a43f70d2e5a2df7427f29088b6b191.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_8c9cce9a9dde7b9c020837dcbd4615efe6f77d66.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_2b9e362287b509bb3864fa7bad654fe1fda0f7ed.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h4>Now aviable</h4>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Top Seller</p>
                                                    <p>Free</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1679677298" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>Sons of the forest</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/ss_2b67491ca913adea6953429e1a567824aaa0ed54.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/ss_e6e3ab1badfb287a77fb6eef7b1589a35371496b.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/ss_4fa5d260318f0aa37754b00c5dc10d1b7b9b9b1d.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/ss_ba2c1f6e69c6c7d69f7965cbd4b78da59ec59d55.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h4>Early access now aviable</h4>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Top Seller</p>
                                                    <p>13.99$</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1677534139" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>Forza Horizon 5</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_3c16188972c826942f47991d91b0f6dc17e01fc9.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_00f0090174380eeaf8753bd3d1028b6772c3aebf.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_0a13a7ccd38e7c3e6a5f1720050732833b53b6a8.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h5>Now aviable</h5>
                                                <div className='d-flex '>
                                                    <p>Top Seller</p>
                                                    <p>20.86$</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/capsule_616x353.jpg?t=1679674814" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>Resident Evil 4</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_2f026b10ab2facd11820737453512b3b88c5a863.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_72888d13c9e3995f05a2886a51f0dc8791e28afa.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_82cef99075c8e19ec71d2aae8b0a19815695c5a7.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/ss_0596bac955340495562f3ff2538756ebd9a7f073.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h5>Now aviable</h5>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Top Seller</p>
                                                    <p>69.99$</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1679171844" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>Apex Legends</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_d86fa922b55d0ddca06a06eca61ead938e45f768.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_5c150b9e86863e73fa4924657f6109db0e3b46a1.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_670b9be3a47d8630b42189a8e39c345bd3b9940b.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_e658fec4d9f28bf4a133618d537d42a0e831b335.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h5>Now aviable</h5>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Top Seller</p>
                                                    <p>Free</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="hero1_content">
                                        <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_616x353.jpg?t=1678876960" alt="" />
                                        {isMediaImagesR1 ? <></> : <div className="info text-center">
                                            <h3>PUBG: BATTLEGROUNDS</h3>
                                            <div className="imges row ">
                                                <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_109d7072cf85f5b3b1e3dacadf3009718db451c4.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_23af2e59855a833c22d0c11ca23a719f54a554ff.600x338.jpg" alt="" />
                                                </div>
                                                {isMediaImageR ? <></> : <div className="col">
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_8814c071f0cce53821d8e1b1a96de78d00e5d4d1.600x338.jpg" alt="" />
                                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_cec7ea5e83407dba51c80d24a2c8076e93752d4f.600x338.jpg" alt="" />
                                                </div>}
                                            </div>
                                            <div className=''>
                                                <h5>Now aviable</h5>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Top Seller</p>
                                                    <p>Free</p>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero1