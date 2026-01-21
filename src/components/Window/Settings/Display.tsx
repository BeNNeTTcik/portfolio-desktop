import './Display.css';
import { useState } from 'react';

export default function Display() {
  const [resolution, setResolution] = useState('1024x768');
  const [desktopColor, setDesktopColor] = useState('#008080');
  const [classicBorders, setClassicBorders] = useState(true);
  const [animations, setAnimations] = useState(true);

  return (
    <div className="display-window">
      <fieldset>
        <legend>Screen Resolution</legend>
        <select
          value={resolution}
          onChange={e => setResolution(e.target.value)}
        >
          <option>800 × 600</option>
          <option>1024 × 768</option>
          <option>1280 × 720</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Desktop Color</legend>
        <div className="color-options">
          {['#008080', '#000080', '#808080', '#004040'].map(color => (
            <button
              key={color}
              className={`color-box ${
                desktopColor === color ? 'selected' : ''
              }`}
              style={{ background: color }}
              onClick={() => setDesktopColor(color)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Appearance</legend>
        <label>
          <input
            type="checkbox"
            checked={classicBorders}
            onChange={e => setClassicBorders(e.target.checked)}
          />
          Classic window borders
        </label>

        <label>
          <input
            type="checkbox"
            checked={animations}
            onChange={e => setAnimations(e.target.checked)}
          />
          Enable animations
        </label>
      </fieldset>

      <div className="dialog-buttons">
        <button>OK</button>
        <button>Apply</button>
      </div>
    </div>
  );
}
