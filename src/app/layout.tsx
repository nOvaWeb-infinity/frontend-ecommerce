import type { Metadata } from "next"

import { AppWrapper } from "@/providers/AppWrapper"
import { montserrat } from "@/utils/fonts"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by n0vaWeb infinity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <AppWrapper>
          <Navbar />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  )
}
