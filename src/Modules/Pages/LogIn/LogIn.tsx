import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './LogIn.css';

const LogIn: React.FC = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const sendData = (event: any) => {
        event.preventDefault();
    /* fetch("api", {
            method: "POST",
            body: JSON.stringify({"email": email , "password": password})
        }).then(res => res.json())
        .then(res => console.log(res))
        */
    axios.post("api",{"email": email , "password": password})
    .then( (res :any) => console.log(res));
    }
    return (
        <>
        <div className="login"> 
        <form onSubmit={()=>sendData(event)}>
            <img src="./logo.png" alt="" />
            <input type="text" placeholder="email" onChange={(event)=>setemail(event.target.value)} />
            <input type="password" placeholder="password" onChange={(event)=>setpassword(event.target.value)} />
            <input type="submit" value="login" />

        </form>
        </div>
        </>
    );

}
export default LogIn;