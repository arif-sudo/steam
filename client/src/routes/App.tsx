import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC, useEffect } from 'react'
import About from '../pages/About'
import Main from '../pages/Main'
import Support from '../pages/Support'
import SupportDetails from '../detailscomponents/SupportDetails'
import { SupportProvider } from '../context/SupportContext'
import Login from '../components/Login'
import NotFound from '../pages/NotFound'
import Games from '../pages/Games'
import { CartProvider } from "react-use-cart";
import Cart from '../pages/Cart'
import BlogList from '../pages/BlogList'
import AddBlog from '../pages/admin/update/AddBlog'
import EditBlog from '../pages/admin/update/EditBlog'
import Dashboard from '../pages/admin/Dashboard'
import { GameProvider } from '../context/GameContext'

import { checkauth } from '../slice/store'
import { useAppDispatch, useAppSelector } from '../store'
import { Navigate } from 'react-router-dom'
import Wishlist from '../pages/Wishlist'

const App:FC = () => {
  const {user} = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const nl = <Navigate to='/login' />

  useEffect(() => {
   if (localStorage.getItem('token')){
      dispatch(checkauth())
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <BrowserRouter>
      <SupportProvider>
        <></>
        <GameProvider>
          <></>
          <CartProvider>
            <Routes>
              <Route path='/' element={user.isAuth ? <Main /> : nl} />
              <Route path='/login' element={ user.isAuth ? <Navigate to='/' /> : <Login />} /> 
              <Route path='/about' element={<About /> } /> 
              <Route path='/support' element={<Support />} /> 
              <Route path='/support/:id' element={<SupportDetails />} /> 
              <Route path='/games' element={<Games />} /> 
              <Route path='/wishlist' element={<Wishlist />} /> 
              <Route path='/cart' element={<Cart />} /> 
              <Route path='/blog' element={user.user.isActivated ? <BlogList /> : <h1>Activate your email</h1>} /> 
              <Route path='/addblog' element={user.user.isActivated ? <AddBlog /> : <h1>Activate your email</h1>} /> 
              <Route path='/admin' element={user.user.isActivated ? <Dashboard /> : <h1>Activate your email</h1>} />
              <Route path='/editblog/:id' element={user.user.isActivated ? <EditBlog /> : <h1>Activate your email</h1>} /> 
              <Route path='*' element={<NotFound />} /> 
            </Routes>
          </CartProvider>
        </GameProvider>
      </SupportProvider>
    </BrowserRouter>

  )
}

export default App