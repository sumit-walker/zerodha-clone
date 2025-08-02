import {useState} from "react";
import Equity from "./Equity.js";
import Currency from "./Currency.js";
import Commodity from "./Commodity.js"
import OpenAccount from "../OpenAccount.js";
import "./charges.css"

function Charges() {
    let[activeTab,setActiveTab]=useState("tab-1")
    const handleClick=(event)=>{
        console.log(event.target.id)
        setActiveTab(event.target.id);
    }

    const isActive=(id)=>activeTab===id?{height:"3px",width:"8em" ,backgroundColor:"#387ed1"}:{};
    
    
    
    return ( 
        <div className="charges-section">
            <div className="tabs">
                <div className="tab">
                    <h3 className="tab" id="tab-1" onClick={handleClick}  >Equity</h3>
                    <div className="tab-underline" style={isActive("tab-1")}></div>
                </div>
                <div className="tab">
                    <h3 className="tab" id="tab-2" onClick={handleClick} >Currency</h3>
                    <div className="tab-underline" style={isActive("tab-2")}></div>

                </div>
                <div className="tab">
                    <h3 className="tab" id="tab-3" onClick={handleClick} >Commodity</h3>
                    <div className="tab-underline" style={isActive("tab-3")}></div>

                </div>
            </div>
            

             <div className="tab-content">
                {activeTab === "tab-1" && <Equity />}
                {activeTab === "tab-2" && <Currency />}
                {activeTab === "tab-3" && <Commodity />}
            </div>
            <OpenAccount/>
        </div>
     );
}





export default Charges;

