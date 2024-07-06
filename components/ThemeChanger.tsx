import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {LuMoonStar} from "react-icons/lu";
import {CiSun} from "react-icons/ci";

const ThemeChanger = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currTheme = theme === "system" ? systemTheme : theme;

    if (currTheme === "dark") {
      return (
        //sun icon
        <button
          className="text-3xl text-white p-3"
          onClick={() => {
            setTheme("light");
          }}
        >
          <CiSun />
        </button>
      );
    } else {
      return (
        <button
          className="text-3xl text-white p-3"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <LuMoonStar />
        </button>
      );
    }
  };
  return <>{renderThemeChanger()}</>;
};

export default ThemeChanger;
