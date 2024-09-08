'use client'

import { login } from "@/services/auth-service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const token = await login(values.email, values.password)

    if (token) {
      console.log("Login bem-sucedido!");
      localStorage.setItem('token', token);
      router.push("/tasks");
    } else {
      console.log("Falha no login.");
    }
  }

  return (
    <section className="bg-white border-2 border-amber-600 rounded-xl max-w-80 mx-auto p-5">
      <div className="pb-4">
        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-3xl text-amber-600 pb-4">User login</h1>
          <p className="py-4 px-3 m-2 w-full bg-gray-200 flex gap-3 rounded-full">
            <label htmlFor="form-login-email" className="text-xl text-gray-400">
              <HiOutlineMail />
            </label>
            <input
              id="form-login-email"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold outline-none"
              required
            />
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
              value={values.password}
              onChange={handleChange}
              className="bg-gray-200 placeholder:text-gray-400 placeholder:font-semibold outline-none"
              required
            />
          </p>
          <p className="py-1 m-2 w-full">
            <input
              type="submit"
              value="LOGIN"
              className="bg-gradient-to-b from-amber-500 to-orange-700 text-white font-semibold text-sm px-4 py-3 rounded-full w-full cursor-pointer"
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
