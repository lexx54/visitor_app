import { useState } from "react";
import Menu from "../layout/Menu";
import { toast } from "react-toastify";
import axios from "axios";
import { IVisitor } from "../types/authStore";

const Create = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (email === "") return toast.error("Ingrese correo");
    if (name === "") return toast.error("Ingrese Nombre");
    if (phone === "") return toast.error("Ingrese Telefono");
    if (description === "")
      return toast.error("Ingrese Motivo de ingreso a la institucion");
    const res = await axios.post<IVisitor>("http://localhost:3000/visitors", {
      email,
      name,
      phone,
      description,
    });
    if (res.status !== 201)
      return toast.error("Hubo un error al crear al visitante");
    toast.success(
      `El visitante "${res.data.name}" ha sido registrado con exito`
    );
    setDescription("");
    setEmail("");
    setName("");
    setPhone("");
  };
  return (
    <section className="flex">
      <Menu />
      <div className="w-full h-vh flex items-center justify-center bg-indigo-100">
        <section className="text-gray-600 body-font relative w-3/4 h-full flex">
          <div className="absolute inset-0 bg-red-300 bg-univerisity bg-cover shadow-lg"></div>
          <div className="container px-5 py-4 flex items-center justify-center">
            <div className="w-1/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Agregar visita
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Correo
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Nombre Completo
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Telefono
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Motivo de ingreso
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  name="description"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleSubmit}
              >
                Crear
              </button>
              <p className="text-xs text-gray-500 mt-3">
                2024 © - Politécnico Santiago Mariño
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Create;
