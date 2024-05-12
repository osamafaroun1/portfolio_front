import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Modules/Pages/LogIn/LogIn';
import Dashboard from './Modules/Pages/Dashboard/Dashboard';
import Messages from './Modules/Pages/Messages/Messages';

function App () {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/projects" element={<ProjectsPage />} /> 
      <Route path="/messages" element={<Messages />} />
    </Routes>
  </>
  );
};

export default App;

