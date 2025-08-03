import {useEffect,useState} from "react"
import BuyActionWindow from "./BuyActionWindow";
import axios from 'axios';
function Summery({user}) {
    const [userData,setUserData] = useState({id:"",name:"",email:""});
    const [allHoldings,setAllHoldings] = useState([]);
    
      useEffect(()=>{
        axios.get("https://zerodha-clone-0.onrender.com/holdings/allHoldings",{withCredentials: true}).then((res)=>{
          console.log(res.data);
          setAllHoldings(res.data)
        });
      },[])
      useEffect(()=>{
          fetch("https://zerodha-clone-0.onrender.com/me",{
              credentials:"include"
          })
          .then((res)=>res.json())
          .then((data)=>{
              if(data.id) setUserData({id:data.id,name:data.name,email:data.email});
          });
      },[]);

    return ( 
        <div className="w-full p-7 flex flex-col justify-between">
            <div className=" mt-20 mb-5">
                <h4>Hi, {userData.name}</h4>
            </div>
            

            <div className="w-5xl h-55 shadow-md  p-10 mb-10">
                <i className="fa-regular fa-clock"></i> &nbsp;
                <span>Equity</span>

                  <div className="flex justify-around mt-5">
                    <div>
                        <h1 style={{color:"green"}}>3.74k</h1>
                        <p>Margin available</p> 
                    </div>
                    <div>
                        <p>Margin used 0</p>
                        <p>Opening balance 3.74k</p>
                        
                    </div>
                </div>
              
            </div>
            
            <div className="w-5xl h-55 shadow-md  p-10  ">
                <i className="fa-solid fa-credit-card"></i> &nbsp;
                <span>Holdings ({allHoldings.length})</span>
                <div className="flex justify-around mt-5">
                    <div>
                        <h1 style={{color:"green"}}>1.55k</h1>
                        <p style={{color:"green"}}>+5.20%</p> 
                    </div>
                    <div>
                        <p>Current value 31.43k</p>
                        <p>Investments 29.88k</p>
                        
                    </div>
                </div>
                <p>P&L</p>
            </div>
            <BuyActionWindow />
        </div>
     );
}

export default Summery;