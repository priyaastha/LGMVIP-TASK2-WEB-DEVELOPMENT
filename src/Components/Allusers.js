import React, { useState } from 'react'
import User from './User';


export function Allusers() {

// var users=[];
const [user,setUser]=useState([]);
const [showSpinner,setShowSpinner]=useState(false);

const getData=async()=>
{
    setShowSpinner(true);
    var res=await fetchUrl("https://reqres.in/api/users?page=1");
    
    setUser(pre=>[...res.data]);
    // export {users};
}

async function fetchUrl(url)
{
    var res=await fetch(url);
    
    var res=await res.json();
    

    return res;
}




    return (
        <>
        
        <header class="navbar">
        <div class="nav-data">
            <div className="brand">
                <h2>Company</h2>
            </div>
            
        </div>
    </header>
      

        
        {user && user.length>0 ?

        <div className="users">
        {/* <h2>Team</h2> */}
        { user.map(user=>
        {
         
        return (
         <User key={user.id} avatar={user.avatar} name={user.first_name+" "+user.last_name} email={user.email} about={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat"} />
        )
        
        }) } </div>:
        (<>
        <h1 className="middle" style={{marginTop:"10rem",marginLeft :"3rem",width:"fit-content"}} >Welcome to my Company</h1>
        <h4 className="middle" style={{marginTop:"17rem",marginLeft :"3rem", width:"fit-content"}} > To Get All Users Click Here :</h4>
        <div className="but">
        <button onClick={()=>getData()} className="middle getuser"> GET USER </button>
        </div>
        {showSpinner ? 
        
            <div class="spinner-border loader middle" style={{marginTop:"25rem"}} role="status">
        <span class="sr-only"></span>
      </div>
        
        
        
         :null}
        
        </>)
        
        
         }

        </>
    )
}