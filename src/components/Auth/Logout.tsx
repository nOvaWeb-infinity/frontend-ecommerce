"use client"

import { on } from "events"
import Cookies from "js-cookie"
import { UserCircle } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import Login from "./Login"

interface LogoutProps {
  onLogout: () => void
}

export default function Logout({ onLogout }: LogoutProps) {
  const [loginOpen, setLoginOpen] = useState(false)

  const handleLogout = () => {
    onLogout()
  }

  return (
    <>
      <Sheet open={loginOpen} onOpenChange={setLoginOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg px-8 py-6 text-black hover:bg-gray-100 dark:text-black"
          >
            <UserCircle />
            <span className="sr-only">Cerrar sesión</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
          <div className="space-y-6">
            <SheetTitle className="text-center text-2xl font-bold text-black">CERRAR SESIÓN</SheetTitle>
            <SheetDescription className="text-center text-gray-600">
              ¿Estás seguro de que quieres cerrar sesión?
            </SheetDescription>
            <Button onClick={handleLogout} className="w-full">
              Cerrar sesión
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}