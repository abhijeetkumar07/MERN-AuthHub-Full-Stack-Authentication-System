import { Loader2 } from "lucide-react";

export default function Button({ children, loading, className = "", variant = "primary", ...props }) {
  const variants = {
    primary: "animated-gradient animate-gradient-shift text-white shadow-glow hover:scale-[1.02]",
    ghost: "glass text-slate-100 hover:bg-white/14 light:text-slate-900",
    dark: "bg-slate-950 text-white hover:bg-slate-900",
  };

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
