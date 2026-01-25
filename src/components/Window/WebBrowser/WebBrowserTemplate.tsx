import "./WebBrowserTemplate.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSync,
  FaStar,
  FaHistory,
  FaGlobe,
  FaAtom,
  FaAmazon,
  FaGithub,
  FaDisease,
  FaYoutube,
  FaWikipediaW,
} from "react-icons/fa";
import BrowserMenu from "./BrowserMenu";
import BrowserPopup from "./BrowserPopUp";
import { useState, useRef, useEffect } from "react";
import CertificatePopup from "./FakeCertPopup";
import { FAKE_HISTORY } from "./FakeHistory";

interface Props {
  page: string;
  onPageChange?: (newPage: string) => void;
}

const PAGES = ["cv", "projects", "portfolio", "skills"];

export default function WebBroweserTemplate({ page, onPageChange }: Props) {
  type MenuType = "atom" | "globe" | "history" | null;
  type PopupType = "Help" | "Settings" | "History" | "Find" | "cert" | null;

  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [openPopup, setOpenPopup] = useState<PopupType>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [reloading, setReloading] = useState(false);
  /* Prev & Next webpage */
  const [history, setHistory] = useState<string[]>([page]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    if (history[historyIndex] !== page) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(page);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  }, [page]);

  useEffect(() => {
    if (!openMenu) return;

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openMenu]);

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      onPageChange?.(history[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      onPageChange?.(history[newIndex]);
    }
  };

  const reloadPage = () => {
    if (reloading) return;

    setReloading(true);

    setTimeout(() => {
      setReloading(false);
    }, 1200);
  };

  return (
    <>
      <div className="browser-toolbar">
        <div className="browser-dock">
          <button
            className={`browser-dock-item ${page === "cv" ? "active" : ""}`}
            onClick={() => onPageChange?.("cv")}
          >
            <FaDisease size={15} />
          </button>

          <button
            className={`browser-dock-item ${page === "projects" ? "active" : ""}`}
            onClick={() => onPageChange?.("projects")}
          >
            <FaAmazon size={15} />
          </button>

          <button
            className={`browser-dock-item ${page === "portfolio" ? "active" : ""}`}
            onClick={() => onPageChange?.("portfolio")}
          >
            <FaGithub size={15} />
          </button>
          <button
            className={`browser-dock-item ${page === "skills" ? "active" : ""}`}
            onClick={() => onPageChange?.("skills")}
          >
            <FaYoutube size={15} />
          </button>
          <button className="browser-dock-item">
            <FaWikipediaW size={15} />
          </button>
        </div>
        {/* MENU BAR */}
        <div className="browser-menubar">
          <button
            className="browser-button"
            onClick={() => setOpenMenu(openMenu === "atom" ? null : "atom")}
          >
            <FaAtom />
          </button>

          <button
            className="browser-button"
            onClick={goBack}
            disabled={historyIndex === 0}
            style={{ opacity: historyIndex === 0 ? 0.5 : 1 }}
          >
            <FaArrowLeft />
          </button>
          <button
            className="browser-button"
            onClick={goForward}
            disabled={historyIndex === history.length - 1}
            style={{ opacity: historyIndex === history.length - 1 ? 0.5 : 1 }}
          >
            <FaArrowRight />
          </button>
          <button
            className={`browser-button ${reloading ? "reloading" : ""}`}
            onClick={reloadPage}
            disabled={reloading}
          >
            <FaSync />
            {reloading && (
              <div className="browser-loading">
                <div className="browser-loading-bar" />
              </div>
            )}
          </button>
          <button
            className="browser-button"
            onClick={() => setOpenPopup("cert")}
          >
            <FaGlobe />
          </button>
          <div className="browser-address">
            <span>Address</span>
            <input value={`http://www.${page}.mdampc-os.com`} readOnly />
          </div>
          <button className="browser-button">
            <FaStar />
          </button>
          <button
            className="browser-button"
            onClick={() => setOpenPopup("History")}
          >
            <FaHistory />
          </button>
          {openMenu === "atom" && (
            <div ref={menuRef}>
              <BrowserMenu
                onSelect={(action) => {
                  setOpenMenu(null);

                  if (action === "Help") setOpenPopup("Help");
                  if (action === "Settings") setOpenPopup("Settings");
                  if (action === "History") setOpenPopup("History");
                }}
              />
            </div>
          )}
        </div>
        {openPopup === "Help" && (
          <BrowserPopup title="About" onClose={() => setOpenPopup(null)}>
            <>
              <h4>
                <FaDisease size={40} />
                M.OS WEB Browser
              </h4>
              <br></br>
              <p>
                Version: 1.0.1<br></br>You can find all the latest patch
                information on:<br></br>
                Funny Cats USA website
              </p>
            </>
          </BrowserPopup>
        )}

        {openPopup === "Settings" && (
          <BrowserPopup
            title="Settings"
            variant="settings"
            onClose={() => setOpenPopup(null)}
          >
            <>
              <fieldset className="settings-group">
                <legend>Security</legend>
                <label>
                  <input type="checkbox" /> Enable fake HTTPS
                </label>
                <label>
                  <input type="checkbox" /> Show certificate warnings
                </label>
              </fieldset>
            </>
          </BrowserPopup>
        )}

        {openPopup === "History" && (
          <BrowserPopup
            title="History"
            variant="history"
            onClose={() => setOpenPopup(null)}
          >
            {FAKE_HISTORY.map((group) => (
              <div key={group.label} className="history-group">
                <div className="history-group-title">{group.label}</div>

                {group.items.map((item, idx) => (
                  <div key={idx} className="history-item">
                    <div className="history-title">{item.title}</div>
                    <div className="history-url">{item.url}</div>
                    <div className="history-time">{item.time}</div>
                  </div>
                ))}
              </div>
            ))}
          </BrowserPopup>
        )}

        {openPopup === "cert" && (
          <CertificatePopup onClose={() => setOpenPopup(null)} />
        )}
      </div>
    </>
  );
}
