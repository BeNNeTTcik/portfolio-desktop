import { useEffect, useState } from 'react';
import './VolumeControl.css';
import { PiSpeakerHighFill } from "react-icons/pi";

export default function TrayClock() {
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
        {/* 🔊 PRZYCISK – TYLKO OTWIERA SUWAK */}
        <span
          className="tray-speaker"
          onClick={() => setOpen(!open)}
          title="Volume"
        >
          <PiSpeakerHighFill />
        </span>

        <span className="tray-time">{time}</span>
      </div>

      {/* 🎚️ SUWAK */}
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
