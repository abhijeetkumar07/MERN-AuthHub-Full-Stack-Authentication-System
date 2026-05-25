import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import api from "../utils/api.js";
import Button from "../components/Button.jsx";
import FormInput from "../components/FormInput.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/forgot-password", { email });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
      <form onSubmit={submit} className="glass w-full rounded-[2rem] p-8">
        <h1 className="text-3xl font-black">Reset access</h1>
        <p className="mt-2 text-sm text-slate-400">Request a reset token for your account.</p>
        <div className="mt-7"><FormInput icon={Mail} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
        <Button loading={loading} className="mt-6 w-full">Send reset link</Button>
        <Link to="/login" className="mt-5 block text-center text-sm font-bold text-cyan-200">Back to login</Link>
      </form>
    </section>
  );
}
