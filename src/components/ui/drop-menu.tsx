'use client'

import Link from "next/link";
import { FaUser } from "react-icons/fa";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const env = process.env.NEXT_PUBLIC_BASE_URL;

const linksNav = [
  { label: 'Home', href: '' },
  { label: 'Usuários', href: 'users' },
  { label: 'Tarefas', href: 'tasks' },
  { label: 'Login', href: 'login' },
  { label: 'Cadastrar', href: 'singup' },
]

function handleSingOutClick() {
  localStorage.clear()
  alert("Você foi deslogado.")
}

export default function DropMenu() {
  return (
    <Menu>
      <MenuButton className="hover:bg-amber-100 p-4 rounded-full text-2xl">
        <FaUser />
      </MenuButton>
      <MenuItems className="data-[active]:bg-amber-100" anchor="bottom">
        {linksNav.map((link) => (
          <MenuItem key={link.label}>
            <div className="block data-[focus]:bg-amber-100 text-amber-600 p-1">
              <Link href={`${env}/${link.href}`}>{link.label}</Link>
            </div>
          </MenuItem>
        ))}
        <MenuItem>
          <div className="block data-[focus]:bg-amber-100 text-amber-600 p-1">
            <Link onClick={handleSingOutClick} href={`${env}`}>SingOut</Link>
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
