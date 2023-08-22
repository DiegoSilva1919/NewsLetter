import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/home.jsx'
import Thanks from './Pages/Thanks/thanks.jsx'

const myRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  )
}

export default myRoutes
