import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store'

const NotFound:React.FC = () => {
  const {lang} = useAppSelector(state => state.auth);
  const t = lang === 'en';
  return (
    <div id='notfound'>
      <h1>404</h1>
      <p>{t?"Sorry! It looks like the page you are looking for is not available!":"Bağışlayın! Deyəsən, axtardığınız səhifə mövcud deyil!"}</p>
      <Link to="/" >
        <button>{t?"Return to home page":"Əsas səhifəyə qayıt"}</button>
      </Link>
    </div>
  )
}

export default NotFound