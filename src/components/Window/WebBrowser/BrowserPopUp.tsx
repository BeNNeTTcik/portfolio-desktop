import { ImCross } from 'react-icons/im';
import './BrowserPopup.css';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
  variant?: 'default' | 'settings' | 'history';
}

export default function BrowserPopup({ onClose, title, children, variant = 'default' }: Props) {
  return (
    <div className="browser-popup-overlay">
      <div className="browser-popup">
        <div className="popup-title">
          <span>{title}</span>
          <button onClick={onClose}><ImCross /></button>
        </div>

        <div className={`popup-content ${variant}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
