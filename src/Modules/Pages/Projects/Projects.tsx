import SideBar from '../../Components/SideBar/SideBar';
import React from 'react';
import {Link } from 'react-router-dom';
import './Projects.css';

const Projects:  React.FC = () => {
    const data = [{id:1,name:" first project" ,img: "./assets/"},
{ id:2,name:" second project" ,img: "./assets/" },
{id:3,name:" third project" ,img: "./assets/" }
]
return (
    <div className="projects">
        <SideBar />
            <div className="container">
                <div className="header">
                <h1> All Projects</h1>
                <Link to="/add "> add projects</Link>
                </div>
                <table>
                    <thead>
                        <tr>

                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                    <th>action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{return(
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td><img src={element.img} alt=""/> </td>
                            <td><button>show</button> <button>update</button> <button>delete</button></td>

                        </tr>
                        )})}
                    </tbody>
                </table>
                
            </div>
    </div>
);
};

export default Projects;
