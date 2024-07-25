import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Value Studio",
  description: "Value Studio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
