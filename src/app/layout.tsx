import "~/styles/globals.css";

import {
  ClerkProvider
} from '@clerk/nextjs'
import { type Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Value Studio",
  description: "Value Studio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
const fontSans = IBM_Plex_Sans_Arabic({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
  ],
  style: "normal",
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <ClerkProvider>
    <html lang="ar" dir="rtl" suppressHydrationWarning>
     
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
           <ThemeProvider
      defaultTheme="system"
      attribute="class"
      >
        {children}
        </ThemeProvider>
        </body>
    </html>
    // </ClerkProvider>
  );
}
