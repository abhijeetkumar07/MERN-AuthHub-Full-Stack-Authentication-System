import { Outlet } from "react-router-dom";
import BackgroundFX from "../components/BackgroundFX.jsx";

export default function AuthLayout() {
  return (
    <main className="mesh-bg relative min-h-screen overflow-hidden px-4 py-8">
      <BackgroundFX />
      <Outlet />
    </main>
  );
}
