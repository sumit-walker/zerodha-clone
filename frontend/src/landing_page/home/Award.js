import "./award.css";
function Award() {
    return ( 
        
        <div className="award-content">
            <div className="left-half">
                <img src="\media\images\largestBroker.svg" alt="Award Icon" />
            </div>
            <div className="right-half">
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                
                <div className="award-list" style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Award;