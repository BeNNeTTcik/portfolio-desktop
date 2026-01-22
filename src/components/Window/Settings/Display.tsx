import "./Display.css";
import { useSettings } from "../Settings/SettingsContext";
import { changeColor } from "./ChangeColor";

function setResolution(width: number, height: number) {
  const root = document.documentElement;
  root.style.setProperty("--desktop-width", `${width}px`);
  root.style.setProperty("--desktop-height", `${height}px`);
}

export default function Display() {
  const { settings, setSettings } = useSettings();

  return (
    <div className="display-window">
      <fieldset>
        <legend>Screen Resolution</legend>
        <select
          onChange={(e) => {
            const [w, h] = e.target.value.split("x").map(Number);
            setResolution(w, h);
          }}
        >
          <option value="800x600">800 × 600</option>
          <option value="1024x768">1024 × 768</option>
          <option value="1280x720">1280 × 720</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Desktop Color</legend>
        <div className="color-options">
          <button onClick={() => changeColor('--desktop-bg', '#008080')} className="color-box" style={{background: "#008080"}} />
          <button onClick={() => changeColor('--desktop-bg', "#000080")} className="color-box" style={{background: "#000080"}} />
          <button onClick={() => changeColor('--desktop-bg', "#808080")} className="color-box" style={{background: "#808080"}} />
          <button onClick={() => changeColor('--desktop-bg', '#004040')} className="color-box" style={{background: "#004040"}} />
        </div>
      </fieldset>

      <fieldset>
        <legend>Appearance</legend>
        <label>
          <input
            type="checkbox"
            checked={settings.classicBorders}
            onChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                classicBorders: e.target.checked,
              }))
            }
          />
          Classic window borders
        </label>

        <label>
          <input
            type="checkbox"
            checked={settings.animations}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, animations: e.target.checked }))
            }
          />
          Enable animations
        </label>
      </fieldset>
    </div>
  );
}
