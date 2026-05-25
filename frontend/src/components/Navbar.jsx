import { Link } from "react-router-dom";
import { Moon, ShieldCheck, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import Button from "./Button.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl animated-gradient animate-gradient-shift">
            <ShieldCheck className="h-5 w-5 text-white" />
          </span>
          <span className="font-black">AuthVerse</span>
        </Link>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="grid h-11 w-11 place-items-center rounded-2xl glass">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/login" className="hidden rounded-2xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:text-white sm:block light:text-slate-700">
            Login
          </Link>
          <Link to="/register">
            <Button className="min-h-11 px-4">Start Free</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
