import { useState } from "react";
import WebBroweserTemplate from "../WebBrowser/WebBrowserTemplate";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState("projects");
  return (
    <>
      <WebBroweserTemplate page={currentPage} onPageChange={(newPage) => setCurrentPage(newPage)} />
      <div className="webpage">DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br>DANE BLALALA<br></br></div>
    </>
  );
}