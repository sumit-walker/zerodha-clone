import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { VerticalChart } from "./verticalChart";
// import {holdings} from "../Data/Data.js"

import {useState,useEffect} from "react";

export default function Holdings() {

  const [allHoldings,setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("https://zerodha-clone-0.onrender.com/holdings/allHoldings",{withCredentials: true}).then((res)=>{
      console.log(res.data);
      setAllHoldings(res.data)
    });
  },[])
    

const labels=allHoldings.map((subArray)=> subArray["name"]);

const data = {
  labels,
  datasets: [
    {
      label: 'Stock Name',
      data: allHoldings.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};



  return (
    <>
    <div className='flex flex-col justify-end mr-30' >
      <div className="w-200 h-150 shadow-md  p-4 mb-10">
        <VerticalChart data={data} />
      </div>

      <div>
        <h4>Holdings &nbsp; <span>({allHoldings.length})</span></h4>
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Instrument</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">AVG. Cost</TableCell>
                <TableCell align="right">LTP</TableCell>
                <TableCell align="right">Cur. val</TableCell>
                <TableCell align="right">P&L</TableCell>
                <TableCell align="right">Net Chg.</TableCell>  
                <TableCell align="right">Day Chg.</TableCell>  
            </TableRow>
            </TableHead>
            <TableBody>
            {allHoldings.map((stock,idx)=>{
                const CurrVal=stock.price * stock.qty;
                const isProfit=CurrVal-stock.avg * stock.qty >=0.0;
                const profClass=isProfit ? {color:"green"}: {color:"red"};
                const dayClass=stock.isLoss ? {color:"green"}: {color:"red"};

                return (
                  <TableRow
                  key={stock.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" >
                      {stock.name}
                  </TableCell>
                  <TableCell align="right">{stock.qty}</TableCell>
                  <TableCell align="right">{stock.avg.toFixed(2)}</TableCell>
                  <TableCell align="right">{stock.price.toFixed(2)}</TableCell>
                  <TableCell align="right">{CurrVal.toFixed(2)}</TableCell>
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
        
    </div>
    </>
  );
}
