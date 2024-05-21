
import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home} from './Modules/Pages/Home/Home'
import LogIn from './Modules/Pages/Login/Login'

import AddProject from './Modules/Pages/AddProject/AddProject'
import ProjectList from './Modules/Pages/Projectlist/Projectlist'
import NavBar from './Modules/Components/NavBar/NavBar'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
      { <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/AddProject' element={<AddProject/>} />
        <Route path='/ProjectList' element={<ProjectList/>} />
      </Routes>}
    </div>
)}
export default App
