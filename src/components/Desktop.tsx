import logo from "../assets/logo.svg";
import type { WindowId, WindowInstance } from "../types/window";
import "./Desktop.css";
import Window from "./Window/Window";
import Run from "./Window/Utilities/Run";

interface Props {
  windows: WindowInstance[];
  active: WindowId | null;
  onClose: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  onMove: (id: WindowId, x: number, y: number) => void;
  onMinimize: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onResize: (id: WindowId, width: number, height: number) => void;
  onOpenItem: (id: WindowId) => void;
  
}

export default function Desktop({
  windows,
  active,
  onClose,
  onFocus,
  onMove,
  onMinimize,
  onMaximize,
  onResize,
  onOpenItem,
  
}: Props) {
  return (
    <div className="screen">
      <div className="desktop-scale">
        <div className="desktop">
          {/* OKNA */}
          {windows
            .filter((w) => !w.minimized)
            .map((w) => (
              <Window
                key={w.id}
                id={w.id}
                title={w.title}
                x={w.x}
                y={w.y}
                width={w.width}
                height={w.height}
                zIndex={w.zIndex}
                isActive={active === w.id}
                onClose={() => onClose(w.id)}
                onFocus={() => onFocus(w.id)}
                onMove={onMove}
                onMinimize={() => onMinimize(w.id)}
                onMaximize={() => onMaximize(w.id)}
                onResize={onResize}
                resizable={w.resizable}
                maximizable={w.maximizable}
              >
                {/* 🔥 TU JEST KLUCZ */}
                {w.id === "run" ? (
                  <Run
                    onRun={onOpenItem} // ⬅️ openWindow z App
                    onClose={() => onClose("run")}
                    resizeRequest={(height) =>
                      onResize(w.id, w.width, height)
                    }
                  />
                ) : (
                  w.content
                )}
              </Window>
            ))}

          {/* LOGO NA PULPICIE */}
          <div className="desktop-logo">
            <img src={logo} alt="Logo" />
            <h1>M.DAMPC OS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
