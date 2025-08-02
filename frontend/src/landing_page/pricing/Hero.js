import "./hero.css"
function Hero() {
    return ( 
        <div className="Hero-pricing">
            <h1>Charges<h4 style={{color:"#9b9b9b"}}>List of all charges and taxes</h4></h1>
            
            <div className="hero-content">
                 <div className="price">
                    <img src="\media\images\pricing0.svg" alt="pricing0" />
                    <h1>Free equity delivery</h1>
                    <p style={{color:"#666666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="price">
                    <img src="\media\images\intradayTrades.svg" alt="intradayTrades" />
                    <h1>Intraday and F&O trades</h1>
                    <p style={{color:"#666666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="price">
                    <img src="\media\images\pricing0.svg" alt="pricing1" />
                    <h1>Free direct MF</h1>
                    <p style={{color:"#666666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;