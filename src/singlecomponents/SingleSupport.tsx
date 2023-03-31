import React from 'react'
import { Link } from 'react-router-dom'

const SingleSupport = ({ element }: any) => {
    return (
        <>
            {console.log(element.title)}
            <div className="col-12">
                <div className="card w-75 px-3" >
                    <img src={element.icon} height={40} width={40} className="card-img-top w-auto" alt="err" />
                    <div className="card-body">
                        <Link to={`/support/${element.id}`}>
                            <h5 className="card-title">{element.title}</h5>
                        </Link>
                    </div>
                    <Link to={`/support/${element.id}`}>
                        <img src="https://help.steampowered.com/public/images/arrow_right.png" alt="err" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SingleSupport