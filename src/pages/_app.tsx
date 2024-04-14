import "@/styles/globals.css";
import "@/styles/typography.css";

import type { AppProps } from "next/app";
import NextThemeProvider from "@/components/next-theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider>
        <NextThemeProvider defaultTheme="dark">
          <Component {...pageProps} />
        </NextThemeProvider>
      </ClerkProvider>
    </>
  );
}
