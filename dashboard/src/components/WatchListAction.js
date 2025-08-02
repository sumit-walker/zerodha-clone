import {Tooltip,Grow} from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function WatchListAction({uid,handleBuyWindow,handleAnalytics}){
    return(
        
        <>
        <div className=" flex justify-center  relative left-13 overflow-y-scroll">
            <Tooltip onClick={()=>handleBuyWindow(true)} title="Buy (B)" placeholder="top" arrow TransitionComponent={Grow}>
                <button className="bg-[#5683e9] text-white pl-2 pr-2  m-3 z-10">B</button>
            </Tooltip>
            <Tooltip title="Analytics (A)" onClick={()=>handleAnalytics(true)} placeholder="top" arrow TransitionComponent={Grow}>
                
                <div className="h-5 w-5 border-1 border-black z-10 flex justify-center items-center m-3 bg-white">
                    <i className="fa-solid fa-chart-simple"></i>
                </div>

            </Tooltip>
            
            <Tooltip title="sell (s)" placeholder="top" arrow TransitionComponent={Grow}>
                <button className=" bg-[#5683e9] text-white pl-2 pr-2  m-3 z-10">S</button>
            </Tooltip>
            <Tooltip title="More" placeholder="top" arrow TransitionComponent={Grow}>
                
                <div className="h-5 w-5 border-1 border-black z-10 flex justify-center items-center m-3 bg-[#a1a1a1] ">
                    <MoreHorizIcon/>
                </div>

            </Tooltip>
            
            

        </div>
        
        </>
        
    )
}