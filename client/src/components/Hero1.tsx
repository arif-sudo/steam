import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'usehooks-ts';

import { useAppSelector } from '../store';



const Hero1 = () => {
    const isMedia = useMediaQuery('(max-width: 767px)')
    const isMediaImagesR1 = useMediaQuery('(max-width: 1057px)')
    const isMediaImageR = useMediaQuery('(max-width: 1364px)')
    const { lang } = useAppSelector(state => state.auth)
    const [game] = useContext<any>(GameContext);
    const t = lang === 'en';
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
                                            <li>{t ? "Gift Cards" : "Hədiyyə Kartları"}</li>
                                            <li>{t ? "Now aviable on steam" : "İndi Steam də mövcuddur"}</li>
                                            <li>{t ? "Recomended" : "Tövsiyə olunur"}</li>
                                            <li>{t ? "By Friends" : "Dostlar tərəfindən"} </li>
                                            <li>{t ? "By Curators" : "Kuratorlar tərəfindən"} </li>
                                            <li>{t ? "Tags" : "Teqlər"} </li>
                                            <li>{t ? "Top Sellers" : "Ən çox satanlar"} </li>
                                            <li>{t ? "New Releases" : "Yeni buraxılışlar"} </li>
                                            <li>{t ? "Upcoming" : "Qarşıdan gələn"} </li>
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

                                {game.filter((item: any) => item.category2 === 'hero').map((item: any, index: number) => (
                                    <SwiperSlide>
                                        <div className="hero1_content">
                                            <img className='img-fluid' src={item.image} alt="" />
                                            {isMediaImagesR1 ? <></> : <div className="info text-center">
                                                <h3>Counter-Strike: Global Offensive</h3>
                                                <div className="imges row ">
                                                    <div className="col">
                                                        <img src={item.about.img1} alt="" />
                                                        <img src={item.about.img2} alt="" />
                                                    </div>
                                                    {isMediaImageR ? <></> : <div className="col">
                                                        <img src={item.about.img3} alt="" />
                                                        <img src={item.about.img4} alt="" />
                                                    </div>}
                                                </div>
                                                <div className=''>
                                                    <h4>{t ? "Now available" : "Artıq mövcuddur"}</h4>
                                                    <div className='d-flex justify-content-between'>
                                                        <p>{t ? "Top Seller" : "Ən çox satan"} </p>
                                                        <p>{t ? "Free" : "Pulsuz"}</p>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero1