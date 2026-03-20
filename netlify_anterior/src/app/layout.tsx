import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grappi Multimedia | Productora Audiovisual en Santiago, Chile",
  description: "Productora audiovisual líder en Santiago, Chile. Especialistas en videos corporativos, animación 2D/3D y publicidad audiovisual. Guion, producción y post producción para empresas. ¡Cotiza hoy!",
  keywords: ["productora audiovisual santiago", "videos corporativos chile", "producción audiovisual", "animación 2d 3d", "video marketing", "videos para empresas"],
  authors: [{ name: "Grappi Multimedia" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Grappi Multimedia | Productora Audiovisual en Santiago",
    description: "Productora audiovisual especializada en videos corporativos, animación y servicios de video para empresas en Chile.",
    url: "https://www.grappi.cl/",
    siteName: "Grappi Multimedia",
    type: "website",
    images: ["/images/logo.avif"],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grappi Multimedia | Productora Audiovisual Santiago",
    description: "Videos corporativos y producción audiovisual profesional en Chile",
    images: ["/images/logo.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
