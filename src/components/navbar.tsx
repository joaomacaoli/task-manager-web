import Link from "next/link";
import DropMenu from "./ui/drop-menu";

export default function NavBar() {
  return (
    <nav className="py-5 mb-12 flex justify-between text-amber-600">
      <h1 className="py-4 font-bold">
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`}>
          Task Manager
        </Link>
      </h1>

      <div className="flex gap-2">
        <DropMenu />
      </div>
    </nav>
  )
}
