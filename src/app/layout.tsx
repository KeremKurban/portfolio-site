import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = `${site.name} · ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title,
  description: site.intro,
  authors: [{ name: site.name }],
  openGraph: { title, description: site.intro, type: "profile", locale: "en_GB" },
  twitter: { card: "summary", title, description: site.intro },
  // Stay out of search indexes until the site has its real domain.
  robots: siteUrl ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a1120",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
