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
} from "react-icons/fa";

interface Props {
  page: string;
}

export default function WebBroweserTemplate({ page }: Props) {
  return (
    <div className="browser-toolbar">
      {/* MENU BAR */}
      <div className="browser-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Favorites</span>
        <span>Help</span>
      </div>

      {/* TOOLBAR */}
      <div className="browser-buttons">
        <button>
          <FaArrowLeft />
          <span>Back</span>
        </button>
        <button>
          <FaArrowRight />
          <span>Forward</span>
        </button>
        <button>
          <FaStop />
          <span>Stop</span>
        </button>
        <button>
          <FaSync />
          <span>Refresh</span>
        </button>
        <button>
          <FaHome />
          <span>Home</span>
        </button>

        <div className="browser-separator" />

        <button>
          <FaSearch />
          <span>Search</span>
        </button>
        <button>
          <FaStar />
          <span>Favorites</span>
        </button>
        <button>
          <FaHistory />
          <span>History</span>
        </button>
        <button>
          <FaTv />
          <span>Channels</span>
        </button>

        <div className="browser-separator" />

        <button>
          <FaExpand />
          <span>Fullscreen</span>
        </button>
        <button>
          <FaEnvelope />
          <span>Mail</span>
        </button>
        <button>
          <FaPrint />
          <span>Print</span>
        </button>
      </div>

      {/* ADDRESS BAR */}
      <div className="browser-address">
        <span>Address</span>
        <input value={`http://www.mdampc-os-${page}.com`} readOnly />
      </div>
    </div>
  );
}
