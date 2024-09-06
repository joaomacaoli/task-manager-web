import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  return (
    <section className="bg-white border-2 border-amber-600 rounded-xl max-w-80 mx-auto p-5">
      <div className="pb-4">
        <form className="flex flex-col items-center w-full">
          <h1 className="font-bold text-3xl text-amber-600 pb-4">User login</h1>
          <p className="py-4 px-3 m-2 w-full bg-gray-200 flex gap-3 rounded-full">
            <label htmlFor="form-login-email" className="text-xl text-gray-400">
              <HiOutlineMail />
            </label>
            <input
              id="form-login-email"
              type="email"
              name="username"
              placeholder="Email"
              className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold outline-none" />
          </p>
          <p className="py-4 px-3 m-2 w-full bg-gray-200 flex gap-3 rounded-full">
            <label htmlFor="form-login-password" className="text-xl text-gray-400">
              <RiLockPasswordLine />
            </label>
            <input
              id="form-login-password"
              type="password"
              name="password"
              placeholder="Senha"
              className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold outline-none" />
          </p>
          <p className="py-1 m-2 w-full">
            <input
              type="submit"
              value="LOGIN"
              className="bg-gradient-to-b from-amber-500 to-orange-700 text-white font-semibold text-sm px-4 py-3 rounded-full w-full"
            />
          </p>
        </form>
      </div>
      <hr className="rounded" />
      <div className="w-full flex justify-center pt-4">
        <button className="bg-amber-100 text-amber-600 font-medium px-5 py-3 rounded-full hover:bg-amber-200">
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/singin`}>
            Criar nova conta
          </Link>
        </button>
      </div>
    </section>
  )
}
