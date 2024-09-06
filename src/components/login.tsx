import Link from "next/link";

export default function Login() {
  return (
    <section className="bg-white border-2 border-amber-600 rounded-xl max-w-80 mx-auto p-5">
      <div className="pb-4">
        <form className="flex flex-col items-center w-full">
          <h1 className="font-bold text-3xl text-amber-600 pb-4">Login</h1>
          <p className="py-1 m-2 w-full">
            <input type="email" name="username" placeholder="Email" className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold px-4 py-3 rounded-full w-full" />
          </p>
          <p className="py-1 m-2 w-full">
            <input type="password" name="password" placeholder="Senha" className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold px-4 py-3 rounded-full w-full" />
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
