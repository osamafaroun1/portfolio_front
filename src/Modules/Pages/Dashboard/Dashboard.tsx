import React from 'react';
//import './Dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => { 
        localStorage.setItem("token","test")
        if(!localStorage.getItem("token")) {
        navigate("/login");
        }
    }, []);

    return (
        <>
        <div className="dashboard">
            <SideBar />
            <div className="container">
            </div>
            </div>
        </>
    );

}
export default Dashboard;