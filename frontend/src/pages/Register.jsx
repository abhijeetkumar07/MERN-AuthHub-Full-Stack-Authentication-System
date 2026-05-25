import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, Sparkles, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Button from "../components/Button.jsx";
import FormInput from "../components/FormInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { pageTransition } from "../animations/pageTransitions.js";
import { getApiErrorMessage } from "../utils/errors.js";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await register(form);
      navigate("/dashboard");
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Registration failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section {...pageTransition} className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
      <form onSubmit={submit} className="glass w-full rounded-[2rem] p-6 sm:p-8">
        <Sparkles className="h-10 w-10 text-cyan-200" />
        <h1 className="mt-5 text-3xl font-black">Create your AuthVerse</h1>
        <p className="mt-2 text-sm text-slate-400">Spin up a secure account with a production auth flow.</p>
        <div className="mt-7 space-y-4">
          <FormInput icon={UserRound} label="Name" placeholder="Ada Lovelace" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <FormInput icon={Mail} label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <FormInput icon={LockKeyhole} label="Password" type="password" minLength="6" placeholder="Minimum 6 characters" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <Button loading={loading} className="mt-6 w-full" type="submit">Create account</Button>
        <p className="mt-6 text-center text-sm text-slate-400">Already onboarded? <Link className="font-bold text-cyan-200" to="/login">Login</Link></p>
      </form>
    </motion.section>
  );
}
