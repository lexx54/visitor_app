/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FaEraser } from "react-icons/fa";
import { toast } from "react-toastify";

interface IListItem {
  name: string;
  email: string;
  phone: string;
  description: string;
  id?: any
  update: any
}
const ListItem = ({ name, email, phone, description, id, update }: IListItem) => {
  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:3000/visitors/${id}`)
    if (res.status === 200) {
      toast.success('Visitante eliminado exitosamente')
      update(true)
    }
  }
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="http://localhost:5173/logo.png"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {phone}
        </div>
        <div
          onClick={handleDelete}
          className="ml-2 bg-red-400 px-2 py-1 rounded text-white transition-all hover:-translate-x-[2px] hover:-translate-y-[2px]">
          <FaEraser />
        </div>
      </div>
      <div>
        <p className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ListItem;
