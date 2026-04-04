import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoStrip from "@/components/LogoStrip";
import CartProvider from "@/components/cart/CartProvider";
import { Providers } from "@/components/providers";
// SearchProvider import commented due to build error
// Removed useSearch - layout is server component

import SupportChat from "@/components/SupportChat";

import "@/styles/preview-timeout.css";

import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/header.css";
import "@/styles/mobile-menu.css";
import "@/styles/burger-menu.css";

import "@/styles/support-chat.css";
import "@/data/catalog.css";
import "@/styles/products.css";
import "@/styles/product-page.css";
import "@/styles/cart.css";
import "@/styles/buttons.css";
import "@/styles/responsive.css";

import "@/styles/search-overlay.css";
import "@/styles/desktop.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: "Gold Jewerly | Золотые украшения",
    template: "%s | Gold Jewerly"
  },
  description: "Эксклюзивные золотые украшения: кольца, серьги, колье и аксессуары из золота с бриллиантами, изумрудами, сапфирами. Ювелирный магазин премиум класса.",
  keywords: "золотые украшения, золото, кольца, серьги, колье, бриллианты, изумруды, ювелирка, gold jewelry",
  authors: [{ name: "Gold Jewerly" }],
  creator: "Gold Jewerly",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://goldjewerly.com",
    siteName: "Gold Jewerly",
    images: [{
      url: "/images/header.jpg",
      width: 1200,
      height: 630,
      alt: "Золотые украшения RS"
    }],
    title: "Gold Jewerly | Золотые украшения",
    description: "Эксклюзивные золотые украшения с драгоценными камнями."
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Jewerly | Золотые украшения",
    description: "Эксклюзивные золотые украшения с драгоценными камнями.",
    images: ["/images/header.jpg"]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="app-body">
        <CartProvider>
          <Providers>
            <Header />
            <main className="app-main">{children}</main>
            <LogoStrip />
            <Footer />
            <SupportChat />
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
