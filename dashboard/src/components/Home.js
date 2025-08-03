import {useEffect,useState} from "react"
import TopBar from "./TopBar.js"
import Dashboard from "./Dashboard.js";
function Home() {
    const[user,setUser]=useState([]); 
       
    useEffect(()=>{
        fetch("https://zerodha-clone-0.onrender.com/me",{credentials:"include"})
        .then((res)=> res.json())
        .then((data)=>{
            if(data.id) setUser(data)
            
        })
    
    },[])

    
    return ( 
        <div >
            <TopBar user={user}/>

            <Dashboard user={user}/>
        </div>
     );
}

export default Home