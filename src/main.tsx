import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
if (!localStorage.getItem("vite-ui-theme")) {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
