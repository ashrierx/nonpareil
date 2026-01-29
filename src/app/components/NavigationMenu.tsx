"use client"

import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"
import Link from 'next/link'

interface NavigationMenuProps {
  username: string;
}

export function NavigationMenu({ username }: NavigationMenuProps) {
  return (
    <>
      <div className="bg-linear-to-r from-[#003d7a] to-[#001a33] border-b-2 border-[#ffcc00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-[#ffcc00] fill-[#ffcc00]" />
                <span className="text-white font-bold text-lg">Nonpareil</span>
              </div>
              <nav className="flex gap-4 text-white">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
            <div className="text-[#d4e1f0] text-xs">
              Welcome back, {username}!
            </div>
          </div>
        </div>
      </div>

      {/* Header with Branding */}
      <div className="bg-linear-to-r from-[#6699cc] via-[#336699] to-[#003d7a] border-b-4 border-[#003d7a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center gap-4">
            <Award className="h-12 w-12 text-[#ffcc00] fill-[#ffcc00]" />
            <div className="text-center">
              <h1 className="text-white text-4xl font-bold drop-shadow-md">
                Nonpareil
              </h1>
              <p className="text-[#ffcc00] text-sm font-bold drop-shadow-sm">
                Having no equal; peerless - Your favorites, uniquely curated
              </p>
            </div>
            <Award className="h-12 w-12 text-[#ffcc00] fill-[#ffcc00]" />
          </div>
        </div>
      </div>
    </>
  )
}