export default function FormInput({ icon: Icon, label, ...props }) {
  return (
    <label className="group block">
      <span className="mb-2 block text-sm font-semibold text-slate-300 light:text-slate-700">{label}</span>
      <span className="glass flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-300 group-focus-within:border-cyan-300/50 group-focus-within:shadow-glow">
        {Icon && <Icon className="h-5 w-5 text-cyan-200 light:text-cyan-700" />}
        <input
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500 light:text-slate-950"
          {...props}
        />
      </span>
    </label>
  );
}
