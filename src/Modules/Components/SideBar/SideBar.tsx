import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

interface Props {}

const SideBar: React.FC<Props> = () => {
    return (
        <div className="sidebar-container">
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/messages">
                Messages
            </NavLink>
        </div>
    );
};

export default SideBar;
