import './Taskbar.css';
import { FaPlay } from "react-icons/fa";
import Volume from './Taskbar/VolumeControl';
import { useState } from 'react';
import StartMenu from './Taskbar/StartMenu';
import type { WindowId }  from '../types/window';


interface TaskbarProps {
  openWindows: {
    id: WindowId;
    title: string;
  }[];
  activeWindow: WindowId | null;
  onWindowClick: (id: WindowId) => void;
  onOpenItem: (id: WindowId) => void;
}
export default function Taskbar({
  openWindows,
  activeWindow,
  onWindowClick,
  onOpenItem,
}: TaskbarProps) {
  const [startOpen, setStartOpen] = useState(false);

  return (
    <div className="taskbar">
      <button className="start-button" onClick={() => setStartOpen(!startOpen)}>
        <FaPlay size={15}/>
        <span>Start</span>
      </button>
      {startOpen && (
        <StartMenu onClose={() => setStartOpen(false)}
          onOpenItem={onOpenItem} />
        )}
      <div className="taskbar-windows">
        {openWindows.map((win) => (
          <button
            key={win.id}
            className={`taskbar-window ${
              activeWindow === win.id ? 'active' : ''
            }`}
            onClick={() => onWindowClick(win.id)}
          >
            {win.title}
          </button>
        ))}
      </div>

      <div className="taskbar-clock">
        <Volume onOpenItem={onOpenItem} />
      </div>
    </div>
  );
}
