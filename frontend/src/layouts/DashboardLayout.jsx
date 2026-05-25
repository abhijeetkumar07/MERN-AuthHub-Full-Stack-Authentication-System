import { Outlet } from "react-router-dom";
import BackgroundFX from "../components/BackgroundFX.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function DashboardLayout() {
  return (
    <main className="mesh-bg relative min-h-screen overflow-hidden pb-28 text-white md:pb-0">
      <BackgroundFX />
      <Sidebar />
      <section className="relative z-10 px-4 py-6 md:ml-80 md:px-8">
        <Outlet />
      </section>
    </main>
  );
}
