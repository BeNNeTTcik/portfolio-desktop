import logo from '../assets/logo.svg';
import type { WindowId, WindowInstance } from '../types/window';
import './Desktop.css'
import Window from './Window/Window';
import { useSettings } from './Window/Settings/SettingsContext';

interface Props {
  windows: WindowInstance[];
  active: WindowId | null;
  onClose: (id: WindowId) => void;
  onFocus: (id: WindowId) => void;
  onMove: (id: WindowId, x: number, y: number) => void;
  onMinimize: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onResize: (id: WindowId, width: number, height: number) => void;
}

export default function Desktop({ windows, active, onClose, onFocus, onMove, onMinimize, onMaximize, onResize }: Props) {
const { settings } = useSettings();
  return (
    <>
      <div className="desktop"
        style={{
        background: settings.desktopColor,
        transform:
        settings.resolution === '800x600'
        ? 'scale(0.85)'
        : settings.resolution === '1280x720'
        ? 'scale(1.1)'
        : 'scale(1)',
        }}
      >
      {windows
        .filter(w => !w.minimized)
        .map(w => (
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
        {w.content}
        </Window>
      ))}

      <div>
        <a href="" target='_blank' className='logo'>
          <img src={logo} className="logo" alt="Logo" />
        </a>
      </div>
      <h1>M.DAMPC OS</h1>
    </div>
    </>
  )
};