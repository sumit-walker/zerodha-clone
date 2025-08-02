import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Accord() {
  return (
    <div className='p-20'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-plus text-[#397dd0]"></i> &nbsp; &nbsp; Account Opening</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='text-[#397dd0] cursor-pointer'>Resident individual</li>
            <li className='text-[#397dd0] cursor-pointer'>Minor</li>
            <li className='text-[#397dd0] cursor-pointer'>Non Resident Indian (NRI)</li>
            <li className='text-[#397dd0] cursor-pointer'>Company, Partnership, HUF and LLP</li>
            <li className='text-[#397dd0] cursor-pointer'>Glossary</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-circle-user text-[#397dd0]"></i> &nbsp; &nbsp;Your Zerodh Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='text-[#397dd0] cursor-pointer'>Your Profile</li>
            <li className='text-[#397dd0] cursor-pointer'>Account modification</li>
            <li className='text-[#397dd0] cursor-pointer'>Client Master Report (CMR) and Depository Participant (DP)</li>
            <li className='text-[#397dd0] cursor-pointer'>Nomination</li>
            <li className='text-[#397dd0] cursor-pointer'>Transfer and conversion of securities</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-chart-simple text-[#397dd0]"></i>&nbsp; &nbsp;Kite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='text-[#397dd0] cursor-pointer'>IPO</li>
            <li className='text-[#397dd0] cursor-pointer'>Trading FAQs</li>
            <li className='text-[#397dd0] cursor-pointer'>Margin Trading Facility (MTF) and Margins</li>
            <li className='text-[#397dd0] cursor-pointer'>Charts and orders</li>
            <li className='text-[#397dd0] cursor-pointer'>Alerts and Nudges</li>
            <li className='text-[#397dd0] cursor-pointer'>General</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-indian-rupee-sign text-[#397dd0]"></i>&nbsp; &nbsp;Funds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='text-[#397dd0] cursor-pointer'>Add Money</li>
            <li className='text-[#397dd0] cursor-pointer'>Withdraw Money</li>
            <li className='text-[#397dd0] cursor-pointer'>Add Bank Accounts</li>
            <li className='text-[#397dd0] cursor-pointer'>eMandates</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-circle-notch text-[#397dd0]"></i>&nbsp; &nbsp;Console</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul >
            <li className='text-[#397dd0] cursor-pointer'>Portfolio</li>
            <li className='text-[#397dd0] cursor-pointer'>Corporate actions</li>
            <li className='text-[#397dd0] cursor-pointer'>Funds statement</li>
            <li className='text-[#397dd0] cursor-pointer'>Reports</li>
            <li className='text-[#397dd0] cursor-pointer'>Profile</li>
            <li className='text-[#397dd0] cursor-pointer'>Segments</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><i className="fa-solid fa-coins text-[#397dd0]"></i>&nbsp; &nbsp;Coin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='text-[#397dd0] cursor-pointer'>Mutual funds</li>
            <li className='text-[#397dd0] cursor-pointer'>National Pension Scheme (NPS)</li>
            <li className='text-[#397dd0] cursor-pointer'>Fixed Deposit (FD)</li>
            <li className='text-[#397dd0] cursor-pointer'>Features on Coin</li>
            <li className='text-[#397dd0] cursor-pointer'>Payments and Orders</li>
            <li className='text-[#397dd0] cursor-pointer'>General</li>
          </ul>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
