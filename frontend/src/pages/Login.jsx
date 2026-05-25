import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Button from "../components/Button.jsx";
import FormInput from "../components/FormInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { pageTransition } from "../animations/pageTransitions.js";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await login(form);
      navigate(location.state?.from?.pathname || "/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section {...pageTransition} className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
      <form onSubmit={submit} className="glass w-full rounded-[2rem] p-6 sm:p-8">
        <ShieldCheck className="h-10 w-10 text-cyan-200" />
        <h1 className="mt-5 text-3xl font-black">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-400">Sign into the AuthVerse command center.</p>
        <div className="mt-7 space-y-4">
          <FormInput icon={Mail} label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <FormInput icon={LockKeyhole} label="Password" type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <Link to="/forgot-password" className="mt-4 block text-right text-sm font-semibold text-cyan-200">Forgot password?</Link>
        <Button loading={loading} className="mt-6 w-full" type="submit">Login securely</Button>
        <p className="mt-6 text-center text-sm text-slate-400">No identity yet? <Link className="font-bold text-cyan-200" to="/register">Create one</Link></p>
      </form>
    </motion.section>
  );
}
