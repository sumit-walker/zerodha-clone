function Stats() {
    return ( 
        <div className="stats" style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", marginTop: "5em"}}>
            <div style={{maxWidth: "480px"}}>
                <h2>Trust with confidence</h2>
                <div style={{margin: "2em"}}>
                    <h4>Customer-first always</h4>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                </div>
                <div style={{margin: "2em"}}>
                    <h4>No spam or gimmicks</h4>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a>
                    </p>
                </div>
                <div style={{margin: "2em"}}>
                    <h4>The Zerodha universe</h4>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                </div>
                <div style={{margin: "2em"}}>
                    <h4>Do better with money</h4>
                    <p>
                        With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                <div style={{margin: "2em"}}>
                    <a href="#" style={{marginRight: "2em", color: "#1976d2", textDecoration: "none"}}>Explore our products &rarr;</a>
                    <a href="#" style={{color: "#1976d2", textDecoration: "none"}}>Try Kite demo &rarr;</a>
                </div>
            </div>
            <div className="stats-products" style={{position: "relative", minWidth: "450px", height: "600px"}}>
                <img src="/media/images/ecosystem.png" alt="Zerodha Products" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <img src="\media\images\pressLogos.png" alt="Zerodha Ecosystem" style={{width: "70%", height: "100%", objectFit: "cover"}} />

        </div>
     );
}

export default Stats;