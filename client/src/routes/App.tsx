import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../pages/About'
import Main from '../pages/Main'
import Support from '../pages/Support'
import SupportDetails from '../detailscomponents/SupportDetails'
import { SupportProvider } from '../context/SupportContext'
import Login from '../components/Login'
import Navbar0 from '../components/Navbar0'
// import NotFound from '../components/NotFound'
import Games from '../components/Games'
import { CartProvider } from "react-use-cart";
import Cart from '../components/Cart'
const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
      <SupportProvider>
        <Routes>
         <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Navbar0 />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/support/:id' element={<SupportDetails/>}></Route>
        <Route path='/products' element={<Games/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        {/* <Route path='*' element={<NotFound/>}></Route> */}
        {/*<Route path='/games/:id' element={<SupportDetails/>}></Route> */}
      </Routes>
      </SupportProvider>
      </CartProvider>
    </BrowserRouter>
    
  )
}

export default App