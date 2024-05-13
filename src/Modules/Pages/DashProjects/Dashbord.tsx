import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../../Pages/Login/Login';
import Dashboard from '../../Pages/Dashbord/Dashbord';
import DashProjects from '../../Pages/DashProjects/Dashbord';
import Messages from '../../Pages/Messages/Message';

function App () {
  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/projects" element={<DashProjects />} />
    <Route path="/messages" element={<Messages />} /></Routes>
  </>

);}

export default App;