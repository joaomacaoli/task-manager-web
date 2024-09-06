import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="py-2 font-bold text-orange-700">
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`}>
          Task Manager
        </Link>
      </h1>
      <ul className="flex items-center">
        <li>
          <button className="bg-white text-amber-600 border-amber-500 px-4 py-2 rounded-full mr-4 hover:bg-amber-100">
            <Link href='#'>
              Sing Up
            </Link>
          </button>
        </li>
        <li>
          <button className="bg-gradient-to-b from-amber-500 to-orange-700 text-white px-4 py-2 rounded-full">
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/singin`}>
              Sing In
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}
