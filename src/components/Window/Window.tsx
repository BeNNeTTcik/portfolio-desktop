import './Window.css';
import type { WindowId } from '../../types/window';
import { useRef } from 'react';
import { ImCross, ImMinus, ImCheckboxUnchecked } from "react-icons/im";


interface Props {
  id: WindowId;
  title: string;
  zIndex: number;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  onMove: (id: WindowId, x: number, y: number) => void;
  onResize: (id: WindowId, width: number, height: number) => void;
  onMinimize: () => void;
  onMaximize: () => void;
  resizable?: boolean;
  maximizable?: boolean;
}

export default function Window({
    title,
    zIndex,
    isActive,
    onClose,
    onFocus,
    children,
    x,
    y,
    width,
    height,
    id,
    onMove,
    onResize,
    onMaximize,
    onMinimize,
    resizable,
    maximizable
}: Props) {
  const dragOffset = useRef({ x: 0, y: 0 });

  {/* Move window function */}
  const startDrag = (e: React.MouseEvent) => {
    dragOffset.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };

    const onMoveMouse = (ev: MouseEvent) => {
      onMove(id, ev.clientX - dragOffset.current.x, ev.clientY - dragOffset.current.y);
    };

    const stop = () => {
      window.removeEventListener('mousemove', onMoveMouse);
      window.removeEventListener('mouseup', stop);
    };

    window.addEventListener('mousemove', onMoveMouse);
    window.addEventListener('mouseup', stop);
  };

  {/* Resize window function */}
  const startResize = (e: React.MouseEvent) => {
  e.stopPropagation();

  const startX = e.clientX;
  const startY = e.clientY;
  const startW = width;
  const startH = height;

  const onMouseMove = (ev: MouseEvent) => {
    onResize(
      id,
      startW + (ev.clientX - startX),
      startH + (ev.clientY - startY)
    );
  };

  const stop = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', stop);
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', stop);
  };

  return (
    <div
      className={`window ${isActive ? 'active' : ''}`}
      style={{
        left: x,
        top: y,
        width,
        height,
        zIndex,
        }}
        onMouseDown={onFocus}>
      <div className="titlebar" onMouseDown={startDrag}>
          <span className="title">{title}</span>
        <div className="window-controls">
          <button onClick={onMinimize}><ImMinus /></button>
          {maximizable &&(<button onClick={onMaximize}><ImCheckboxUnchecked /></button>)}
          <button onClick={onClose}><ImCross /></button>
        </div>
      </div>

      <div className="window-content">
        {children}
      </div>
      {resizable && <div className="resize-handle" onMouseDown={startResize}></div>}
    </div>
  );
}
