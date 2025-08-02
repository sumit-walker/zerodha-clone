import React from "react";
import "./Navbar.css";

function Footer() {
  return (
    <footer style={{background: "#fff", padding: "2em 0 0 0", fontSize: "1rem", color: "#444", marginTop: "5em"}}>
      <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto"}}>
        {/* Left section: Logo and social */}
        <div >
          <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{height: "2em",width:"10em"}} />
          <div style={{marginBottom: "1em", color: "#888"}}>
            © 2010 - 2025, Zerodha Broking Ltd.<br />
            All rights reserved.
          </div>
          <div style={{display: "flex", gap: "1em", marginBottom: "1em"}}>
            <apan><i className="fa-brands fa-x-twitter"></i></apan>
            <apan><i className="fa-brands fa-square-facebook"></i></apan>
            <apan><i className="fa-brands fa-instagram"></i></apan>
            <apan><i className="fa-brands fa-linkedin"></i></apan>
          </div>
          <div style={{display: "flex", gap: "1em"}}>
            <apan><i className="fa-brands fa-youtube"></i></apan>
            <apan><i className="fa-brands fa-square-whatsapp"></i></apan>
            <apan><i className="fa-brands fa-telegram"></i></apan>

          </div>
        </div>
        {/* Center section: Links */}
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2em", maxWidth: "800px"}}>
            <div>
                <h4 style={{fontWeight: "300", marginBottom: "1em"}}>Account</h4>
                <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li><span>Open demat account</span></li>
                    <li><span>Minor demat account</span></li>
                    <li><span>NRI demat account</span></li>
                    <li><span>Commodity</span></li>
                    <li><span>Dematerialisation</span></li>
                    <li><span>Fund transfer</span></li>
                    <li><span>MTF</span></li>
                    <li><span>Referral program</span></li>
                </ul>
            </div>
            <div>
                <h4 style={{fontWeight: "300", marginBottom: "1em"}}>Support</h4>
                <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li><apan>Contact us</apan></li>
                    <li><apan>Support portal</apan></li>
                    <li><apan>How to file a complaint?</apan></li>
                    <li><apan>Status of your complaints</apan></li>
                    <li><apan>Bulletin</apan></li>
                    <li><apan>Circular</apan></li>
                    <li><apan>Z-Connect blog</apan></li>
                    <li><apan>Downloads</apan></li>
                </ul>
            </div>
            <div>
                <h4 style={{fontWeight: "300", marginBottom: "1em"}}>Company</h4>
                <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li><apan>About</apan></li>
                    <li><apan>Philosophy</apan></li>
                    <li><apan>Press & media</apan></li>
                    <li><apan>Careers</apan></li>
                    <li><apan>Zerodha Cares (CSR)</apan></li>
                    <li><apan>Zerodha.tech</apan></li>
                    <li><apan>Open source</apan></li>
                </ul>
            </div>
            <div>
                <h4 style={{fontWeight: "300", marginBottom: "1em"}}>Quick links</h4>
                <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li><apan>Upcoming IPOs</apan></li>
                    <li><apan>Brokerage charges</apan></li>
                    <li><apan>Market holidays</apan></li>
                    <li><apan>Economic calendar</apan></li>
                    <li><apan>Calculators</apan></li>
                    <li><apan>Markets</apan></li>
                    <li><apan>Sectors</apan></li>
                </ul>
            </div>
        </div>
      </div>
      {/* Footer bottom text */}
      <div style={{maxWidth: "1200px", margin: "2em auto 0 auto", fontSize: "0.95em", color: "#888"}}>
        <div style={{marginBottom: "1em"}}>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001– SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by <apan>SEBI</apan> | <apan>ICF</apan>
        </div>
        <div style={{marginBottom: "1em"}}>
          Procedure to file a complaint on SEBI <apan>SCORES</apan>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br />
          <apan>Smart Online Dispute Resolution</apan> | <apan>Grievances Redressal Mechanism</apan>
        </div>
        <div style={{marginBottom: "1em"}}>
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br />
          Attention investors: 1 Stock brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </div>
        <div style={{marginBottom: "1em"}}>
          *Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.* Dear Investor, If you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <apan>create a ticket here</apan>.
        </div>
        <div style={{margin: "2em 0 1em 0", display: "flex", gap: "2em", flexWrap: "wrap", color: "#888"}}>
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>For investor's attention</span>
          <span>Investor charter</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;