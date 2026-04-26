import { Play, Music, Download, Image as ImageIcon, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/cn";

export function ResultSection({ data, platform }) {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const isYoutube = platform === "youtube";

  const handleCopy = (url, idx) => {
    navigator.clipboard.writeText(url);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  if (!data) {
    return <div className="text-center text-slate-500 font-medium">Chưa có dữ liệu</div>;
  }

  const formatDuration = (seconds) => {
    if (!seconds) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const defaultCover = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80";
  const PROXY_URL = "http://localhost:3000/proxy";

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center gap-3 mb-6 pl-2">
        <div className={cn(
          "w-8 h-8 rounded-full border text-sm font-bold flex items-center justify-center shadow-sm transition-all",
          isYoutube 
            ? "bg-red-50 dark:bg-red-500/20 border-red-200 dark:border-red-500/40 text-red-600 dark:text-red-400 dark:shadow-[0_0_10px_rgba(239,68,68,0.3)]"
            : "bg-blue-50 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/40 text-blue-600 dark:text-blue-400 dark:shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        )}>
          3
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wide transition-colors">Kết quả phân tích</h2>
      </div>

      <div className={cn(
        "p-6 glass-card flex flex-col md:flex-row gap-8 mb-8 group border-slate-200",
        isYoutube ? "dark:border-red-500/30" : "dark:border-blue-500/30"
      )}>
        <div className="relative w-full md:w-56 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 shrink-0 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/5">
          <img
            src={data.cover ? `${PROXY_URL}?url=${encodeURIComponent(data.cover)}` : defaultCover}
            alt="Thumbnail"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90 dark:opacity-70 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10 dark:bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500">
            <div className={cn(
              "w-16 h-16 rounded-full backdrop-blur-xl border flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500",
              isYoutube 
                ? "bg-white/50 dark:bg-red-500/20 border-white/50 dark:border-red-400/40 text-red-600 dark:text-red-400 dark:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                : "bg-white/50 dark:bg-blue-500/20 border-white/50 dark:border-blue-400/40 text-blue-600 dark:text-blue-400 dark:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            )}>
              <Play fill="currentColor" size={24} className="ml-1" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-white/80 dark:bg-black/60 backdrop-blur-md text-[10px] font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 uppercase tracking-widest">
            {data.type || "Media"}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-2">
          <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-3 line-clamp-2 leading-tight tracking-tight transition-colors duration-300">
            {data.title || "Nội dung tải về"}
          </h3>

          <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400 text-sm mb-8 font-light tracking-wide">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              @{data.author || "username"}
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatDuration(data?.duration)}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {data.type === "video" && (
              <a
                href={data.video}
                download
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "w-full text-white shadow-lg transition-all duration-300 rounded-xl font-bold flex items-center justify-center gap-3 py-4 text-base",
                  isYoutube
                    ? "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 dark:shadow-[0_0_20px_rgba(239,68,68,0.3)] dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                )}
              >
                <Download size={18} />
                <span>Tải video (MP4)</span>
              </a>
            )}

            {data.music && (
              <a
                href={data.music}
                download
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "w-full transition-all duration-300 rounded-xl font-bold flex items-center justify-center gap-3 py-4 text-base",
                  data.type === "video"
                    ? isYoutube
                      ? "bg-slate-100 dark:bg-slate-800/40 text-red-600 dark:text-red-400 border border-slate-200 dark:border-red-500/20 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-red-300 dark:hover:border-red-500/40"
                      : "bg-slate-100 dark:bg-slate-800/40 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-blue-500/20 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white shadow-lg dark:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                )}
              >
                <Music size={18} />
                <span>Tải nhạc (MP3)</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {data.type === "image" && data.images && data.images.length > 0 && (
        <div className="p-8 glass-card border-slate-200 dark:border-cyan-500/20 space-y-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-100 font-black tracking-tight text-xl">
              <ImageIcon size={24} className="text-cyan-500 dark:text-cyan-400" />
              <h3>Album ({data.images.length})</h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 dark:from-cyan-500/30 to-transparent ml-6" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {data.images.map((img, idx) => (
              <div key={idx} className="flex flex-col gap-3 group/item">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-900">
                  <img
                    src={`${PROXY_URL}?url=${encodeURIComponent(img)}`}
                    alt={`Slide ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700 ease-out opacity-90 dark:opacity-80"
                  />
                  <div className="absolute top-3 left-3 w-7 h-7 bg-white/90 dark:bg-blue-600/90 backdrop-blur-md rounded-lg flex items-center justify-center text-[10px] font-black text-slate-800 dark:text-white shadow-lg border border-slate-200 dark:border-white/20">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={img}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-white/80 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white border border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-400/50 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex justify-center items-center shadow-sm dark:shadow-lg"
                  >
                    <Download size={14} className="mr-1.5" />
                    Tải ảnh
                  </a>
                  <button
                    onClick={() => handleCopy(img, idx)}
                    className="w-11 bg-white/80 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-cyan-600 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-white border border-slate-200 dark:border-white/5 hover:border-cyan-300 dark:hover:border-cyan-400/50 py-2.5 rounded-xl transition-all duration-300 flex justify-center items-center shrink-0 shadow-sm dark:shadow-lg"
                    title="Sao chép link ảnh"
                  >
                    {copiedIdx === idx ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <LinkIcon size={14} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}