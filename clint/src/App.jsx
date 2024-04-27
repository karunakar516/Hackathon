import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profiles from './pages/Profiles';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profiles/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
