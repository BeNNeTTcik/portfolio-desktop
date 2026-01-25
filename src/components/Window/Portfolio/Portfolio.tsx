import "./Portfolio.css";
import WebBroweserTemplate from "../WebBrowser/WebBrowserTemplate";
import { useState } from "react";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("portfolio");
  return (
    <>
      <WebBroweserTemplate page={currentPage} 
  onPageChange={(newPage) => setCurrentPage(newPage)} />
      <div className="webpage">DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br></div>
    </>
  );
}
