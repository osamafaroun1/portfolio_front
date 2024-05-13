import { useState } from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('Home');

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
    };

    const [menuActive, setmenuActive] = useState<boolean>(false);
    return (
        <>
        <div className="Navbar-Container">
            <h1><span>Port</span> folio </h1>
            <div className="items">
                <span className={activeSection === 'Home' ? 'active' : ''} onClick={() => handleSectionClick('Home')}>Home</span>
                <span className={activeSection === 'AboutMe' ? 'active' : ''} onClick={() => handleSectionClick('AboutMe')}>AboutMe</span>
                <span className={activeSection === 'Projects' ? 'active' : ''} onClick={() => handleSectionClick('Projects')}>Projects</span>
                <span className={activeSection === 'ContactUs' ? 'active' : ''} onClick={() => handleSectionClick('ContactUs')}>ContactUs</span>
            </div>
            <button> Login</button>
            <button className="menu-button" onClick={ () => setmenuActive(prev => !prev)}>
                <i className={(menuActive)? "fa-solid fa-xmark" : "fa-solid fa-list"}></i>
            </button>
        </div>
        <div className={(menuActive)? "nav-menu active" : "nav-menu"}>
            <ul>
                
            <li><span className={activeSection === 'Home' ? 'active' : ''} onClick={() => handleSectionClick('Home')}>Home</span></li>
            <li><span className={activeSection === 'AboutMe' ? 'active' : ''} onClick={() => handleSectionClick('AboutMe')}>AboutMe</span></li>
            <li><span className={activeSection === 'Projects' ? 'active' : ''} onClick={() => handleSectionClick('Projects')}>Projects</span></li>
            <li><span className={activeSection === 'ContactUs' ? 'active' : ''} onClick={() => handleSectionClick('ContactUs')}>ContactUs</span></li>
            <button> Login</button>
            </ul>
        </div>
        </>
    );
};

export default NavBar;