import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeRegistry from "../components/ThemeRegistry";
import Layout from "../components/Layout";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harry LN | Monteur Vidéo Professionnel",
  description:
    "Portfolio de Harry LN, monteur vidéo professionnel spécialisé dans les clips musicaux, publicités et courts-métrages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <Layout>{children}</Layout>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
