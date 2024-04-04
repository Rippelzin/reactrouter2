import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products'
import Home from './pages/Home'
import PrivateRoutes from './utils/PrivateRoutes'

import './App.css'

function App() {
  

  return (
    <div>
       <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route  element={<Products/>} path='/products'/>
              <Route element={<Home/>} path='/' exact />
          </Route>
          <Route  element={<Login/>} path='/login'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
