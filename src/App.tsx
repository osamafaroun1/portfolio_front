import React from 'react';
import './App.css';
import NavBar from './Modules/Components/NavBar/NavBar';
import Hero from './Modules/Components/Hero/Hero';
import img1 from '../src/assets/Hero.png'

function App () {
  return (
    <div className="app">
      <div className="app-nav">
      <NavBar /> 
      </div>
      <div className="app-hero">
      <Hero 
    img={img1}
    title1=" Software Engineering "
    title2 =" looking For a FullStack developer"
    desc= " i have experience in React and Laravel"
    btn1= " DownLoad Cv "
/>
      </div>
</div>

);
};

export default App;
