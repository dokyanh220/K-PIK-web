import { Link2, Download } from "lucide-react";
import { cn } from "../../utils/cn";

export function UrlInput({ url, setUrl, onDownload }) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {}
  };

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
          2
        </div>
        <h2 className="text-lg font-bold text-slate-700">Dán liên kết video</h2>
      </div>

      <div className="p-6 glass-card space-y-6">
        <div className="relative flex items-center group">
          <div className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <Link2 size={20} />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@username/video/1234567890"
            className="w-full py-4 pl-12 pr-28 glass-input text-base"
          />
          <button
            onClick={handlePaste}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-indigo-200 transition-all text-sm flex items-center gap-2"
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
            "w-full py-4 text-lg",
            url
              ? "glass-button"
              : "bg-slate-200 text-slate-400 rounded-xl font-medium flex items-center justify-center gap-2 cursor-not-allowed"
          )}
        >
          <Download size={24} />
          Tải xuống
        </button>
      </div>
    </div>
  );
}
