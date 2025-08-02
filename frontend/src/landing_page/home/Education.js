import React from "react";

function Education() {
  return (
    <div style={{display: "flex", justifyContent: "space-around", margin: "4em"}}>
      <div >
        <img
          src="/media/images/education.svg"
          alt="Varsity"
          style={{maxWidth: "400px", width: "100%"}}
        />
      </div>
      <div style={{width:"600px", paddingLeft: "2em"}}>
        <h3 style={{fontSize: "2.5rem", fontWeight: "500", marginBottom: "1em" }}>Free and open market education</h3>
        <p style={{fontSize: "1.15rem", marginBottom: "2em"}}>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        </p>
        <a href="#" style={{color: "#1976d2", fontSize: "1.1rem", textDecoration: "none", display: "inline-block", marginBottom: "2em"}}>
          Varsity &rarr;
        </a>
        <p style={{fontSize: "1.15rem", marginBottom: "1em"}}>
          TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
        </p>
        <a href="#" style={{color: "#1976d2", fontSize: "1.1rem", textDecoration: "none", display: "inline-block"}}>
          TradingQ&amp;A &rarr;
        </a>
      </div>
    </div>
  );
}

export default Education;