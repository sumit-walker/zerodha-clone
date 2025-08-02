function SupportPortal() {
    return ( 
        <div className=" h-64 w-auto  bg-[#f6f6f6] pt-20 pl-30 pr-30 ">
            <div className="flex  justify-between items-center ">
                <h1>Support Portal</h1>
                <button type="button" className="bg-[#397dd0] pl-6 pr-5 pt-2 pb-2 text-[#ffffff] hover:bg-[#383b43]">My ticket</button>

            </div>
            
            <div className="">
                <input className="h-15 w-full mt-4 bg-[#ffffff] pl-10 pr-3 shadow-xl" type="text" placeholder="Eg: how do i activate F&O"></input>
                <i class="fa-solid fa-magnifying-glass relative bottom-10 left-4 "></i>
            </div>
        </div>
     );
}

export default SupportPortal;