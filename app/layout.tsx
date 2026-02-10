import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /* Ang title na ito ang lalabas sa taas ng browser tab mo */
  title: 'masayaasia | Discover Hidden Gems', 
  description: 'Experience world-class luxury, exquisite dining, and seamless island transportation with Masaya Asia.',
  icons: {
    icon: '/favicon.ico', 
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" style={{ backgroundColor: '#000' }}> 
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}