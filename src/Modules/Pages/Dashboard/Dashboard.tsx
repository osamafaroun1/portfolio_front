import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
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
        <div className="dash-container">
        <div className="dashboard">
            <TopBar />
            </div>
            <div className="Side">
                <SideBar />
            </div>
            <p>To Show, Create, And Delete  Projects and sShow All Messages</p>
            </div>
        </>
    );

}
export default Dashboard;