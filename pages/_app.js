import "/styles/global.css";
import {Inter} from "next/font/google";
import {ThemeProvider} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={inter.className}>
        <Component {...pageProps} />{" "}
      </main>
    </ThemeProvider>
  );
}
