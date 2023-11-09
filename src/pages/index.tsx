// src/pages/index.tsx
import React from "react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/button";
import { Sun, Moon } from "lucide-react"; // Se till att du har importerat ikonerna

const Home = () => {
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <h1>Welcome to My Next.js Project</h1>
      <Button onClick={handleThemeChange}>
        {theme === "dark" ? <Sun size="1.2rem" /> : <Moon size="1.2rem" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default Home;
