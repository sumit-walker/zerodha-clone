import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import {useState,useEffect} from "react";

export default function Positions() {
  const[allPositions,setAllPositions]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:2020/allPositions",{withCredentials: true}).then((res)=>{
      console.log(res.data);
      setAllPositions(res.data)
    });
  },[])
  

  return (
  
  <div className=' mr-70 mt-30'>
        <h1>Positions</h1>
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Instrument</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">AVG.</TableCell>
                <TableCell align="right">LTP</TableCell>
                <TableCell align="right">P&L</TableCell>
                <TableCell align="right">Chg.</TableCell>  
            </TableRow>
            </TableHead>
            <TableBody>
            {allPositions.map((stock,idx) => {
              const CurrVal=stock.price * stock.qty;
              const isProfit=CurrVal-stock.avg * stock.qty >=0.0;
              const profClass=isProfit ? {color:"green"}: {color:"red"};
              const dayClass=stock.isLoss ? {color:"green"}: {color:"red"};
              return(
                <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {stock.product}
                </TableCell>
                <TableCell align="right">{stock.name}</TableCell>
                <TableCell align="right">{stock.qty}</TableCell>                  
                <TableCell align="right">{stock.avg.toFixed(2)}</TableCell>
                <TableCell align="right">{stock.price.toFixed(2)}</TableCell>
                <TableCell align="right" style={profClass}>{(CurrVal-stock.avg * stock.qty).toFixed(2)}</TableCell>
                <TableCell align="right" style={profClass}>{stock.net}</TableCell>
                <TableCell align="right" style={dayClass}>{stock.day}</TableCell>

                </TableRow>
              )
              })}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
