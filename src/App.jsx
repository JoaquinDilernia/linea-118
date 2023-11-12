import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'



function App() {

  return (
    <>
<NavBar/>

<Routes>
<Route path='/' element={<Home />} />

</Routes>

    </>
  )
}

export default App
