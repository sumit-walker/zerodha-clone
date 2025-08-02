import WatchList from "./WatchList.js";
import Holdings from "./Holdings.js";
import Positions from "./Positions.js";
import Funds from "./Funds.js";
import Summery from "./Summery.js";
import Orders from "./Orders.js";
import Apps from "./Apps.js";
import {Routes,Route} from "react-router-dom"
import Analytics from "./Analytics.js";

const Dashboard=({user})=> {

   

    return ( 
        
        <div className="flex justify-between mt-20">
            <WatchList/>
            <div>
                <Routes>
                    <Route  path={`dashboard/${user.id}`} element={
                       
                            <Summery />
                       
                    }></Route>

                    <Route path="orders" element={
                       
                            <Orders  />
                       
                    }></Route>

                    <Route path="holdings" element={
                       
                            <Holdings/>
                       
                    }></Route>

                    <Route path="positions" element={
                       
                            <Positions/>
                       
                    }></Route>

                    <Route path="funds" element={
                       
                            <Funds/>
                       
                    }></Route>

                    <Route path="/product" element={
                       
                            <Apps/>
                       
                    }></Route>
                    <Route path="analytics" element={
                       
                            <Analytics/>
                       
                    }></Route>

                </Routes>
            </div>
            
        </div>
        
     );
}

export default Dashboard;