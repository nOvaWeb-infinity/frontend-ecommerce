"use client"

import Link from "next/link"
import { useSelector } from "react-redux"

import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

const favoriteItems = 2

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <nav className="z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        <NavLinks />
        <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
          <h1>tutienda.com</h1>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favoriteItems} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favoriteItems} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
