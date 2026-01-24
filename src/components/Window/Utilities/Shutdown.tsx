import { useEffect } from "react";
import "./Shutdown.css";
import logo from "../../../assets/logo.svg";


export default function Shutdown() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://duckduckgo.com";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="shutdown-text2">See You Again</div>
    <div className="shutdown-overlay">
      <img src={logo} className="shutdown-logo" />
      <div className="shutdown-text">Shutting down...</div>
    </div>
    </>
  );
}
