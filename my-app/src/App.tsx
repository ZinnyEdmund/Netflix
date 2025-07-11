import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Sign from './SignUppage/Sign'


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Sign />} />
    </Routes>
  )
}

export default App