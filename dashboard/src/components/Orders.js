import {useState,useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { touchRippleClasses } from "@mui/material";
import {Link} from "react-router-dom";
function Orders() {
    const[userId,setUserId]=useState("");
    const[allOrders,setAllOrders]=useState([]); 
    fetch("http://localhost:2020/me",{credentials:"include"})
        .then((res)=> res.json())
        .then((data)=>{
            if(data.id) setAllOrders(data.activities)
            setUserId(data.id)
            
        })
    useEffect(()=>{
        fetch("http://localhost:2020/me",{credentials:"include"})
        .then((res)=> res.json())
        .then((data)=>{
            if(data.id) setAllOrders(data.activities)
            setUserId(data.id)
        })
    
    },[])
    
  
    return (  

        
        <div>
            {allOrders.length>0 && 
            
            <div className='mr-70 mt-30'>
                <h1>Orders</h1>
                <TableContainer component={Paper} >
                <Table sx={{ minWidth: 450}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
        
                        <TableCell >Instrument</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Model</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allOrders.map((stock,idx) => {
                        const CurrVal=stock.price * stock.qty;
                        const isProfit=CurrVal-stock.avg * stock.qty >=0.0;
                        const profClass=isProfit ? {color:"green"}: {color:"red"};
                        const dayClass=stock.isLoss ? {color:"green"}: {color:"red"};
                        return(
                        <TableRow
                            key={idx}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                
                            <TableCell>
                                {stock.name}
                            </TableCell>
                            
                            <TableCell align="right">{stock.qty}</TableCell>
                            <TableCell align="right">{stock.price}</TableCell>                  
                            <TableCell align="right">{stock.model}</TableCell>
                            
                        </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>}

            {allOrders.length ===0 && 
                    <div className="mr-90 mt-30 flex flex-col justify-center items-center">
                        <p>You haven't placed any orders today</p>

                        <button type="button" class="btn btn-primary">
                            <Link to={`/dashboard/${userId}`} className="btn">
                            Get started
                            </Link>
                        </button>

                        
                        
                    </div>
            }
        </div>
    );
}

export default Orders;