import type { WindowId } from '../../../types/window';

export function normalizeRunCommand(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\.(exe|txt|bat|cmd|msc|html)$/i, '') 
    .replace(/[^a-z0-9]/g, '');           
}

export const RUN_COMMANDS: Record<string, WindowId> = {
  portfolio: 'portfolio',
  projects: 'projects',
  skills: 'skills',
  sound: 'sound',
  display: 'display',
  run: 'run',
  cv: 'cv',
  about: 'about',
  find: 'find',
  help: 'help',
  datetime: 'datetime',
  shutdown: 'shutdown',
};
