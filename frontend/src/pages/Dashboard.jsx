import { Activity, Fingerprint, KeyRound, ShieldCheck, UsersRound } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import StatCard from "../components/StatCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const data = [
  { name: "Mon", auth: 32 }, { name: "Tue", auth: 48 }, { name: "Wed", auth: 41 },
  { name: "Thu", auth: 74 }, { name: "Fri", auth: 68 }, { name: "Sat", auth: 92 }, { name: "Sun", auth: 86 },
];

export default function Dashboard({ adminView = false }) {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">{adminView ? "Admin layer" : "Secure workspace"}</p>
          <h1 className="mt-3 text-4xl font-black">Hello, {user?.name?.split(" ")[0] || "User"}</h1>
          <p className="mt-2 text-slate-400">Your real-time identity console is online.</p>
        </div>
        <button className="glass rounded-2xl px-5 py-3 text-sm font-bold transition hover:shadow-glow">Generate access report</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ShieldCheck} label="Protected requests" value="24.8k" trend="+18%" delay={0.05} />
        <StatCard icon={UsersRound} label="Active identities" value={adminView ? "1,284" : "1"} trend="+7%" delay={0.1} />
        <StatCard icon={KeyRound} label="Token refreshes" value="6,910" trend="+12%" delay={0.15} />
        <StatCard icon={Fingerprint} label="Risk score" value="0.7%" trend="Low" delay={0.2} />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <section className="glass rounded-[2rem] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">Authentication flow</h2>
              <p className="text-sm text-slate-400">Weekly verified sessions</p>
            </div>
            <Activity className="h-5 w-5 text-cyan-200" />
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="authGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <Tooltip contentStyle={{ background: "rgba(15,23,42,.85)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 18 }} />
                <Area type="monotone" dataKey="auth" stroke="#22d3ee" fill="url(#authGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="glass rounded-[2rem] p-5">
          <h2 className="text-xl font-black">Activity overview</h2>
          <div className="mt-5 space-y-3">
            {["Cookie session issued", "Profile route verified", "Role guard evaluated", "Password reset channel ready"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm font-bold">{item}</p>
                <p className="mt-1 text-xs text-slate-400">Just now</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
