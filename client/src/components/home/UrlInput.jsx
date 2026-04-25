import { Link2, Download } from "lucide-react";
import { cn } from "../../utils/cn";

export function UrlInput({ platform = "tiktok", url, setUrl, onDownload }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) { }
  };

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <div className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border transition-colors",
          platform === "instagram"
            ? "bg-pink-50 dark:bg-slate-800 border-pink-100 dark:border-slate-700 text-pink-600 dark:text-pink-400"
            : platform === "facebook"
              ? "bg-blue-50 dark:bg-slate-800 border-blue-100 dark:border-slate-700 text-blue-600 dark:text-blue-400"
              : platform === "youtube"
                ? "bg-red-50 dark:bg-slate-800 border-red-100 dark:border-slate-700 text-red-600 dark:text-red-400"
                : platform === "soundcloud"
                  ? "bg-orange-50 dark:bg-slate-800 border-orange-100 dark:border-slate-700 text-orange-600 dark:text-orange-400"
                  : platform === "twitter"
                    ? "bg-sky-50 dark:bg-slate-800 border-sky-100 dark:border-slate-700 text-sky-600 dark:text-sky-400"
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
            platform === "instagram" ? "text-slate-400 group-focus-within:text-pink-500" : platform === "facebook" ? "text-slate-400 group-focus-within:text-blue-600" : platform === "youtube" ? "text-slate-400 group-focus-within:text-red-600" : platform === "soundcloud" ? "text-slate-400 group-focus-within:text-orange-600" : platform === "twitter" ? "text-slate-400 group-focus-within:text-sky-600" : "text-slate-400 group-focus-within:text-indigo-500"
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
                : platform === "facebook"
                  ? "https://www.facebook.com/watch/?v=1234567890"
                  : platform === "youtube"
                    ? "https://www.youtube.com/watch?v=1234567890"
                    : platform === "soundcloud"
                      ? "https://soundcloud.com/artist/track"
                      : platform === "twitter"
                        ? "https://twitter.com/user/status/1234567890"
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
                : platform === "facebook"
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                  : platform === "youtube"
                    ? "bg-red-600 hover:bg-red-700 shadow-red-200"
                    : platform === "soundcloud"
                      ? "bg-orange-600 hover:bg-orange-700 shadow-orange-200"
                      : platform === "twitter"
                        ? "bg-sky-500 hover:bg-sky-600 shadow-sky-200"
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
                : platform === "facebook"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:shadow-blue-300 dark:hover:shadow-blue-900/40"
                  : platform === "youtube"
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 dark:shadow-red-900/20 hover:shadow-red-300 dark:hover:shadow-red-900/40"
                    : platform === "soundcloud"
                      ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/20 hover:shadow-orange-300 dark:hover:shadow-orange-900/40"
                      : platform === "twitter"
                        ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-200 dark:shadow-sky-900/20 hover:shadow-sky-300 dark:hover:shadow-sky-900/40"
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
