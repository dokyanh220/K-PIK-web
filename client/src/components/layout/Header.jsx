import { Sun, Moon, Globe } from "lucide-react";

export function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="w-full max-w-3xl flex justify-end gap-3 mb-8">
      <button
        onClick={toggleDarkMode}
        className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
      >
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <button className="px-4 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium text-sm transition-colors">
        <Globe size={18} />
        <span>VN</span>
      </button>
    </div>
  );
}
