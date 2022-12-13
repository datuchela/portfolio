// Route Components
import Index from "./routes";
import { useState } from "react";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div data-theme={isDarkMode ? "dracula" : "light"} className="p-8 relative">
      <ThemeButton themeState={{ isDarkMode, setIsDarkMode }} />
      <main className="flex flex-col">
        <Index isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
