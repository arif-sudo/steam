import { useContext } from 'react'
import { SupportContext } from '../context/SupportContext'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../store'
import NotFound from '../pages/NotFound'
import Navbar0 from '../components/Navbar0'

const SupportDetails = () => {
  const [supItem] = useContext<any>(SupportContext)
  const { id } = useParams()
  const details = supItem.find((element: any) => element.id === Number(id))
  const { lang } = useAppSelector(state => state.auth)
  const t = lang === 'en';

  return (
    <>
      {
        details 
          ? (
            <div id="support_details">
              <Navbar0 />
              <div className="container">
                <div className="row d-flex flex-column">
                  <div className="col supparent">
                    <h2>Steam support</h2>
                    <div className="details_card" >
                      <div className="d-flex w-100 px-3 justify-content-between ">
                        <div className="d-flex">
                          <img src={details.background} className="me-3" width={180} height={80} alt="err" />
                          <h3>{details.title}</h3>
                        </div>

                        <div className="mt-3">
                          <div className='details_par'>{t?"Account:":"Hesab:"} <p className='details_p'>Arif</p> </div>
                          <div className='details_par'>{t?"Playtime:":"Oyun vaxtı:"} <p className='details_p'>{details.playtime}</p> </div>
                          <div className='details_par'>{t?"Purchased:":"Alınan:"} <p className='details_p'>{details.purchased}</p></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">{t?"Gameplay or technical issue.":"Oyun və ya texniki problem."}</h5>
                        </div>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">{t?"DLC or bonus content is missing":"DLC və ya bonus məzmun yoxdur"}</h5>
                        </div>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png"  alt="err" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">{t?"I want to parmanently remove this game from my account":"Bu oyunu hesabımdan həmişəlik silmək istəyirəm"}</h5>
                        </div>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png"  alt="err" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          )
          : <NotFound />
      }
    </>
  )
}

export default SupportDetails