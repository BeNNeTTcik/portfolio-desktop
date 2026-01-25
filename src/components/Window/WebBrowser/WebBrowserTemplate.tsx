import "./WebBrowserTemplate.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStop,
  FaSync,
  FaHome,
  FaSearch,
  FaStar,
  FaHistory,
  FaTv,
  FaExpand,
  FaEnvelope,
  FaPrint,
  FaGlobe,
  FaAtom
} from "react-icons/fa";
import FileMenu from "./FileMenu";
import { useState, useRef, useEffect } from "react";

interface Props {
  page: string;
}

export default function WebBroweserTemplate({ page }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="browser-toolbar">
      {/* MENU BAR */}
      <div className="browser-menubar">
        <button
          className="browser-button"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <FaAtom />
        </button>
        {menuOpen && (
          <div ref={menuRef}>
            <FileMenu
              onOpenPopup={() => {
                setPopupOpen(true);
                setMenuOpen(false);
              }}
            />
          </div>
        )}
        <button className="browser-button">
          <FaArrowLeft />
        </button>
        <button className="browser-button">
          <FaArrowRight />
        </button>
        <button className="browser-button">
          <FaSync />
        </button>
                <button className="browser-button">
          <FaGlobe />
        </button>
        <div className="browser-address">
        <span>Address</span>
        <input value={`http://www.mdampc-os-${page}.com`} readOnly />
      </div>
              <button className="browser-button">
          <FaStar />
        </button>
        <button className="browser-button">
          <FaHistory />
        </button>
        
      </div>

      
    </div>
  );
}
