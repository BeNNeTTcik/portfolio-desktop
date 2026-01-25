import './FileMenu.css';

interface Props {
  onOpenPopup: () => void;
}

export default function FileMenu({ onOpenPopup }: Props) {
  return (
    <div className="browser-menu">
      <button onClick={onOpenPopup}>New page</button>
      <button onClick={onOpenPopup}>New window</button>
      <button onClick={onOpenPopup}>Find</button>
      <button onClick={onOpenPopup}>History</button>
      <button onClick={onOpenPopup}>Settings</button>
      <button onClick={onOpenPopup}>Help</button>
    </div>
  );
}