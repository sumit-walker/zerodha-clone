function Currency() {
    return (  
        <table className="table" style={{width: "80%", border:"1px solid grey"}}>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="row">Currency future</th>
                    <th scope="row">Currency option</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="col">Brokerage</th>
                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                 
                </tr>
                <tr>
                    <th scope="col">STT/CTT</th>
                    <td>No STT</td>
                    <td>No STT</td>
                </tr>
                <tr>
                    <th scope="col">Transaction charges</th>
                    <td>NSE: 0.00035% 
                        BSE: 0.00045%</td>
                    <td>NSE: 0.0311% BSE: 0.001%</td>
                </tr>
                <tr>
                    <th scope="col">GST</th>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                    <th scope="col">SEBI charges</th>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>

                </tr>
                <tr>
                    <th scope="col">Stamp charges</th>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>

                </tr>
               
            </tbody>
    </table>     
        
    );
}

export default Currency;