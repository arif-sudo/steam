import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../pages/About'
import Main from '../pages/Main'
import Support from '../pages/Support'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App