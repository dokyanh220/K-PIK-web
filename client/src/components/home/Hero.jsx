export function Hero() {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      <div className="relative inline-block">
        <h1 className="text-6xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 mb-3 drop-shadow-sm">
          K-PIK
        </h1>
        <div className="absolute -top-4 -right-8 text-indigo-300 animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
          </svg>
        </div>
        <div className="absolute top-4 -right-14 text-indigo-200 animate-pulse delay-150">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
          </svg>
        </div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-lg font-medium transition-colors">Fast & Simple Video Downloader</p>
    </div>
  );
}
