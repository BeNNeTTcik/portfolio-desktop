import { createContext, useContext, useState } from 'react';

export type Resolution = '800x600' | '1024x768' | '1280x720';

interface SettingsState {
  resolution: Resolution;
  desktopColor: string;
  classicBorders: boolean;
  animations: boolean;
}

interface SettingsContextType {
  settings: SettingsState;
  setSettings: React.Dispatch<React.SetStateAction<SettingsState>>;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<SettingsState>({
    resolution: '1024x768',
    desktopColor: '#008080', // classic teal
    classicBorders: true,
    animations: true,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
};
