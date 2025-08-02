import Menu from "./Menu.js"
function TopBar({user}) {
    return ( 
        <div className="h-20 w-full  flex  shadow-md  fixed top-0 left-0 z-10 bg-white">
            <div className="h-20 w-130  flex justify-between p-7 border-r-1 border-black-500">
                <div className=" w-35 flex justify-between">
                    <p>NIFTY 50</p>
                    <p>0.00</p>
                    <p>0</p>
                </div>
                <div className="w-30 flex justify-between">
                    <p>SENSEX</p>
                    <p>0.00</p>
                    <p>0</p>
                </div>
            </div>
            <Menu user={user}/>
        </div>

     );
}

export default TopBar;