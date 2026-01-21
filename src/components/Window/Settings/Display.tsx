import './Display.css';
import { useSettings } from '../Settings/SettingsContext';
import type { Resolution } from '../Settings/SettingsContext';

export default function Display() {
   const { settings, setSettings } = useSettings();

  const applyResolution = (res: Resolution) => {
    setSettings(prev => ({ ...prev, resolution: res }));
  };


  return (
<div className="display-window">
      <fieldset>
        <legend>Screen Resolution</legend>
        <select
          value={settings.resolution}
          onChange={e => applyResolution(e.target.value as Resolution)}
        >
          <option value="800x600">800 × 600</option>
          <option value="1024x768">1024 × 768</option>
          <option value="1280x720">1280 × 720</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Desktop Color</legend>
        <div className="color-options">
          {['#008080', '#000080', '#808080', '#004040'].map(color => (
            <button
              key={color}
              className="color-box"
              style={{ background: color }}
              onClick={() =>
                setSettings(prev => ({ ...prev, desktopColor: color }))
              }
            />
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Appearance</legend>
        <label>
          <input
            type="checkbox"
            checked={settings.classicBorders}
            onChange={e =>
              setSettings(prev => ({ ...prev, classicBorders: e.target.checked }))
            }
          />
          Classic window borders
        </label>

        <label>
          <input
            type="checkbox"
            checked={settings.animations}
            onChange={e =>
              setSettings(prev => ({ ...prev, animations: e.target.checked }))
            }
          />
          Enable animations
        </label>
      </fieldset>


    </div>
  );
}
