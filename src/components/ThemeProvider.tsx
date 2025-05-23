
import { createContext, useContext, useEffect } from "react";

type Theme = "dark";

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
  // Always use dark theme
  const theme: Theme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any existing theme classes and ensure dark theme is applied
    root.classList.remove("light");
    root.classList.add("dark");
    
    // Add data-theme attribute for better CSS targeting
    root.setAttribute('data-theme', 'dark');
    
    // Add theme transition classes for smoother changes
    root.classList.add('theme-transition');
  }, []);

  // Apply initial theme settings
  useEffect(() => {
    // Initialize theme to dark
    localStorage.setItem(storageKey, 'dark');
    
    // Apply transition classes for smoother theme changes
    const root = window.document.documentElement;
    root.classList.add('transition-colors', 'duration-300');
    
    // Add page transition classes
    document.body.classList.add('transition-opacity', 'duration-300');
  }, [storageKey]);

  const value = {
    theme,
    setTheme: () => {
      // Do nothing - we only use dark theme
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
