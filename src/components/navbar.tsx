'use client'

import Link from "next/link";

const env = process.env.NEXT_PUBLIC_BASE_URL;

const linksNav = [
  {
    name: 'Home',
    path: ''
  },
  {
    name: 'Users',
    path: 'users'
  },
  {
    name: 'Tasks',
    path: 'tasks'
  },
]

export default function NavBar() {

  function handleSingOutClick() {
    localStorage.clear()
    alert("Você foi deslogado.")
  }

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="py-2 font-bold text-orange-700">
        <Link href={`${env}`}>
          Task Manager
        </Link>
      </h1>
      <ul className="flex items-center gap-2 text-orange-700">
        {linksNav.map((link) => (
          <li key={link.name}>
            <Link href={`${env}/${link.path}`}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={handleSingOutClick}
            className="bg-white text-amber-600 border-amber-500 px-4 py-2 rounded-full mr-4 hover:bg-amber-100"
          >
            <Link href={`${env}`}>
              SingOut
            </Link>
          </button>
        </li>
        <li>
          <button
            className="bg-gradient-to-b from-amber-500 to-orange-700 text-white px-4 py-2 rounded-full"
          >
            <Link href={`${env}/login`}>
              Sing In
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}
