import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import {
  TikTokIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "../icons/PlatformIcons";

export function PlatformSelector({ platform, setPlatform }) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm font-bold transition-colors">
          1
        </div>
        <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200 transition-colors">Chọn nền tảng</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 glass-card">
        <button
          onClick={() => setPlatform("tiktok")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 border-2 text-lg",
            platform === "tiktok"
              ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <TikTokIcon />
          <span>TikTok</span>
          {platform === "tiktok" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>

        <button
          disabled
          className="py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-medium bg-slate-50 dark:bg-slate-800/30 border-2 border-transparent text-slate-300 dark:text-slate-600 cursor-not-allowed text-lg transition-colors"
        >
          <FacebookIcon />
          <span>Facebook</span>
        </button>
        <button
          onClick={() => setPlatform("instagram")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 border-2 text-lg",
            platform === "instagram"
              ? "border-pink-500 bg-pink-50/50 dark:bg-pink-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <InstagramIcon />
          <span>Instagram</span>
          {platform === "instagram" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-sm">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>
        <button
          disabled
          className="py-4 px-4 rounded-xl flex items-center justify-center gap-2 font-medium bg-slate-50 dark:bg-slate-800/30 border-2 border-transparent text-slate-300 dark:text-slate-600 cursor-not-allowed text-lg transition-colors"
        >
          <PinterestIcon />
          <span>Pinterest</span>
        </button>
      </div>
    </div>
  );
}
