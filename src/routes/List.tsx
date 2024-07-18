import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem";
import Menu from "../layout/Menu";

const List = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("userAuth");
  if (!isLogged) navigate("/login");
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
              <ListItem
                name="lexx"
                email="lexx@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="Bonnie Green"
                email="email@windster.com"
                phone="04146555597"
                description="Llego a las 9am"
              />
              <ListItem
                name="Maria"
                email="mary@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
              <ListItem
                name="joshep"
                email="another@gmail.com"
                phone="04146543567"
                description="Llego a las 9am"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
