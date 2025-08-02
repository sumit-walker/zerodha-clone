import React,{useState } from "react";
import {watchlist} from "../Data/Data.js"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import BuyActionWindow from "./BuyActionWindow.js";
import WatchListAction from "./WatchListAction.js";
import {DoughnutChart} from "./DoughnutChart.js";
// import axios from "axios";
import Analytics from "./Analytics.js";
function WatchList() {
    // const [watchlist,setwatchlist] = useState([]);
    
    // useEffect(()=>{
    // axios.get("http://localhost:2020/allwatchlist",{withCredentials: true}).then((res)=>{
    //     setwatchlist(res.data)

    // });
    // },[])


    const data = {
        labels:watchlist.map((subArray)=> subArray["name"]),
        datasets: [
            {
            label: 'Price',
            data: watchlist.map((stock)=> stock.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ]
    }
    return ( 
        
        <>
            <div className="h-screen w-99">
                <div className="w-99 h-13 flex justify-center items-center pl-4 pr-4 mb-2  shadow-md fixed top-22 z-10 bg-white">
                    <input type="text" placeholder="Search eg: infy, bse, nify fut weekly, gold mcx"  className="w-xl focus:outline-none focus:ring-0 focus:ring-offset-0 "/>
                    <span>{watchlist.length}/50</span>
                </div>
                <div className="w-full  pl-3 pr-2 -z-1 mt-14 overflow-y-scroll" >
                    {
                        watchlist.map((stock,idx)=>{
                            return(
                                <WatchListItems stock={stock} idx={idx} ></WatchListItems>
                            )
                        })
                    }
                </div>
                
            
                <DoughnutChart data={data} />

            </div>
        </>
     );
}

export default WatchList;

const WatchListItems=({stock,idx})=>{
    const [showWatchlist,setShowWatchlist]=useState(false);
    const [openbuyWindow,setOpenbuyWindow]=useState(false);
    const [openAnalytics,setOpenAnalytics]=useState(false);

    const handleMouseEnter=(el)=>{
        setShowWatchlist(true);
    }

    const handleMouseLeave=(el)=>{
        setShowWatchlist(false);
    }

    const handleBuyWindow=(el)=>{
        setOpenbuyWindow(el);
        setOpenAnalytics(false);
    }
    const handleAnalytics=(el)=>{
        setOpenAnalytics(el);
        setOpenbuyWindow(false);
        
    
    }


    const dialogRef=React.useRef();
    const manageOutsideClick=(event)=>{
        if(dialogRef && dialogRef.current && dialogRef.current.contains(event.target)){
        }else{
            setOpenbuyWindow(false);
            setOpenAnalytics(false);
        }
            
    }


    React.useEffect(()=>{
        document.addEventListener("click",manageOutsideClick);
        return ()=>{
            document.removeEventListener("click",manageOutsideClick);
        }
    },[])
    

    
    
    return(
        <>
        <div ref={dialogRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={showWatchlist ? "bg-[#a1a1a1] cursor-grab" :""}>
            <div className="w-full h-13 flex justify-between items-center  "  style={showWatchlist?{position:"absolute"}:{}}>
                <p key={idx} className={stock.isDown ? "text-red-400" : "text-green-400"}>{stock.name}</p>

                <div idx={idx} className="mr-3 " style={showWatchlist?{position:"relative", right:"71em"}:{}}>
                    <span>{stock.percent}</span>
                    &nbsp; &nbsp;
                    <span idx={idx}>{stock.isDown ? <TrendingDownIcon className="text-red-500"/>: <TrendingUpIcon className="text-green-500"/> }</span>
                    &nbsp; &nbsp;

                    <span idx={idx}>{stock.price}</span>
                    
                </div>
            </div>
            <BuyActionWindow  idx={idx} uid={stock.name} price={stock.price} openbuyWindow={openbuyWindow} openAnalytics={openAnalytics} handleBuyWindow={handleBuyWindow} handleAnalytics={handleAnalytics}/>
            <Analytics  idx={idx} uid={stock.name} price={stock.price} openAnalytics={openAnalytics}  openbuyWindow={openbuyWindow}   handleAnalytics={handleAnalytics} handleBuyWindow={handleBuyWindow}/>
            {showWatchlist && <WatchListAction uid={stock.name}  handleBuyWindow={handleBuyWindow} handleAnalytics={handleAnalytics}  />}
        </div>
        
        </>
        
    )
}



