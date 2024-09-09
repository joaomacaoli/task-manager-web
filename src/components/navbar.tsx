'use client'

import Link from "next/link";
import DropMenu from "./ui/drop-menu";

const env = process.env.NEXT_PUBLIC_BASE_URL;

export default function NavBar() {

  function handleSingOutClick() {
    localStorage.clear()
    alert("Você foi deslogado.")
  }

  return (
    <nav className="py-5 mb-12 flex justify-between">
      <h1 className="py-4 font-bold text-orange-700">
        <Link href={`${env}`}>
          Task Manager
        </Link>
      </h1>

      <div className="flex items-center gap-2 text-amber-600">
        <button
          onClick={handleSingOutClick}
          className="bg-white border-amber-500 px-4 py-2 rounded-full mr-4 hover:bg-amber-100"
        >
          <Link href={`${env}`}>
            SingOut
          </Link>
        </button>
        <DropMenu />
      </div>
    </nav>
  )
}
