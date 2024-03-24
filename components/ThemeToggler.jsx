'use client'
import { useTheme } from 'next-themes';
import { Button } from "./ui/button";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Button onClick={()=>setTheme(theme === "light" ? "dark" : "light") } className="hidden">
                
            </Button>
        </div>
    );
  
};

export default ThemeToggler;