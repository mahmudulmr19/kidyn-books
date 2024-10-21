import "./globals.css";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Kidyn Books",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(manrope.className, "antialiased")}>
      <body>
        {children}
        <Script src="https://fast.wistia.net/assets/external/E-v1.js" />
        <Script src="https://fast.wistia.com/embed/medias/l8o2z44w6d.jsonp" />
      </body>
    </html>
  );
}
