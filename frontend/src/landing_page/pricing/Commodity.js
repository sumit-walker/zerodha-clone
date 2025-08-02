function Commodity() {
    return (  
        <table className="table" style={{width: "80%", border:".7px solid grey"}}>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Commodity futures</th>
                    <th scope="col">Commodity options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Brokerage</th>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>₹20/executed order</td>
                </tr>
                <tr>
                    <th scope="row">STT/CTT</th>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                </tr>
                <tr>
                    <th scope="row">Transaction charges</th>
                    <td>MCX: 0.0021% NSE: 0.0001%</td>
                    <td>MCX: 0.0418% NSE: 0.001%</td>
                </tr>
                <tr>
                    <th scope="row">GST</th>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                    <th scope="row">SEBI charges</th>
                    <td>
                        Agri: ₹1 / crore 
                        Non-agri: ₹10 / crore
                    </td>
                    <td>₹10 / crore</td>
                </tr>
                <tr>
                    <th scope="row">Stamp charges</th>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
            </tbody>

    </table>     
        
    );
}

export default Commodity;