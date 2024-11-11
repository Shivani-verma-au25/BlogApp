import React from 'react'
import Header from './header/Header'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home} />
      </Routes>
    </div>
  )
}

export default App