import { Sun, Globe } from "lucide-react";

export function Header() {
  return (
    <div className="w-full max-w-3xl flex justify-end gap-3 mb-8">
      <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-indigo-500 transition-colors">
        <Sun size={20} />
      </button>
      <button className="px-4 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center gap-2 text-slate-600 hover:text-indigo-500 font-medium text-sm transition-colors">
        <Globe size={18} />
        <span>VN</span>
      </button>
    </div>
  );
}
