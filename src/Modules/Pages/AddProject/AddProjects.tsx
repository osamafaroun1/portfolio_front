
import SideBar from '../../Components/SideBar/SideBar';
import './AddProjects.css';
import { useState } from 'react';

const AddProjects: React.FC = () => {
const [name, setname] = useState();
const [image, setimage] = useState();

    const sendDate = (event)=>{
        event.preventDefault();
        let data = {name: name , image: image }
        console.log(data);
    }
    return (
        <>
        <div className="addprojects">
            <SideBar />
            <div className="container">
                <h1> Add Project</h1>
                <form onSubmit={(event)=>sendDate(event)}>
                    <input type="text" placeholder='name' onChange={(event)=>{setname(event.target.value)}}/> 
                    <input type="file" onChange={(event)=>{setimage(event.target.files[0])}} /> 
                    <input type="submit" value="add Project"/> 


                </form>
            </div>

            </div>
        </>
    );
};

export default AddProjects;