import { useEffect, useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Settings</h1>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Appearance</h3>

        <div className="flex items-center justify-between py-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="block font-medium text-slate-900 dark:text-white">Dark Mode</span>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Toggle dark mode for better viewing comfort.
            </p>
          </div>

          <label className="switch relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className={`slider round absolute cursor-pointer inset-0 rounded-full transition-colors duration-300 ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
              <span className={`absolute bg-white h-4 w-4 bottom-1 left-1 rounded-full transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;