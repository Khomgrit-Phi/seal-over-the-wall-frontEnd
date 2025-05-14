import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // ใช้ lucide-react ไอคอนสวย น้ำหนักเบา

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // โหลดสถานะจาก localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // เปลี่ยน theme + บันทึกลง localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="  dark:bg-gray-900 transition-colors duration-500 text-gray-900  flex flex-col items-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="  bg-white dark:bg-gray-900  transition-all duration-300 hover:scale-105"
      >
        {darkMode ? (
          <Sun size={32} className="text-gray-400" />
        ) : (
          <Moon size={32} className="text-gray-700" />
        )}
      </button>
    </div>
  );
}
