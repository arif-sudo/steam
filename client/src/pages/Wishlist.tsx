import React from 'react'
import { useAppSelector } from '../store'

const Wishlist = () => {
    const wish = useAppSelector(state => state.wish)
    console.log(wish)
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist