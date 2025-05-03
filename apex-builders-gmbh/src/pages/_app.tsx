import "/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/MainLayout";
import { NewsProvider } from "@/lib/contexts/NewsContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <NewsProvider>
          <Component {...pageProps} />
        </NewsProvider>
      </MainLayout>
    </SessionProvider>
  );
}
