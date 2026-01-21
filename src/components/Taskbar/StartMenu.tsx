import './StartMenu.css';
import { FcOpenedFolder, FcDocument, FcSettings, FcSearch, FcQuestions, FcServices, FcFlashOff } from "react-icons/fc";
import { useState } from 'react';
import SubMenu from './SubMenu';
import type { WindowId } from '../../types/window';

interface StartMenuProps {
  onClose: () => void;
  onOpenItem?: (id: WindowId) => void;
}

export default function StartMenu({ onClose, onOpenItem }: StartMenuProps) {
  const handleClick = (id: WindowId) => { onOpenItem?.(id); onClose(); };
  const [submenu, setSubmenu] = useState<string | null>(null);



  return (
    <>
      <div className="startmenu-overlay" onClick={onClose} />

      <div className="startmenu">
        <div className="startmenu-sidebar">
          <span>M.DAMPC OS</span>
        </div>

        <ul className="startmenu-list">
          <li onMouseEnter={() => setSubmenu('programs')}
              onMouseLeave={() => setSubmenu(null)}>
            <span><FcOpenedFolder size={25}/> Programs</span>
            <span className="arrow">▶</span>

            {submenu === 'programs' && (
              <SubMenu category="programs" onSelect={(id) => {onOpenItem?.(id); onClose();}}/>
            )}
          </li>

          <li onMouseEnter={() => setSubmenu('documents')}
              onMouseLeave={() => setSubmenu(null)}>
            <span><FcDocument size={25}/> Documents</span>
            <span className="arrow">▶</span>

            {submenu === 'documents' && (
              <SubMenu category="documents" onSelect={(id) => { onOpenItem?.(id); onClose(); }}/>
            )}
          </li>

          <li onMouseEnter={() => setSubmenu('settings')}
              onMouseLeave={() => setSubmenu(null)}>
            <span><FcSettings size={25}/> Settings</span>
            <span className="arrow">▶</span>

            {submenu === 'settings' && (
              <SubMenu category="settings" onSelect={(id) => { onOpenItem?.(id); onClose(); }}/>
            )}
          </li>

          <li className="divider" />

          <li onClick={() => handleClick('find')}><span><FcSearch size={25}/> Find</span></li>
          <li onClick={() => handleClick('help')}><span><FcQuestions size={25}/> Help</span></li>
          <li onClick={() => handleClick('run')}><span><FcServices size={25}/> Run</span></li>

          <li className="divider" />

          <li onClick={() => handleClick('shutdown')}>
            <span><FcFlashOff size={25}/> Shut Down</span>
          </li>
        </ul>
      </div>
    </>
  );
}
