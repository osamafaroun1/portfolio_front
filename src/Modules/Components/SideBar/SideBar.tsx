import React from 'react';
import './SideBar.css';
import {Link } from 'react-router-dom';


const SideBar: React.FC = () => {
    return (
    <div className="sidebar">
            <img src="./logo.png" alt="" />
        <ul>
            <li> <Link to= "/Projects">Projects</Link></li>
            <li> <Link to= "/Messages">Messages</Link></li>
            <li></li>

        </ul>

        </div>
    );
};

export default SideBar;
