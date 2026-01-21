import { MENU_DATA } from '../../data/menuData';
import { ICON_MAP } from '../../icons/iconMap';
import './SubMenu.css';
import type { WindowId } from '../../types/window';

interface SubMenuProps {
  category: string;
  onSelect: (id: WindowId) => void;
}

export default function SubMenu({ category, onSelect }: SubMenuProps) {
  const items = MENU_DATA[category];
  if (!items) return null;

  return (
    <div className={`submenu submenu-${category}`}>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onSelect(item.id)}>
            {item.icon && (
              <span className="menu-icon">
                {ICON_MAP[item.icon]}
                </span>
            )}
            <span className="menu-label"> {item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}