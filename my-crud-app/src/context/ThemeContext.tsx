import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Theme = "light" | "dark" | "ocean" | "forest" | "midnight" | "emerald" | "solarized";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-root theme-${theme}`} style={{ minHeight: '100vh', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
