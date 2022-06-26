import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({});

export const useTheme = () => {
  const [colorSchema, setColorScheme] = useState<'default' | 'dark'>('dark');
  useEffect(() => {
    if (!window.localStorage.getItem('saas:theme'))
      window.localStorage.setItem('saas:theme', colorSchema);
    else setColorScheme(localStorage['saas:theme']);
  }, []);
  useEffect(() => {
    if (colorSchema === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'default');
    }
  }, [colorSchema]);

  const switchColorSchema = (theme: 'default' | 'dark') => {
    setColorScheme(theme);
    localStorage['saas:theme'] = theme;
  };

  return { colorSchema, switchColorSchema };
};

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useTheme();

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
