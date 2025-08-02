function LeftSection() {
    return ( 
        <div className="container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"10em",marginTop:"10em"}}>
            <div className="left-section"  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            
                <div className="img" style={{height:"20em",width:"30em"}}>
                    
                    <img src="\media\images\kite.png" alt="Left_Section_Image" />
                
                </div>
                <div className="context" style={{height:"20em",width:"30em", paddingLeft:"2em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    
                    <h1>Kite</h1>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>          
                    
                    <div className="store" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <div className="try-demo" style={{gap:"1em", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            
                            <a href="/" style={{color:"#387ed1"}}>Try demo →</a>
                            <img src="\media\images\googlePlayBadge.svg" alt="googleplay" style={{maxWidth: "120px", width: "100%"}}/>

                        </div>
                        <div className="learn-more" style={{gap:"1em", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            
                            <a href="/" style={{color:"#387ed1"}}>Learn more →</a>
                            <img src="\media\images\appstoreBadge.svg" alt="appstore" style={{maxWidth: "120px", width: "100%"}}/>

                        </div>
                    </div>
                </div>


            </div>
            
            <div className="right-section"  style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"2em",gap:"2em"}}>
            
            
                <div className="context" style={{height:"20em",width:"30em", paddingLeft:"2em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    
                    <h1>Console</h1>
                    <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations</p>          
                    
                    <div className="store">
                        <div className="try-demo" style={{gap:"1em", display:"flex", flexDirection:"column"}}>
                            
                            <a href="/" style={{color:"#387ed1"}}>Try demo →</a>
                            <img src="\media\images\googlePlayBadge.svg" alt="googleplay" style={{maxWidth: "120px", width: "100%"}}/>

                        </div>
                    
                    </div>
                </div>
                <div className="img" style={{height:"20em",width:"30em"}}>
                    
                    <img src="\media\images\console.png" alt="Left_Section_Image" />
                
                </div>

            </div>
            <div className="left-section"  style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"2em",gap:"2em"}}>
            
                <div className="img" style={{height:"20em",width:"30em"}}>
                    
                    <img src="\media\images\coin.png" alt="Left_Section_Image" />
                
                </div>
                <div className="context" style={{height:"20em",width:"30em", paddingLeft:"2em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    
                    <h1>Coin</h1>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>          
                    <a href="/" style={{color:"#387ed1"}}>coin →</a>

                    <div className="try-demo" style={{ display:"flex-start",gap:"2em"}}>
                        
                        <img src="\media\images\googlePlayBadge.svg" alt="googleplay" style={{maxWidth: "120px", width: "100%"}}/>
                        <img src="\media\images\appstoreBadge.svg" alt="appstore" style={{maxWidth: "120px", width: "100%"}}/>

                    </div>
                        
                    
                </div>


            </div>
            <div className="right-section"  style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"2em",gap:"2em"}}>
            
            
                <div className="context" style={{height:"20em",width:"30em", paddingLeft:"2em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    
                    <h1>Kite Connect API</h1>
                    <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>          
                    <a href="/" style={{color:"#387ed1"}}>Kite Connect →</a>

                    
                </div>
                <div className="img" style={{height:"20em",width:"30em"}}>
                    
                    <img src="\media\images\kiteconnect.png" alt="Left_Section_Image" />
                
                </div>

            </div>
             <div className="left-section"  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            
                <div className="img" style={{height:"30em",width:"30em"}}>
                    
                    <img src="\media\images\varsity.png" alt="Left_Section_Image" />
                
                </div>
                <div className="context" style={{height:"20em",width:"30em", paddingLeft:"2em", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    
                    <h1>Varsity mobile</h1>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>          
                    
                    <div className="store" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        
                            <img src="\media\images\googlePlayBadge.svg" alt="googleplay" style={{maxWidth: "120px", width: "100%"}}/>
                            <img src="\media\images\appstoreBadge.svg" alt="appstore" style={{maxWidth: "120px", width: "100%"}}/>

                    </div>
                </div>


            </div>
            <h5>Want to know more about our technology stack? Check out the <a href="*"  style={{color:"#387ed1"}}>Zerodha.tech</a> blog.</h5>
        </div>
     );
}

export default LeftSection;