import { Link, NavLink } from "react-router-dom";
import { BarChart3, LogOut, ShieldCheck, Sparkles, UserRound, Wand2 } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/profile", label: "Profile", icon: UserRound },
  { to: "/admin", label: "Admin", icon: Wand2 },
];

export default function Sidebar() {
  const { logout, user } = useAuth();

  return (
    <aside className="glass fixed bottom-4 left-4 right-4 z-40 rounded-3xl p-3 md:bottom-auto md:right-auto md:top-4 md:h-[calc(100vh-2rem)] md:w-72 md:p-5">
      <div className="hidden items-center gap-3 md:flex">
        <span className="grid h-11 w-11 place-items-center rounded-2xl animated-gradient animate-gradient-shift">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <Link to="/" className="font-black">AuthVerse</Link>
          <p className="text-xs text-slate-400">Identity console</p>
        </div>
      </div>
      <div className="mt-0 flex items-center justify-around gap-2 md:mt-10 md:block md:space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-white/15 text-cyan-100 shadow-glow light:bg-slate-950 light:text-white" : "text-slate-400 hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:text-slate-950"}`}
          >
            <Icon className="h-5 w-5" />
            <span className="hidden md:inline">{label}</span>
          </NavLink>
        ))}
      </div>
      <div className="mt-auto hidden pt-10 md:block">
        <div className="glass rounded-3xl p-4">
          <Sparkles className="h-5 w-5 text-cyan-200" />
          <p className="mt-3 text-sm font-bold">{user?.name || "Auth user"}</p>
          <p className="truncate text-xs text-slate-400">{user?.email}</p>
        </div>
        <button onClick={logout} className="mt-3 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-400 transition hover:bg-rose-500/10 hover:text-rose-200">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
