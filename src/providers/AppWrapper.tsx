"use client"

import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux"

import store from "@/store"

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </Provider>
  )
}
