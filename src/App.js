import './App.css'
import Soda from './Soda'
import Candy from './Candy'
import Chips from './Chips'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VendingMachine from './VendingMachine'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
          <Route path="/candy" element={<Candy />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
