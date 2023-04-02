import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../pages/About'
import Main from '../pages/Main'
import Support from '../pages/Support'
import SupportDetails from '../detailscomponents/SupportDetails'
import { SupportProvider } from '../context/SupportContext'
const App = () => {

  return (
    <BrowserRouter>
      <SupportProvider>
        <></>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/support/:id' element={<SupportDetails/>}></Route>
      </Routes>
      </SupportProvider>
    </BrowserRouter>
    
  )
}

export default App