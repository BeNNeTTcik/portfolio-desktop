export type SoundChannel = {
  id: string;
  name: string;
  volume: number;
  muted: boolean;
};

export const DEFAULT_CHANNELS: SoundChannel[] = [
  { id: 'system', name: 'System Sounds', volume: 80, muted: false },
  { id: 'media', name: 'Media Player', volume: 60, muted: false },
  { id: 'browser', name: 'Web Browser', volume: 70, muted: false },
];
