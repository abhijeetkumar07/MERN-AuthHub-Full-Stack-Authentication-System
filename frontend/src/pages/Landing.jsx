import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Fingerprint, LockKeyhole, Radar, ShieldCheck, Sparkles, Zap } from "lucide-react";
import BackgroundFX from "../components/BackgroundFX.jsx";
import Button from "../components/Button.jsx";
import Navbar from "../components/Navbar.jsx";
import { pageTransition } from "../animations/pageTransitions.js";

const features = [
  { icon: Fingerprint, title: "Passwordless-ready core", text: "JWT cookies, reset flows, roles, and profile APIs arranged for production growth." },
  { icon: Radar, title: "Session intelligence", text: "Persistent login, secure route guards, and activity signals built into the console." },
  { icon: Zap, title: "Fast SaaS feel", text: "Animated states, skeleton loaders, page transitions, and tactile neon controls." },
];

export default function Landing() {
  return (
    <motion.main {...pageTransition} className="mesh-bg relative min-h-screen overflow-hidden text-white">
      <BackgroundFX />
      <Navbar />
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Next Generation Authentication Platform
          </motion.div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            AuthVerse
            <span className="neon-text animate-gradient-shift block">identity that feels alive.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-700">
            A premium MERN authentication platform with secure cookies, protected dashboards, polished forms, profile controls, and an interface inspired by the best modern SaaS products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register"><Button className="w-full sm:w-auto">Launch Console <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/login"><Button variant="ghost" className="w-full sm:w-auto">View Login</Button></Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["JWT auth", "Role access", "MongoDB Atlas"].map((item) => (
              <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{item}</span>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="glass relative rounded-[2rem] p-4">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Auth health</p>
                <h2 className="text-3xl font-black">99.98%</h2>
              </div>
              <ShieldCheck className="h-10 w-10 text-cyan-200" />
            </div>
            <div className="mt-8 grid gap-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]">
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <LockKeyhole className="h-5 w-5 text-cyan-100" />
              <p className="mt-2 text-sm font-bold">Encrypted cookie session established</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
