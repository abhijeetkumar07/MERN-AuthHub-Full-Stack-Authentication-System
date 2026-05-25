import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import BackgroundFX from "../components/BackgroundFX.jsx";
import { pageTransition } from "../animations/pageTransitions.js";

export default function NotFound() {
  return (
    <motion.main {...pageTransition} className="mesh-bg relative grid min-h-screen place-items-center overflow-hidden px-4 text-center text-white">
      <BackgroundFX />
      <section className="glass relative z-10 max-w-xl rounded-[2rem] p-8">
        <p className="neon-text text-8xl font-black">404</p>
        <h1 className="mt-4 text-3xl font-black">This route left orbit.</h1>
        <p className="mt-3 text-slate-400">The page you requested does not exist in this authentication universe.</p>
        <Link to="/" className="mt-7 inline-block"><Button>Return home</Button></Link>
      </section>
    </motion.main>
  );
}
