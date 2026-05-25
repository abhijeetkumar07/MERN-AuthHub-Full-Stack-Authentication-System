export default function SkeletonLoader({ fullScreen = false }) {
  return (
    <div className={`${fullScreen ? "mesh-bg min-h-screen" : ""} p-6`}>
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="glass rounded-3xl p-5">
            <div className="skeleton h-8 w-24 animate-shimmer rounded-full" />
            <div className="skeleton mt-5 h-24 animate-shimmer rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
