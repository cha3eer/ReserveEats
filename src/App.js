import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Notfound from './Notfound'
import Products from './products/Products'
import Contact from './Contact/Contact'
import Footerrr from './Footerrr'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
 
