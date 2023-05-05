import { useContext } from 'react'
import { SupportContext } from '../context/SupportContext'
import { useParams } from 'react-router-dom'
import NotFound from '../pages/NotFound'
const SupportDetails = () => {
  const [supItem] = useContext<any>(SupportContext)
  const { id } = useParams()
  const details = supItem.find((element: any) => element.id === Number(id))

  return (
    <>
      {
        details 
          ? (
            <div id="support_details">
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
                          <div className='details_par'>Account: <p className='details_p'>Arif</p> </div>
                          <div className='details_par'>Playtime: <p className='details_p'>{details.playtime}</p> </div>
                          <div className='details_par'>Purchased: <p className='details_p'>{details.purchased}</p></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">Gameplay or technical issue.</h5>
                        </div>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">DLC or bonus content is missing</h5>
                        </div>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png"  alt="err" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card w-75 px-3" >
                        <div className="card-body">
                          <h5 className="card-title">I want to parmanently remove this game from my account</h5>
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