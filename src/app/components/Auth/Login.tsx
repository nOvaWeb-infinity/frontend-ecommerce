"use client"

import { UserCircle } from "lucide-react"
import { useSelectedLayoutSegments } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import Register from "./Register"

export default function Login() {
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [registerOpen, setRegisterOpen] = useState<boolean>(false)

  const openRegister = (): void => {
    setLoginOpen(false)
    setRegisterOpen(true)
  }

  return (
    <>
      <Sheet open={loginOpen} onOpenChange={setLoginOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg px-8 py-5 text-black hover:bg-gray-100 dark:text-black"
          >
            <UserCircle />
            <span className="sr-only">Iniciar sesión</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
          <div className="space-y-6">
            <SheetTitle className="text-center text-2xl font-bold text-black">INICIA LA SESSIÓ</SheetTitle>
            <SheetDescription className="text-center text-gray-600">
              Introdueix la teva adreça electrònica i la contrasenya per accedir-hi
            </SheetDescription>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">
                  Adreça electrònica
                </Label>
                <Input id="email" type="email" placeholder="exemple@correu.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">
                  Contrasenya
                </Label>
                <Input id="password" type="password" />
                <p className="text-xs text-gray-500">
                  La contrasenya ha de contenir almenys 8 caràcters, una lletra majúscula, una minúscula i un número. Si
                  us plau, no repeteixis el mateix caràcter més de tres vegades.
                </p>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Has oblidat la contrasenya?
              </a>
              <Button className="w-full">Inicia sessió</Button>
              <div className="flex items-center space-x-2">
                <Checkbox id="keep-logged" />
                <label htmlFor="keep-logged" className="text-sm text-gray-700">
                  Mantingues la sessió oberta
                </label>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-sm text-gray-600">No tens compte?</p>
                <Button variant="outline" className="w-full" onClick={openRegister}>
                  Crea una cuenta
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Register open={registerOpen} onOpenChange={setRegisterOpen} />
    </>
  )
}
