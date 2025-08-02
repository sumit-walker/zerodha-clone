import "./Navbar.css";
import {Link} from "react-router-dom";
import { useState } from "react";
export default function Navbar(){
    
    return(
        <div className="navbar">
            <div className="navbar_logo" style={{marginLeft:"5em"}}>
                <a href="/"> <img src="/media/images/logo.svg" alt="Zerodha Logo"  style={{ height:"25px",maxWidth: "100px", width: "100%"}}/></a>
            </div>
            <div className="navbar_links" style={{marginRight:"5em"}}>
                <Link to="/signup"><p className="hover:text-black">Singup</p></Link>
                <Link to="/about"><p className="hover:text-black">About</p></Link> 
                <Link to="/product"><p className="hover:text-black">Products</p></Link>
                <Link to="/pricing"><p className="hover:text-black">Pricing</p></Link>
                <Link to="/support"><p className="hover:text-black">Support</p></Link>

            </div>
        </div>
    )
}