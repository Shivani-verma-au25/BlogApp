import React from 'react'
import Header from './header/Header'
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import AddBlog from './components/AddBlog'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddBlog />} />
      </Routes>
    </div>
  )
}

export default App