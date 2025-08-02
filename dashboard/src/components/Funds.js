
function Funds() {
    return ( 
        <div className="flex justify-between ">
            
            <div className="h-4xl w-130 shadow-xl p-5">
                <h3> Equity</h3>
                <div className="flex  justify-between">
                    <p>Available margin</p>
                    <h5>4,043.10</h5>
                </div>
                <div className="flex  justify-between">
                    <p>Used margin</p>
                    <h5>3757.30</h5>
                </div>
                <div className="flex  justify-between">
                    <p>Avilable Cash</p>
                    <h5>4,043.10</h5>
                </div>
                <hr/>
                <div className="flex  justify-between">
                    <p>Opening Balance</p>
                    <p>4,043.10</p>
                </div>
                <div className="flex  justify-between">
                    <p>Opening Balance</p>
                    <p>3736.40</p>
                </div>
                <div className="flex  justify-between">
                    <p>Payin</p>
                    <p>4,064.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>SPAN</p>
                    <p>0.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>Delivery</p>
                    <p>0.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>Exposure</p>
                    <p>0.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>options premium</p>
                    <p>0.00</p>
                </div>

                <hr/>

                <div className="flex  justify-between">
                    <p>Collateral (Liquid funds)</p>
                    <p>0.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>Collatetal (Equity)</p>
                    <p>0.00</p>
                </div>
                <div className="flex  justify-between">
                    <p>Total Collatetal</p>
                    <p>0.00</p>
                </div>


            </div>
            <div className="ml-60  mr-10">
                <p>Instant, Zero-cost fund transfer with UPI</p>

                <div className="flex">
                    <div className="mr-10">
                        <button type="button" class="btn btn-success rounded-0 ">Add fund</button>
                    </div>
                        <div className="mr-10">
                            <button type="button" className="btn btn-info rounded-0">Withdraw</button>
                        </div>
                </div>
                
            </div>
        </div>
     );
}

export default Funds;