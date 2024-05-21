import React, {  } from "react";
import {NavLink} from 'react-router-dom';
 
function Header()
{
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg " >
          <div className="container">
             <NavLink to="/" className="navbar-brand"><span>Port</span> folio</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Projectlist" className="nav-link"> Project List</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/addProject" className="nav-link">Add Project</NavLink>
            </li> 
          </ul>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}
export default Header;