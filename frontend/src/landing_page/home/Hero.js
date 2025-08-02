import "./hero.css";
function Hero() {
    
    return (  
        <div className="Hero-home">
            <img src="\media\images\homeHero.png" alt="Zerodha Logo"  />
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button type="button" className="btn btn-primary btn-lg custom-hover-btn"><a href="/signup" className='text-white'>Sign up for free</a></button>
        </div>

    );
}

export default Hero;