export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/animations/404-bow.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center text-white">

          <h2 className="mt-4 text-2xl font-semibold tracking-wide text-white sm:text-3xl">
            Oooops! Looks like you are lost
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/20"
          >
            Back to Home
          </a>

        </div>
      </div>
    </main>
  );
}