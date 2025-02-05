import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css'
import Flotingbtn from "@/components/Flotingbtn";
import ShopFlotingbtn from "@/components/ShopFlotingbtn";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-[#aea9a561] to-[#b1a3d5]  min-h-screen antialiased`}
    >  
{/* <Header/> */}
  {/* <Navbar/> */}
<Flotingbtn/>
<ShopFlotingbtn/>
        {children}
      
 
   
    </body>
  </html>
  );
}
