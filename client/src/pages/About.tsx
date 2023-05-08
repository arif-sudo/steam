import React from 'react'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'usehooks-ts'
import video from '../video/about_video.mp4'

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from 'react-bootstrap/Card';
import { useAppSelector } from '../store'

const About = () => {
    const { lang } = useAppSelector(state => state.auth)
    const isMode = useMediaQuery('(max-width: 1100px)')
    const isModeSlide = useMediaQuery('(max-width: 768px)')
    const videoEl = useRef<HTMLVideoElement>(null)
    const attemptPlay = () => {
        if (videoEl.current)
            videoEl.current.play()
    };

    const t = lang === 'en';

    useEffect(() => {
        attemptPlay();
        aos.init({
            duration: 2000,
            once: false
        })
        // aos.refresh()
    }, []);
    return (
        <>
            <div id='about'>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-sm-12 col-lg-6 left">
                            <img className='' src="https://cdn.cloudflare.steamstatic.com/store//about/logo_steam.svg" alt="" />
                            <div id="blur_box1"></div>
                            <div className="about_subtitle">{t ? "Steam is the ultimate destination for  playing, discussing, and creating games." : "Steam, oyun oynamaq, müzakirə etmək və yaratmaq üçün son yerdir."}</div>
                            <div className="online_stats">
                                <div className="online">
                                    <h5>{t ? "ONLINE" : "ONLAYN"}</h5>
                                    <p>30,231,600</p>
                                </div>
                                <div className="playingnow">
                                    <h5>{t ? "PLAYING NOW" : "INDI OYNAYIR"}</h5>
                                    <p>8,466,295</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 right">
                            <div id="blur_box2"></div>
                            <video ref={videoEl} className='img-fluid' src={video} playsInline autoPlay loop />

                        </div>
                    </div>
                    <div className="about_body">
                        <h3 className='text-center'>{t ? "Access Games Instantly" : "Oyunlara Dərhal daxil olun"}</h3>
                        <p className='text-center'>{t ? "With nearly 30,000 games from AAA to indie and everything in-between. Enjoy exclusive deals, automatic game updates, and other great perks." : "AAA-dan indie-ə qədər təxminən 30.000 oyun və aralarındakı hər şey. Eksklüziv sövdələşmələrdən, avtomatik oyun yeniləmələrindən və digər möhtəşəm bonuslardan həzz alın." }</p>
                        <Link to='/' ><h5>{t ? "Browse the store" : "Mağazaya baxın"} &rarr;</h5></Link>

                        {isMode
                            ? <></>
                            : <>
                                <div className='aos_image1 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/capsule_231x87.jpg?t=1679677298" alt="" /></div>
                                <div className='aos_image2 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/236390/capsule_231x87.jpg?t=1679399646" alt="" /></div>
                                <div className='aos_image3 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/capsule_231x87.jpg?t=1679674814" alt="" /></div>
                                <div className='aos_image4 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/311210/capsule_231x87.jpg?t=1646763462" alt="" /></div>

                                <div className='aos_image5 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_231x87.jpg?t=1668125812" alt="" /></div>
                                <div className='aos_image6 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_231x87.jpg?t=1677534139" alt="" /></div>
                                <div className='aos_image7 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_231x87.jpg?t=1679171844" alt="" /></div>
                                <div className='aos_image8 aos_image' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_231x87.jpg?t=1678876960" alt="" /></div>
                            </>}

                    </div>

                </div>
                <div className="about_ctas">
                    <div className="container">
                        <div className="row about_ctas_row1 d-flex align-items-center  mt-5">
                            <div className="col-sm-12 col-md-6">
                                <div className="ctas_community mt-5">
                                    <h2>{t ? "Join The Community" : "İcmaya Qoşulun"}</h2>
                                    <p>{t ? "Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops." : "Yeni insanlarla tanış olun, qruplara qoşulun, klanlar yaradın, oyunda söhbət edin və s.! 100 milyondan çox potensial dost (və ya düşmən) ilə əyləncə heç vaxt dayanmır."}</p>
                                    <h5>{t ? "Visit the community": "Cəmiyyəti ziyarət edin"} &rarr;</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className='mt-3' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community.png" alt="err" /></div>

                            </div>
                        </div>
                        <div className="row about_ctas_row2 d-flex  align-items-center  my-5">
                            <div className="col-sm-12 col-md-6">
                                <div className='mt-3 position-relative' data-aos="fade-up">
                                    <img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png" alt="err" />
                                    <img className='img-fluid  position-absolute start-0' src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt2.png" alt="err" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="ctas_community mt-5">
                                    <h2>{t ? "Experience Steam Hardware" : "Buxar Təchizatı təcrübəsi"}</h2>
                                    <p>{t ? "We created the Steam Deck and the Valve Index headset to make gaming on the PC even better." : "Biz PC-də oyunu daha da yaxşılaşdırmaq üçün Steam Deck və Valve Index qulaqlıqlarını yaratdıq."}</p>
                                    <h5>{t ? "Experience Steam Hardware" : "Buxar Təchizatı təcrübəsi"} &rarr;</h5>
                                </div>
                            </div>

                        </div>
                        <div className="row about_ctas_row1 d-flex  align-items-center  my-5">
                            <div className="col-sm-12 col-md-6">
                                <div className="ctas_community mt-5">
                                    <img width={120} src="https://cdn.cloudflare.steamstatic.com/store/about/logo-steamworks.svg" alt="" />
                                    <h2>{t ? "Release your Game": "Oyununuzu buraxın"}</h2>
                                    <p>{t ? "Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam." : "Steamworks, oyun tərtibatçılarına və nəşriyyatçılarına Steam-də oyunların yayılmasından maksimum yararlanmağa kömək edən alətlər və xidmətlər toplusudur."}</p>
                                    <h5>{t ? "Experience Steam Hardware" : "Buxar Təchizatı təcrübəsi"} &rarr;</h5>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className='mt-3' data-aos="fade-up"><img className='img-fluid' src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks.png" alt="err" /></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_features">

                    {isModeSlide
                        ? (
                            <Swiper className=''
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steamchat.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body className=''>
                                            <Card.Title className='feature_title'>Steam {t?"Chat":"Söhbət"}</Card.Title>
                                            <Card.Text className='feature_text'>
                                                {t?"Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.":"Steam-dən çıxmadan mətn və ya səs vasitəsilə dostlarınız və ya qruplarınızla danışın. Videolar, Tweetlər, GIF-lər və s. dəstəklənir; ağılla istifadə edin."}
                                            </Card.Text>
                                            <h5>{t ? "Learn more":"Daha ətraflı"} &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-gamehubs.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title'>{t?"Game Hubs":"Oyun mərkəzləri"}</Card.Title>
                                            <Card.Text className='feature_text'>
                                                {t?"Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.":"Oyununuzla bağlı hər şey, hamısı bir yerdə. Müzakirələrə qoşulun, məzmun yükləyin və yeni yeniləmələrdən ilk siz xəbərdar olun."}
                                            </Card.Text>
                                            <h5>{t ? "Learn more":"Daha ətraflı"} &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-broadcasts.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title '>{t ? "Broad Casts":"Verlişlər"}</Card.Title>
                                            <Card.Text className='feature_text'>
                                                {t?"Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.":"Oyununuzu bir düyməyə klikləməklə canlı yayımlayın və oyununuzu dostlarınız və ya cəmiyyətin qalan hissəsi ilə paylaşın."}
                                            </Card.Text>
                                            <h5>{t ? "Learn more":"Daha ətraflı"} &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steamworkshop.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title'>{t?"Steam Workshop":"Steam Studiyası"}</Card.Title>
                                            <Card.Text className='feature_text'>
                                                {t?"Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.":"Steam-dən çıxmadan mətn və ya səs vasitəsilə dostlarınız və ya qruplarınızla danışın. Videolar, Tweetlər, GIF-lər və s. dəstəklənir; ağılla istifadə edin."}
                                            </Card.Text>
                                            <h5>{t ? "Learn more":"Daha ətraflı"} &rarr;</h5>
                                            {/* devamin getir !!! */}
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steammobile.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title '>Available on Mobile</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Access Steam anywhere from your iOS or Android device with the Steam mobile app.
                                            </Card.Text>
                                            <h5>Learn more &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-broadcasts.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title'>Early Access to Games</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.
                                            </Card.Text>
                                            <h5>Learn more &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        ) :
                        (
                            <div className="container  my-5">
                                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                                    <h1 className='text-center' style={{ fontSize: "70px" }}>{t?"Features":"Funksiyalar"}</h1>
                                    <p className='text-center' style={{ fontSize: "30px", width: "700px" }}>{t?"We are constantly working to bring new updates and features to Steam, such as:":"Biz daim Steam-ə yeni yeniləmələr və funksiyalar gətirmək üçün çalışırıq, məsələn:"}</p>
                                </div>
                                <div className="row mb-5">
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steamchat.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body className=''>
                                                <Card.Title className='feature_title'>Steam Chat</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-gamehubs.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body>
                                                <Card.Title className='feature_title'>Game Hubs</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-controllers.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body className=''>
                                                <Card.Title className='feature_title'>Controller Support</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Steam encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steamworkshop.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body>
                                                <Card.Title className='feature_title'>Steam Workshop</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steammobile.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body>
                                                <Card.Title className='feature_title '>Available on Mobile</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Access Steam anywhere from your iOS or Android device with the Steam mobile app.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center align-items-center">
                                        <div id="card_logo">
                                            <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-broadcasts.svg" alt="err" />
                                        </div>
                                        <Card className="feature_info text-center">
                                            <Card.Body>
                                                <Card.Title className='feature_title'>Early Access to Games</Card.Title>
                                                <Card.Text className='feature_text'>
                                                    Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default About