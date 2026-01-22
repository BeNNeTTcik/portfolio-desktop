import { useState } from 'react';
import './SoundMixer.css';
import { DEFAULT_CHANNELS} from './SoundChannels';
import type { SoundChannel } from './SoundChannels';

export default function SoundMixer() {
  const [masterVolume, setMasterVolume] = useState(75);
  const [channels, setChannels] = useState<SoundChannel[]>(DEFAULT_CHANNELS);

  const updateChannel = (id: string, data: Partial<SoundChannel>) => {
    setChannels(channels =>
      channels.map(ch =>
        ch.id === id ? { ...ch, ...data } : ch
      )
    );
  };

  return (
    <div className="sound-window">
      <div className="sound-section">
        <strong>Master Volume</strong>
        <input
          type="range"
          min={0}
          max={100}
          value={masterVolume}
          onChange={e => setMasterVolume(+e.target.value)}
        />
        <span>{masterVolume}%</span>
      </div>

      <div className="sound-channels">
        {channels.map(ch => (
          <div key={ch.id} className="sound-channel">
            <span>{ch.name}</span>

            <input
              type="range"
              min={0}
              max={100}
              value={ch.muted ? 0 : ch.volume}
              onChange={e =>
                updateChannel(ch.id, { volume: +e.target.value })
              }
            />

            <button
              className={ch.muted ? 'active' : ''}
              onClick={() =>
                updateChannel(ch.id, { muted: !ch.muted })
              }
            >
              Mute
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
