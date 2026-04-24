import { Link2, Download } from "lucide-react";
import { cn } from "../../utils/cn";

export function UrlInput({ platform = "tiktok", url, setUrl, onDownload }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {}
  };

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <div className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border transition-colors",
          platform === "instagram"
            ? "bg-pink-50 dark:bg-slate-800 border-pink-100 dark:border-slate-700 text-pink-600 dark:text-pink-400"
            : "bg-indigo-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400"
        )}>
          2
        </div>
        <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200 transition-colors">Dán liên kết video</h2>
      </div>

      <div className="p-6 glass-card space-y-6">
        <div className="relative flex items-center group">
          <div className={cn(
            "absolute left-4 transition-colors",
            platform === "instagram" ? "text-slate-400 group-focus-within:text-pink-500" : "text-slate-400 group-focus-within:text-indigo-500"
          )}>
            <Link2 size={20} />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={
              platform === "instagram"
                ? "https://www.instagram.com/reel/1234567890/"
                : "https://www.tiktok.com/@username/video/1234567890"
            }
            className="w-full py-4 pl-12 pr-28 glass-input text-base"
          />
          <button
            onClick={handlePaste}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg font-medium shadow-md transition-all text-sm flex items-center gap-2",
              platform === "instagram"
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 shadow-pink-200"
                : "bg-indigo-500 hover:bg-indigo-600 shadow-indigo-200"
            )}
          >
            Dán
            <svg
              className="w-4 h-4 opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={onDownload}
          disabled={!url}
          className={cn(
            "w-full py-4 text-lg transition-all duration-300 rounded-xl font-medium flex items-center justify-center gap-2",
            !url
              ? "bg-slate-200 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 cursor-not-allowed"
              : platform === "instagram"
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/20 hover:shadow-pink-300 dark:hover:shadow-pink-900/40"
              : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 hover:shadow-indigo-300 dark:hover:shadow-indigo-900/40"
          )}
        >
          <Download size={24} />
          Tải xuống
        </button>
      </div>
    </div>
  );
}
