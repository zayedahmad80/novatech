import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaTech | Digital Marketing Agency",
  description: "Web Development, Video Editing, Graphic Design & Marketing services. 2+ years experience, 13+ experts, sustainable digital solutions.",
  keywords: "digital marketing, web development, video editing, graphic design, SEO, branding, NovaTech",
  authors: [{ name: "NovaTech" }],
  creator: "NovaTech",
  publisher: "NovaTech",
  robots: "index, follow",
  openGraph: {
    title: "NovaTech | Digital Marketing Agency",
    description: "Transform your digital presence with NovaTech. Web development, video editing, graphic design, and marketing services.",
    url: "https://novatech-phi.vercel.app/",
    siteName: "NovaTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NovaTech - Digital Marketing Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaTech | Digital Marketing Agency",
    description: "Transform your digital presence with NovaTech.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}