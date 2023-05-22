import React from 'react'
import SingleSupport from '../singlecomponents/SingleSupport'
import { useContext} from 'react'
import { useAppSelector } from '../store'
import { SupportContext } from '../context/SupportContext'
import Navbar0 from '../components/Navbar0'


const Support: React.FC = () => {
  const [supItem ] = useContext<any>(SupportContext)
  const { lang } = useAppSelector(state => state.auth)
  const t = lang === 'en';
  return (
    <>
      <div id="support">
        <Navbar0 />
        <div className="container">
          <div className="row d-flex flex-column">
            <div className="col">
              <h2>Steam {t? "support":"dəstək"}</h2>
              <h3>{t?"What do you need help with?":"Sizə nə ilə bağlı kömək lazımdır?"}</h3>
              <p>{t?"Recent Products":"Son Məhsullar"}</p>
            </div>
          </div>
          <div className="row g-4">
            {supItem.map((element:any, index:number) => (
              <SingleSupport element={element} key={index} />
            ))}
          </div>
          <div className="row g-4 my-5">
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">{t?"Games, Software, etc.":"Oyunlar, proqram təminatı və s."}</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">{t?"My Account":"Mənim Hesabım"}</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">Steam {t?"Client":"Müştəri"}</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">{t?"Purchases":"Satınalmalar"}</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support