import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { PlatformSelector } from "./components/home/PlatformSelector";
import { UrlInput } from "./components/home/UrlInput";
import { ResultSection } from "./components/home/ResultSection";
import { getDataTikTok, getDataInstagram } from "./services/api";

function App() {
  const [url, setUrl] = useState("");
  const [hasResult, setHasResult] = useState(false);
  const [platform, setPlatform] = useState("tiktok");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleDownload = async () => {
    if (!url) return;

    if (platform === "tiktok" && !url.includes("tiktok.com")) {
      alert("Vui lòng nhập đúng liên kết TikTok!");
      return;
    }
    if (platform === "instagram" && !url.includes("instagram.com")) {
      alert("Vui lòng nhập đúng liên kết Instagram!");
      return;
    }

    setLoading(true);
    setHasResult(false);
    setData(null);

    try {
      const res = platform === "tiktok" ? await getDataTikTok(url) : await getDataInstagram(url);

      console.log("API:", res);

      setData(res);
      setHasResult(true);
    } catch (err) {
      alert("Lỗi kết nối hoặc không tìm thấy nội dung!");
    }

    setLoading(false);
  };


  return (
    <div className="min-h-screen pb-16 pt-8 px-4 flex flex-col items-center selection:bg-indigo-200 dark:bg-slate-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />

      <div className="w-full max-w-3xl space-y-8 relative">
        <PlatformSelector platform={platform} setPlatform={setPlatform} />

        <UrlInput
          platform={platform}
          url={url}
          setUrl={setUrl}
          onDownload={handleDownload}
        />

        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent"></div>
          </div>
        )}

        {hasResult && <ResultSection data={data} />}
      </div>

      <Footer />

      {/* Global styles for animations that Tailwind doesn't have built-in perfectly */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `,
        }}
      />
    </div>
  );
}

export default App;
