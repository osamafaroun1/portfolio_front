import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import './AddProjects.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProjects: React.FC = () => {
const [name, setname] = useState();
const [image, setimage] = useState();
const navigate = useNavigate();


    const sendDate = (event)=>{
        event.preventDefault();
        let data = {name: name , image: image }
        console.log(data);
    }
    useEffect(() => { 
        localStorage.setItem("token","test")
        if(!localStorage.getItem("token")) {
        navigate("/login");
        }
    }, []);

    return (
        <>
        <div className="addprojects">
            <SideBar />
            <div className="container">
                <h1> Add Project</h1>
                <form onSubmit={(event)=>sendDate(event)}>
                    <input type="text" placeholder='name' onChange={(event)=>{setname(event.target.value)}}/> 
                    <label htmlFor="image"> add Image</label>
                    <input type="file" onChange={(event)=>{setimage(event.target.files[0])}} id='image' /> 
                    <input type="submit" value="add Project" /> 
                </form>

            </div>

            </div>
        </>
    );
};

export default AddProjects;