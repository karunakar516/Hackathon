import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profiles from './pages/Profiles';
import Upload from './components/Upload';
import Login from './components/Login';
import Registration from './components/Registration';
import Data from './components/Data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profiles/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/home' element={<Data/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
