import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Modules/Pages/LogIn/LogIn';
import Dashboard from './Modules/Pages/Dashboard/Dashboard';
import Messages from './Modules/Pages/Messages/Messages';
import Projects from './Modules/Pages/Projects/Projects';
import AddProjects from './Modules/Pages/AddProjects/AddProjects';


function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/messages" element={<Messages />} />
      <Route path="/add" element={<AddProjects />} />

    </Routes>
  </>
  );
};

export default App;

