
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system;
// type Theme = "dark";


type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get stored theme or use default
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    return storedTheme || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any existing theme classes
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
        
      root.classList.add(systemTheme);
      return;
    }
    
    // Add current theme class
    root.classList.add(theme);
    
    // Add data-theme attribute for better CSS targeting
    root.setAttribute('data-theme', theme);
    
    // Add theme transition classes for smoother changes
    root.classList.add('theme-transition');
  }, [theme]);

  // Apply initial theme settings
  useEffect(() => {
    // Initialize theme if not already set
    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(storageKey, defaultTheme);
      setTheme(defaultTheme);
    }
    
    // Apply transition classes for smoother theme changes
    const root = window.document.documentElement;
    root.classList.add('transition-colors', 'duration-300');
    
    // Add page transition classes
    document.body.classList.add('transition-opacity', 'duration-300');
  }, [storageKey, defaultTheme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
    
  return context;
};
