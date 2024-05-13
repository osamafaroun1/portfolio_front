
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Login } from './Modules/Pages/Login'
import Home from './Modules/Pages/Home/Home'
import NavBar from './Modules/Components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
 <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
    </div>
)}
export default App
