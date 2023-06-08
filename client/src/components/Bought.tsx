import React from 'react'
import { useAppSelector } from '../store'

const Bought = () => {
    const {lang} = useAppSelector(state => state.auth)
    const t = lang === 'en'
  return (
    <div id="bought">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>
                        
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bought