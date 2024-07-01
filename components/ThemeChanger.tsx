import {useState, useEffect} from "react";
import {useTheme} from "next-themes";

const ThemeChanger = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currTheme = theme === "system" ? systemTheme : theme;

    if (currTheme === "dark") {
      return (
        <svg // bulb icon
          className="h-7 w-7 hover:scale-110 cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );
    } else {
      return (
        <svg // moon icon
          className="h-7 w-7 hover:scale-110 cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    }
  };
  return <>{renderThemeChanger()}</>;
};

export default ThemeChanger;
