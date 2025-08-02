import * as React from 'react';
import {Link,useLocation} from 'react-router-dom';
import User from "./User.js";

function Menu({user}) {
    
    const location = useLocation();



    const menuItems = [
        { to: `/dashboard/${user.id}`, label: "Dashboard" },
        { to: "/orders", label: "Orders" },
        { to: "/holdings", label: "Holdings" },
        { to: "/positions", label: "Positions" },
        { to: "/funds", label: "Funds" },
        { to: "/Apps", label: "Apps" },
        // ... add other menu items
    ];

    return (
            <div className="w-full flex  justify-between p-7 mr-3" >
                <img className="w-5 h-5 " src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="logo" />

                <div className='h-7 w-lg flex flex-cols justify-between'>
                    {menuItems.map((item, idx) => (
                        <Link 
                        key={idx} 
                        to={item.to}
                        style={{
                            color: location.pathname === item.to ? "orange" : "black",
                            textDecoration: "none"
                        }}
                        >
                        <p className='hover:text-orange-500'>{item.label}</p>
                        </Link>
                    ))}

                    <User/>
                </div>
            </div>
    );
}

export default Menu;