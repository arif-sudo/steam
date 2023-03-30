import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../pages/About'
import Main from '../pages/Main'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App