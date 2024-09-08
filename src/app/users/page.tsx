import { getAllUsers } from "@/services/users-services";
import { FaCheckCircle, FaExclamationCircle, FaUserEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

type UserProps = { id: number; email: string; password: string; isActive: boolean }

export default async function Users() {

  const users = await getAllUsers();

  return (
    <section className="bg-white border-2 border-amber-600 rounded-xl max-w-100 mx-auto p-3">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-amber-600 p-2">Lista de Usuários</h1>
        <button className="text-4xl pr-4 text-amber-600">
          <IoIosAddCircle />
        </button>
      </div>
      <table className="m-auto text-xl border-separate border-spacing-x-5 border-spacing-y-2">
        <thead className="text-left">
          <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users)
            ? (users.map((user: UserProps) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td className="flex justify-center">
                  {user.isActive
                    ? <FaCheckCircle className="text-green-600" />
                    : <FaExclamationCircle className="text-red-600" />}
                </td>
                <td>
                  <div className="flex gap-3">
                    <FaUserEdit />
                    <MdDelete />
                  </div>
                </td>
              </tr>
            ))) : (
              <tr>
                <td colSpan={3}>Nenhum usuário encontrado</td>
              </tr>
            )}
        </tbody>
      </table>
    </section>
  )
}
