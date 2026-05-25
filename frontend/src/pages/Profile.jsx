import { useState } from "react";
import { Camera, Mail, Save, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import Button from "../components/Button.jsx";
import FormInput from "../components/FormInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { getApiErrorMessage } from "../utils/errors.js";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: user?.name || "", avatar: user?.avatar || "" });
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await updateProfile(form);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Profile update failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-black">Profile</h1>
      <p className="mt-2 text-slate-400">Tune the identity shown across protected views.</p>
      <form onSubmit={submit} className="glass mt-6 rounded-[2rem] p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <img className="h-24 w-24 rounded-3xl border border-white/15 object-cover" src={form.avatar || `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(user?.name || "AV")}`} alt="Profile avatar" />
          <div>
            <p className="text-xl font-black">{user?.name}</p>
            <p className="text-sm text-slate-400">{user?.email}</p>
            <p className="mt-2 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{user?.role}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <FormInput icon={UserRound} label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <FormInput icon={Camera} label="Avatar URL" value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} />
          <FormInput icon={Mail} label="Email" value={user?.email || ""} disabled />
        </div>
        <Button loading={loading} className="mt-6" type="submit"><Save className="h-4 w-4" /> Save profile</Button>
      </form>
    </div>
  );
}
