import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './pages/Destination'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='destination' element={<Destination/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
