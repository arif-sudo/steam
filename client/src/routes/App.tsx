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
import { useAppDispatch } from '../store'


const App:FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
   if (!localStorage.getItem('token')){
      dispatch(checkauth())
   }
  }, [dispatch])
  

  return (
    <BrowserRouter>
      <SupportProvider>
        <></>
        <GameProvider>
          <></>
          <CartProvider>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/support' element={<Support />}></Route>
              <Route path='/support/:id' element={<SupportDetails />}></Route>
              <Route path='/games' element={<Games />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/blog' element={<BlogList />}></Route>
              <Route path='/addblog' element={<AddBlog />}></Route>
              <Route path='/admin' element={<Dashboard />} />
              <Route path='/editblog/:id' element={<EditBlog />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </CartProvider>
        </GameProvider>
      </SupportProvider>
    </BrowserRouter>

  )
}

export default App