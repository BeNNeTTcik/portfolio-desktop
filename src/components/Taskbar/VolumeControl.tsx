import { useEffect, useState } from 'react';
import './VolumeControl.css';
import { PiSpeakerHighFill } from "react-icons/pi";
import type { WindowId } from '../../types/window';

interface TrayClockProps {
  onOpenItem: (id: WindowId) => void;
}

export default function TrayClock({ onOpenItem }: TrayClockProps) {
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const changeVolume = (value: number) => {
    setVolume(value);

    document
      .querySelectorAll<HTMLAudioElement>('audio')
      .forEach((audio) => {
        audio.volume = value / 100;
      });
  };

  return (
    <div className="tray-wrapper">
      <div className="tray-clock">
        {/* SPEAKER */}
        <span
          className="tray-speaker"
          onClick={() => setOpen(!open)}
          title="Volume"
        >
          <PiSpeakerHighFill />
        </span>

        {/* TIME */}
        <span className="tray-time" onClick={() => onOpenItem('datetime')}>{time}</span>
      </div>

      {/* SOUND SLIDER */}
      {open && (
        <div className="tray-volume-popup">
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => changeVolume(Number(e.target.value))}
            className="tray-volume-slider"
          />
        </div>
      )}
    </div>
  );
}
