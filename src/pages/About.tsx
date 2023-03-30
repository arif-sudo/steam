import React from 'react'
import Navbar0 from '../components/Navbar0'
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


const About = () => {
    const isMode = useMediaQuery('(max-width: 1100px)')
    const isModeSlide = useMediaQuery('(max-width: 768px)')
    const videoEl = useRef<HTMLVideoElement>(null)
    const attemptPlay = () => {
        if (videoEl.current)
            videoEl.current.play()
    };

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
            <Navbar0 />
            <div id='about'>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-sm-12 col-lg-6 left">
                            <img className='' src="https://cdn.cloudflare.steamstatic.com/store//about/logo_steam.svg" alt="" />
                            <div id="blur_box1"></div>
                            <div className="about_subtitle">Steam is the ultimate destination for  playing, discussing, and creating games.</div>
                            <div className="online_stats">
                                <div className="online">
                                    <h5>ONLINE</h5>
                                    <p>30,231,600</p>
                                </div>
                                <div className="playingnow">
                                    <h5>PLAYING NOW</h5>
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
                        <h3 className='text-center'>Access Games Instantly</h3>
                        <p className='text-center'>With nearly 30,000 games from AAA to indie and everything in-between. Enjoy exclusive deals, automatic game updates, and other great perks.</p>
                        <Link to='/' ><h5>Browse the store &rarr;</h5></Link>

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
                                    <h2>Join The Community</h2>
                                    <p>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                                    <h5>Visit the community &rarr;</h5>
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
                                    <h2>Experience Steam Hardware</h2>
                                    <p>We created the Steam Deck and the Valve Index headset to make gaming on the PC even better.</p>
                                    <h5>Experience Steam Hardware &rarr;</h5>
                                </div>
                            </div>

                        </div>
                        <div className="row about_ctas_row1 d-flex  align-items-center  my-5">
                            <div className="col-sm-12 col-md-6">
                                <div className="ctas_community mt-5">
                                    <img width={120} src="https://cdn.cloudflare.steamstatic.com/store/about/logo-steamworks.svg" alt="" />
                                    <h2>Release your Game</h2>
                                    <p>Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.</p>
                                    <h5>Experience Steam Hardware &rarr;</h5>
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
                                            <Card.Title className='feature_title'>Steam Chat</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
                                            </Card.Text>
                                            <h5>Learn more &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-gamehubs.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title'>Game Hubs</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.
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
                                            <Card.Title className='feature_title '>Broad Casts</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.
                                            </Card.Text>
                                            <h5>Learn more &rarr;</h5>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className='features_swiperslide' >
                                    <div id="card_logo">
                                        <img src="https://cdn.cloudflare.steamstatic.com/store/about/icon-steamworkshop.svg" alt="err" />
                                    </div>
                                    <Card className="feature_info text-center">
                                        <Card.Body>
                                            <Card.Title className='feature_title'>Steam Workshop</Card.Title>
                                            <Card.Text className='feature_text'>
                                                Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
                                            </Card.Text>
                                            <h5>Learn more &rarr;</h5>
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
                                    <h1 className='text-center' style={{ fontSize: "70px" }}>Features</h1>
                                    <p className='text-center' style={{ fontSize: "30px", width: "700px" }}>We are constantly working to bring new updates and features to Steam, such as:</p>
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