import './BrowserMenu.css';

interface Props {
  onSelect: (action:string) => void;
}

export default function BrowserMenu({ onSelect }: Props) {
  return (
    <div className="browser-menu">
      <button onClick={() => onSelect('')}>New page</button>
      <button onClick={() => onSelect('')}>New window</button>
      <button onClick={() => onSelect('Find')}>Find</button>
      <button onClick={() => onSelect('History')}>History</button>
      <button onClick={() => onSelect('Settings')}>Settings</button>
      <button onClick={() => onSelect('Help')}>Help</button>
    </div>
  );
}