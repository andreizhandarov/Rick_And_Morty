import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Characters } from './components/Pages/Characters'
import { Episode } from './components/Pages/Episode'
import { Location } from './components/Pages/Location'



function App() {
      

  return (
    <div>
      <NavBar />
      <Routes >
        <Route path='/' element={<Characters />}/>
        <Route path='/episode' element={<Episode />}/>
        <Route path='/location' element={<Location />}/>
      </Routes>
    </div>
  )
}

export default App
