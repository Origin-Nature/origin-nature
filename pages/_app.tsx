// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { PLASMIC } from "../plasmic-init";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Component {...pageProps} />
      <SpeedInsights />
    </PlasmicRootProvider>
  );
}
