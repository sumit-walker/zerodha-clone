
function OpenAccount() {
    return ( 
        <div className="open-account" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "5em"}}>
            <h1>Open a Zerodha account</h1>
            <p style={{color:"bleack"}}>Modern Platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button type="button" className="btn btn-primary btn-lg custom-hover-btn"><a href="/signup" className='text-white'>Sign up for free</a></button>

        </div>
     );
}

export default OpenAccount;