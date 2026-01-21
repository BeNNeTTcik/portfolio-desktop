import type { ReactNode } from 'react';
import { FcBusinessman, FcFolder, FcDocument, FcSettings, FcPuzzle, FcAbout, FcEngineering, FcSpeaker, FcRatings, FcDisplay } from 'react-icons/fc';
import type { IconId } from '../types/icons';

export const ICON_MAP: Record<IconId, ReactNode> = {
  businessman: <FcBusinessman size={25} />,
  folder: <FcFolder size={25} />,
  document: <FcDocument size={25} />,
  settings: <FcSettings size={25} />,
  puzzle: <FcPuzzle size={25} />,
  about: <FcAbout size={25} />,
  engineering: <FcEngineering size={25} />,
  speaker: <FcSpeaker size={25} />,
  display: <FcDisplay size={25} />,
  ratings: <FcRatings size={25} />,
};
