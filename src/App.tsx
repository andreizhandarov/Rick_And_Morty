import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CardDetails } from './components/Cards/CardDetails'
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
        <Route path='/:id' element={<CardDetails />}/>

        <Route path='/location' element={<Location />}/>
        <Route path='/location/:id' element={<CardDetails />}/>

        <Route path='/episode' element={<Episode />}/>
        <Route path='/episode/:id' element={<CardDetails />}/>
        
      </Routes>
    </div>
  )
}

export default App
