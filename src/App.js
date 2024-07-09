import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Notfound from './Notfound'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/src/Notfound.jsx" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App

