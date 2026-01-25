import Display from "./Settings/Display";
import DateTime from "../Taskbar/DateTime";
import SoundMixer from "./Settings/SoundMixer";
import Shutdown from "./Utilities/Shutdown";
import type { WindowId } from "../../types/window";
import type { ReactNode } from "react";
import WebBrowserWithNav from "./WebBrowser/WebBrowserNav";

export const WINDOW_REGISTRY: Record<
  WindowId,
  {
    title: string;
    content: ReactNode;
    width?: number;
    height?: number;
    resizable?: boolean;
    maximizable?: boolean;
  }
> = {
  portfolio: {
    title: "M.OS WEB Browser",
    content: <WebBrowserWithNav initialPage="portfolio" />,
    width: 880,
    height: 470,
  },
  projects: {
    title: "M.OS WEB Browser",
    content: <WebBrowserWithNav initialPage="projects" />,
    width: 880,
    height: 470,
  },
  skills: {
    title: "M.OS WEB Browser",
    content: <WebBrowserWithNav initialPage="skills" />,
    width: 880,
    height: 470,
  },
  cv: {
    title: "M.OS WEB Browser",
    content: <WebBrowserWithNav initialPage="cv" />,
    width: 880,
    height: 470,
  },
  about: {
    title: "About.txt",
    content: <div>This is a portfolio desktop application.</div>,
  },
  display: {
    title: "Display Settings",
    content: <Display />,
    width: 422,
    height: 260,
    resizable: false,
    maximizable: false,
  },
  sound: {
    title: "Sound Mixer",
    content: <SoundMixer />,
    width: 362,
    height: 184,
    resizable: false,
    maximizable: false,
  },
  find: {
    title: "Find",
    content: <div>Find functionality goes here.</div>,
  },
  help: {
    title: "Help",
    content: <div>Help content goes here.</div>,
  },
  run: {
    title: "Run",
    content: null,
    width: 420,
    height: 130,
    maximizable: false,
  },
  datetime: {
    title: "Date & Time",
    content: <DateTime />,
    width: 356,
    height: 460,
    maximizable: false,
  },
  shutdown: {
  title: "Shutdown OS",
  content:<Shutdown />,
  resizable: false,
  maximizable: false,
  width: 300,
  height: 100,
  },

};
