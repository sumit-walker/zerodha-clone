
import {VerticalChart} from "./verticalChart.js";
import axios from "axios";
import {useState,useEffect} from "react";

function Analytics({openAnalytics,openbuyWindow,handleAnalytics,handleBuyWindow}) {
     const [allWatchlist,setAllWatchlist] = useState([]);
    
      useEffect(()=>{
        axios.get("https://zerodha-clone-0.onrender.com/allwatchlist",{withCredentials: true}).then((res)=>{
          console.log(res.data);
          setAllWatchlist(res.data)
        });
      },[])
        
    
    const labels=allWatchlist.map((subArray)=> subArray["name"]);
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Stock Name',
          data: allWatchlist.map((stock) =>stock.price),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };


    
    return(
        <div className="w-120 h-80 shadow-md bg-[#9e9e9e] p-2 flex  justify-between  absolute bottom-10 left-100 opacity-90"  style={openAnalytics && !openbuyWindow? {display:'block'}:{display:"none"}}>
            <VerticalChart data={data}/>
        </div>
    )
}

export default Analytics;