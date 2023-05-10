import "tailwindcss/tailwind.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FavoritesProvider>
        <Component {...pageProps} />;
      </FavoritesProvider>
    </>
  );
}
