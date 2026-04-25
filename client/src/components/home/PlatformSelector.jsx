import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import {
  TikTokIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YouTubeIcon,
  SoundCloudIcon,
  TwitterIcon,
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5 glass-card">
        <button
          onClick={() => setPlatform("tiktok")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
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
          onClick={() => setPlatform("facebook")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
            platform === "facebook"
              ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <FacebookIcon />
          <span>Facebook</span>
          {platform === "facebook" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>

        <button
          onClick={() => setPlatform("instagram")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
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
          onClick={() => setPlatform("youtube")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
            platform === "youtube"
              ? "border-red-500 bg-red-50/50 dark:bg-red-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <YouTubeIcon />
          <span>YouTube</span>
          {platform === "youtube" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white shadow-sm">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>

        <button
          onClick={() => setPlatform("soundcloud")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
            platform === "soundcloud"
              ? "border-orange-500 bg-orange-50/50 dark:bg-orange-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <SoundCloudIcon />
          <span>SoundCloud</span>
          {platform === "soundcloud" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-sm">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>

        <button
          onClick={() => setPlatform("twitter")}
          className={cn(
            "relative py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold transition-all duration-300 border-2 text-base",
            platform === "twitter"
              ? "border-sky-500 bg-sky-50/50 dark:bg-sky-900/20 text-slate-800 dark:text-slate-100 shadow-sm"
              : "border-transparent bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300"
          )}
        >
          <TwitterIcon />
          <span>Twitter</span>
          {platform === "twitter" && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-sm">
              <Check size={12} strokeWidth={4} />
            </div>
          )}
        </button>
        <button
          disabled
          className="py-4 px-4 rounded-xl flex flex-col items-center justify-center gap-3 font-bold bg-slate-50 dark:bg-slate-800/30 border-2 border-transparent text-slate-300 dark:text-slate-600 cursor-not-allowed text-base transition-colors"
        >
          <PinterestIcon />
          <span>Pinterest</span>
        </button>
      </div>
    </div>
  );
}
