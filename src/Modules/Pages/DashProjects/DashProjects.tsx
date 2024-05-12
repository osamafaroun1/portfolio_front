import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Modules/Pages/LogIn/LogIn';
import Dashboard from './Modules/Pages/Dashboard/Dashboard';
import DashProjects from './Modules/Pages/DashProjects/DashProjects';
import Messages from './Modules/Pages/Messages/Messages';






function App () {
  return (
    <>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/projects" element={<DashProjects />} />
    <Route path="/messages" element={<Messages />} /></Routes>
  </>

);
};

export default App;
