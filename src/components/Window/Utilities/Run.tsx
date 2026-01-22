import { useState, useEffect } from "react";
import { RUN_COMMANDS, normalizeRunCommand } from "./RunCommands";
import type { WindowId } from "../../../types/window";
import "./Run.css";

interface Props {
  onRun: (id: WindowId) => void;
  onClose: () => void;
  resizeRequest?: (height: number) => void;
}

export default function Run({ onRun, onClose, resizeRequest }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
  if (error) {
    resizeRequest?.(155);
  } else {
    resizeRequest?.(130);
  }
}, [error]);

  const handleRun = () => {
    const normalized = normalizeRunCommand(value);

    const id = RUN_COMMANDS[normalized];

    if (!id) {
      setError(`Cannot find '${value}'`);
      return;
    }

    onRun(id);
    onClose();
  };

  return (
    <div className="run-window">
      <p>Type the name of a program, folder, or document.</p>

      <input
        autoFocus
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError("");
        }}
        onKeyDown={(e) => e.key === "Enter" && handleRun()}
      />

      {error && <div className="run-error">{error}</div>}

      <div className="run-buttons">
        <button onClick={handleRun}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
