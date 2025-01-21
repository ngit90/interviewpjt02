
import './App.css'
import Admindash from './component/Dashboard/Admindash'
import Userdash from './component/Dashboard/Userdash'
import Homepage from './component/Homepage/Homepage'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Router>
      <Routes>

        <Route path='/' exact element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userdash' element={<Userdash />} />
        <Route path='/admindash' element={<Admindash />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
