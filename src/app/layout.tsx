import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Restrepo - Engineer",
  description: "Portfolio of Justin Restrepo. Cloud Security and AI Security professional based in Charlotte, NC.",
  keywords: ["Cloud Security", "AI Security", "Cybersecurity", "Software Engineer"],
  authors: [{ name: "Justin Restrepo" }],
  icons: {
    icon: [
      { url: "/jr-favicon.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/jr-favicon.png?v=3",
    apple: "/jr-favicon.png?v=3",
  },
  openGraph: {
    title: "Justin Restrepo - Engineer",
    description: "Portfolio of Justin Restrepo. Cloud Security and AI Security professional.",
    url: "https://justinrestrepo.com",
    siteName: "Justin Restrepo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
