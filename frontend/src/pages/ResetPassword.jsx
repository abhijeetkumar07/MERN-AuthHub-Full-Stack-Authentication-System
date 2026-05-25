import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import toast from "react-hot-toast";
import api from "../utils/api.js";
import Button from "../components/Button.jsx";
import FormInput from "../components/FormInput.jsx";
import { getApiErrorMessage } from "../utils/errors.js";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post(`/auth/reset-password/${token}`, { password });
      toast.success(data.message);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Reset failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
      <form onSubmit={submit} className="glass w-full rounded-[2rem] p-8">
        <h1 className="text-3xl font-black">New password</h1>
        <p className="mt-2 text-sm text-slate-400">Create a fresh credential for this identity.</p>
        <div className="mt-7"><FormInput icon={LockKeyhole} label="Password" type="password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
        <Button loading={loading} className="mt-6 w-full">Update password</Button>
        <Link to="/login" className="mt-5 block text-center text-sm font-bold text-cyan-200">Back to login</Link>
      </form>
    </section>
  );
}
