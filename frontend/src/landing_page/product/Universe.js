import "./universe.css";
function Universe() {
    return ( 
        <div className="universe" >
            <h1>The Zerodha Universe</h1> 
            <p>Extend your trading and investment experience even further with our partner platforms</p>   
            <div className="container" >
                <div className="product-section" >
                    <div className="product-item">
                        <div className="product-logo"> 
                            <img src="\media\images\zerodhaFundhouse.png" alt="TradingView" />
                        </div>
                        <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="product-item" >
                        <div className="product-logo" > 
                            <img src="\media\images\streakLogo.png" alt="Smallcase" />
                        </div>
                        <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                </div>
                <div className="product-section" >
                    <div className="product-item">
                        <div className="product-logo"> 
                            <img src="\media\images\sensibulllogo.svg" alt="TradingView" />
                        </div>
                        <p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                    <div className="product-item">
                        <div className="product-logo"> 
                            <img src="\media\images\smallcaseLogo.png" alt="Smallcase" />
                        </div>
                        <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>

                    </div>
                </div>
                <div className="product-section" >
                    <div className="product-item">
                        <div className="product-logo"> 
                            <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="TradingView" />
                        </div>
                        <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>

                    </div>
                    <div className="product-item">
                        <div className="product-logo" > 
                            <img src="\media\images\dittoLogo.png" alt="Smallcase" />
                        </div>
                        <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>

                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg custom-hover-btn"><a href="/signup" className='text-white'>Sign up for free</a></button>

        </div>
     );
}

export default Universe;
