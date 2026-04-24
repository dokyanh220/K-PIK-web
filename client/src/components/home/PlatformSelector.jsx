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
        <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
          1
        </div>
        <h2 className="text-lg font-bold text-slate-700">Chọn nền tảng</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 glass-card">
        <button
          onClick={() => setPlatform("tiktok")}
          className={cn(
            "relative py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 border-2",
            platform === "tiktok"
              ? "border-indigo-500 bg-indigo-50/50 text-slate-800 shadow-sm"
              : "border-transparent bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
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
          className="py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium bg-slate-50 border-2 border-transparent text-slate-300 cursor-not-allowed"
        >
          <FacebookIcon />
          <span>Facebook</span>
        </button>
        <button
          disabled
          className="py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium bg-slate-50 border-2 border-transparent text-slate-300 cursor-not-allowed"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </button>
        <button
          disabled
          className="py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium bg-slate-50 border-2 border-transparent text-slate-300 cursor-not-allowed"
        >
          <PinterestIcon />
          <span>Pinterest</span>
        </button>
      </div>
    </div>
  );
}
