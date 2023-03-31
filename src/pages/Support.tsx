import React from 'react'
import Navbar0 from '../components/Navbar0'
import SingleSupport from '../singlecomponents/SingleSupport'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ItemType {
  map(arg0: (element: any, index: number) => JSX.Element): React.ReactNode
  id: number;
  title: string;
  playtime: string;
  purchased: string;
  icon: string;
  background: string;

}

const Support: React.FC = () => {
  const [supItem, setSupItem] = useState<ItemType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://mocki.io/v1/1ef72dc3-cad0-46b6-ab28-4e8a1d154fe0')
      setSupItem(response.data)
    }
    getData()
  }, [])


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
            {supItem.map((element, index) => (
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