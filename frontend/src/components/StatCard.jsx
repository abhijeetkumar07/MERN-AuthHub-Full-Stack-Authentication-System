import { motion } from "framer-motion";

export default function StatCard({ icon: Icon, label, value, trend, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className="glass rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">{trend}</span>
      </div>
      <p className="mt-5 text-sm text-slate-400">{label}</p>
      <h3 className="mt-1 text-3xl font-black">{value}</h3>
    </motion.article>
  );
}
