/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Menu from "../layout/Menu";
import axios from "axios";
import { User } from "../types/authStore";
import { toast } from "react-toastify";
import useAuth from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get<User[]>("http://localhost:3000/users");
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email === "") return toast.error("Ingrese Correo");
    if (password === "") return toast.error("Ingrese contrasena");
    const userExist = users.find((user) => user.email === email);
    if (!userExist) return toast.error("Usuario no existe");
    if (userExist.password !== password)
      return toast.error("Contrasena incorrecta");
    signIn(userExist);
    navigate("/list");
    toast.success("Inicio de session exitoso");
  };
  return (
    <section className="flex">
      <Menu />
      <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
        <form className="w-full md:w-1/3 rounded-lg" onSubmit={handleSubmit}>
          <div className="flex font-bold justify-center mt-6">
            <img
              className="h-40 w-40 mb-3"
              src="http://localhost:5173/logo.png"
            />
          </div>
          <h2 className="text-2xl text-center text-gray-200 mb-8">Login</h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Correo Electronico"
                  className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Contrasena"
                  className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			"
                />
              </div>
            </div>
            <button
              // onClick={handleSubmit}
              type="submit"
              className="w-full py-2 mt-8 rounded-full bg-blue-400 text-gray-100 focus:outline-none"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
