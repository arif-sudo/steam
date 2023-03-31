import React from 'react'
import Navbar0 from '../components/Navbar0'
import SingleSupport from '../singlecomponents/SingleSupport'
import { useContext} from 'react'

import { SupportContext } from '../context/SupportContext'

// interface ItemType {
//   id: number;
//   title: string;
//   playtime: string;
//   purchased: string;
//   icon: string;
//   background: string;
// }

const Support: React.FC = () => {
  const [supItem, ] = useContext<any>(SupportContext)

  return (
    <>
      <Navbar0 />
      <div id="support">
        <div className="container">
          <div className="row d-flex flex-column">
            <div className="col">
              <h2>Steam support</h2>
              <h3>What do you need help with?</h3>
              <p>Recent Products</p>
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
                  <h5 className="card-title">Games, Software, etc.</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">My Account</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">Steam Client</h5>
                </div>
                <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
              </div>
            </div>
            <div className="col-12">
              <div className="card w-75 px-3" >
                <div className="card-body">
                  <h5 className="card-title">Purchases</h5>
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