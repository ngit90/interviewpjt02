
import './App.css'
import Admindash from './component/Dashboard/Admindash'
import Homepage from './component/Homepage/Homepage'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Videopage from './component/Dashboard/Videopage'

function App() {

  const userrole = useSelector((state) => state.auth.userrole);
	console.log(`userrole : ${userrole}`);

  return (
    <>
    <Router>
      <Routes>
        {userrole == 'user' && <Route path='/login' element={<Navigate replace to="/videopage" />} /> }
        {userrole == 'admin' && <Route path='/login' element={<Navigate replace to="/admindash" />} /> }
        {!userrole  && <Route path='/admindash' element={<Navigate replace to="/" />} /> }
        {!userrole  && <Route path='/videopage' element={<Navigate replace to="/" />} /> }
        <Route path='/' exact element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/videopage' element={<Videopage />} />
        <Route path='/admindash' element={<Admindash />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
