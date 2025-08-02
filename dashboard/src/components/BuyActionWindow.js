import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
// import axios from "axios";

export default function BuyActionWindow({uid, price, handleBuyWindow , openbuyWindow,handleAnalytics,openAnalytics}) {
  const [stockQuantity,setStockQuantity]=useState(1)
  const [stockPrice,setStockPrice]=useState(price)
  const [userData,setUserData] = useState({id:"",name:"",email:""});
  useEffect(()=>{
      fetch("http://localhost:2020/me",{
          credentials:"include"
      })
      .then((res)=>res.json())
      .then((data)=>{
          if(data.id) setUserData({id:data.id,name:data.name,email:data.email});
      });
  },[]);
  const handleByClick= async ()=>{
    

    try{
      const res=await fetch("http://localhost:2020/userActivities",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          userId:userData.id,
          name:uid,
          qty:stockQuantity,
          price:stockPrice,
          model:"BUY",
        }),
        credentials:"include",
      })
      if(res.ok){
        alert("Order placed successfully");
      }else{
        alert("Order placement failed");
      }
    }catch(error){
      console.error("Error placing order:",error);
      alert("An error occurred while placing the order");
    }
    handleBuyWindow(false);
    console.log(userData.name,uid, stockQuantity, stockPrice);
  }

  
  
  
  return (
    <div className='w-120 h-80 shadow-md bg-[#9e9e9e] p-5 flex  justify-between  absolute bottom-10 left-100 opacity-90'  style={openbuyWindow && !openAnalytics? {display:'block'}:{display:"none"}}>
        <div className='flex justify-between'>
            <fieldset>
                <legend className='text-white'>Qty.</legend>
                <input className='w-30 h-10 bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 pl-3' value={stockQuantity} onChange={(el)=>setStockQuantity(el.target.value)} type="number" placeholder='Enter Qty.' id='qty'/>
            
            </fieldset>
            <fieldset>
                <legend className='text-white'>Price</legend>
                <input className='w-30 h-10 bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 pl-3' value={(stockPrice*stockQuantity).toFixed(2)} onChange={(el)=>setStockPrice(el.target.value)} type="number" placeholder='Enter Price' id='price'/>
            
            </fieldset>

        </div>
        <div className='mt-20 relative left-60'>
            <Button variant="contained" className=' rounded-0 ' onClick={handleByClick} >Buy</Button>
            
            <Button  className='bg-white text-black border-1 border-white rounded-0 ml-4' onClick={()=>handleBuyWindow(false)}>Cancel</Button>
            
        </div>
    </div>
    
  )
}