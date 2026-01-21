import { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import { WINDOW_REGISTRY } from './components/Window/windowRegistery';
import type { WindowInstance, WindowId } from './types/window';
import { SettingsProvider } from './components/Window/Settings/SettingsContext';

export default function App() {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [active, setActive] = useState<WindowId | null>(null);
  const [zCounter, setZCounter] = useState(100);

  {/*Open window function*/}
  const openWindow = (id: WindowId) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === id);
      if (exists) {
        focusWindow(id);
        return prev;
      }
      

      const def = WINDOW_REGISTRY[id];
      console.log('Opening window:', id, def);
      if (!def) return prev;
      return [
        ...prev,
        {
          id,
          title: def.title,
          content: def.content,
          zIndex: zCounter,
          x: 120,
          y: 80,
          width: def.width ?? 360,
          height: def.height ?? 260,
          minimized: false,
          maximized: false,
          resizable: def.resizable !== true,
          maximizable: def.maximizable !== true,
        },
      ];
    });

    setActive(id);
    setZCounter(z => z + 1);
  };

  {/*Close window function*/}
  const closeWindow = (id: WindowId) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (active === id) setActive(null);
  };

  {/*Window on the top function*/}
  const focusWindow = (id: WindowId) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, zIndex: zCounter } : w
      )
    );
    setActive(id);
    setZCounter(z => z + 1);
  };

  {/*Move window function*/}
  const moveWindow = (id: WindowId, x: number, y: number) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id ? { ...w, x, y } : w
    )
  );
  };

  {/*Minimize window function*/}
  const minimizeWindow = (id: WindowId) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id ? { ...w, minimized: true } : w
    )
  );

  if (active === id) setActive(null);
  };

  {/*Maximize window function*/}
  const toggleMaximize = (id: WindowId) => {
  setWindows(prev =>
    prev.map(w => {
      if (w.id !== id) return w;

      if (!w.maximized) {
        return {
          ...w,
          prev: {
            x: w.x,
            y: w.y,
            width: w.width,
            height: w.height,
          },
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight - 36, 
          maximized: true,
        };
      }

      return {
        ...w,
        ...w.prev!,
        maximized: false,
        prev: undefined,
      };
    })
  );
  };

  {/*Open window from taskbar function*/}
  const handleTaskbarClick = (id: WindowId) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id
        ? { ...w, minimized: false }
        : w
    )
  );
  focusWindow(id);
  };

  {/*Resize window function*/}
  const resizeWindow = (id: WindowId, width: number, height: number) => {
  setWindows(prev =>
    prev.map(w =>
      w.id === id
        ? {
            ...w,
            width: Math.max(200, width), 
            height: Math.max(120, height), 
          }
        : w
    )
  );
  };

  return (
    <>
      <SettingsProvider>
        
      <Desktop
        windows={windows}
        active={active}
        onClose={closeWindow}
        onFocus={focusWindow}
        onMove={moveWindow}
        onMaximize={toggleMaximize}
        onMinimize={minimizeWindow}
        onResize={resizeWindow}
      />

      <Taskbar
        openWindows={windows}
        activeWindow={active}
        onWindowClick={handleTaskbarClick}
        onOpenItem={openWindow}
        
      />
      </SettingsProvider>
    </>
  );
}
