import { XCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center justify-center">
            <XCircle className="h-12 w-12 text-red-500" />
          </div>
          <CardTitle className="text-center text-2xl font-bold">Pago Cancelado</CardTitle>
          <CardDescription className="text-center">Tu transacción ha sido cancelada.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            No se ha realizado ningún cargo. Si tienes alguna pregunta, no dudes en contactarnos.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/cart">
            <Button variant="outline">Volver a intentar</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
