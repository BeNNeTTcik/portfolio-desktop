import type { IconId } from '../types/icons';
import type { WindowId } from '../types/window';

export interface MenuItem {
  id: WindowId;
  label: string;
  icon?: IconId;
}

export const MENU_DATA: Record<string, MenuItem[]> = {
  programs: [
    { id: 'portfolio', label: 'Portfolio', icon: 'businessman' },
    { id: 'projects', label: 'Projects', icon: 'puzzle' },
    { id: 'skills', label: 'Skills', icon: 'engineering' },
  ],

  documents: [
    { id: 'cv', label: 'CV', icon: 'ratings' },
    { id: 'about', label: 'About', icon: 'about' },
  ],

  settings: [
    { id: 'display', label: 'Display', icon: 'display' },
    { id: 'sound', label: 'Sound', icon: 'speaker' },
  ],
};
