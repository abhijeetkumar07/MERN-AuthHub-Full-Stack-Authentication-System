import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mesh-bg flex min-h-screen items-center justify-center p-6">
          <section className="glass max-w-lg rounded-3xl p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Runtime shield</p>
            <h1 className="mt-4 text-3xl font-black">Something fractured in the interface.</h1>
            <p className="mt-3 text-sm text-slate-300">Refresh the page or return to the dashboard to recover the session.</p>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
