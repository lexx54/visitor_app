import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem";
import Menu from "../layout/Menu";
import { useEffect, useState } from "react";
import { IVisitor } from "../types/authStore";
import axios from "axios";

const List = () => {
  const [update, setUpdate] = useState(true)
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("userAuth");
  if (!isLogged) navigate("/login");
  const [visitors, setVisitors] = useState<IVisitor[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get<IVisitor[]>("http://localhost:3000/visitors");
      setVisitors(response.data);
      setUpdate(false)
    };
    if (update) getUsers();
  }, [update])
  return (
    <section className="flex">
      <Menu />
      <div className="w-full h-vh flex items-center justify-center bg-indigo-100">
        <div className="w-full max-w-screen-sm  py-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Visitantes
            </h5>
            <p
              onClick={() => navigate("/create")}
              className="text-sm font-medium text-blue-600 hover:underline hover:cursor-pointer dark:text-blue-500"
            >
              Agregar
            </p>
          </div>
          <div className="flow-root max-h-[70vh] overflow-auto no-scrollbar ">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {
                visitors.length === 0 ? <div className="flex items-center justify-center w-full h-[200px] text-white text-xl border">No hay visitantes actualmente</div> : null
              }
              {
                visitors.map(visitor => (
                  <ListItem
                    name={visitor.name}
                    email={visitor.email}
                    phone={visitor.phone}
                    description={visitor.description}
                    id={visitor?.id}
                    update={setUpdate}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
