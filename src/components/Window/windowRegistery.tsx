import Projects from "./Projects";
import Skills from "./Skills";
import CV from "./CV";
import Portfolio from "./Portfolio";
import Display from "./Settings/Display";
import DateTime from "../Taskbar/DateTime";
import SoundMixer from "./Settings/SoundMixer";
import Shutdown from "./Utilities/Shutdown";
import type { WindowId } from "../../types/window";
import type { ReactNode } from "react";

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
    title: "Portfolio.txt",
    content: <Portfolio />,
  },
  projects: {
    title: "Projects.txt",
    content: <Projects />,
  },
  skills: {
    title: "Skills.txt",
    content: <Skills />,
  },
  cv: {
    title: "CV.txt",
    content: <CV />,
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

  }
};
