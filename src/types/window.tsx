import type { ReactNode } from "react";

export type WindowId =
  | 'projects'
  | 'skills'
  | 'cv'
  | 'portfolio'
  | 'about'
  | 'display'
  | 'sound'
  | 'find'
  | 'help'
  | 'run'
  | 'shutdown'
  | 'datetime';


export interface WindowInstance {
  id: WindowId;
  title: string;
  content: ReactNode;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  prev?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  resizable?: boolean;
  maximizable?: boolean;
  resizeRequest?: number;
}
