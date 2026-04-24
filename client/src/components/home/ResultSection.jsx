import { Play, Music, Download, Image as ImageIcon } from "lucide-react";
import { cn } from "../../utils/cn";

export function ResultSection({ data }) {
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

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center gap-3 mb-4 pl-2">
        <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
          3
        </div>
        <h2 className="text-lg font-bold text-slate-700">Kết quả</h2>
      </div>

      {/* Main Info Card (used for both Video and Image types to show title/author and music) */}
      <div className="p-5 glass-card flex flex-col md:flex-row gap-6 mb-6">
        <div className="relative w-full md:w-48 aspect-video rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-inner group">
          <img
            src={data.cover || defaultCover}
            alt="Thumbnail"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
              <Play fill="currentColor" size={20} className="ml-1" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
            {data.title || "Video TikTok"}
          </h3>
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-6 font-medium">
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
              {formatDuration(data.duration)}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:w-[220px]">
            {data.type === "video" && (
              <a 
                href={data.video} 
                download 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 rounded-xl font-medium flex items-center justify-center gap-2 py-3"
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
                  "w-full transition-all duration-300 rounded-xl font-medium flex items-center justify-center gap-2 py-3",
                  data.type === "video" 
                    ? "bg-slate-50 text-indigo-600 border border-slate-100 hover:bg-slate-100 shadow-sm"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-200"
                )}
              >
                <Music size={18} />
                <span>Tải nhạc (MP3)</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Slideshow Images Section */}
      {data.type === "image" && data.images && data.images.length > 0 && (
        <div className="p-6 glass-card space-y-6 mb-6">
          <div className="flex items-center gap-2 text-slate-700 font-bold">
            <ImageIcon size={20} className="text-indigo-500" />
            <h3>Ảnh trong slideshow ({data.images.length})</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {data.images.map((img, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-100 group">
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold text-slate-700 shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <a 
                  href={img}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="w-full glass-button-secondary py-2 text-sm text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-800 shadow-none flex justify-center items-center"
                >
                  <Download size={14} className="mr-2" />
                  Tải ảnh
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}