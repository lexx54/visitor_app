/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

interface IMenuItem {
  Icon: any;
  label: string;
  path: string;
  action?: () => void;
}

const MenuItem = ({ Icon, label, path, action }: IMenuItem) => {
  const navigate = useNavigate();
  return (
    <li
      className="flex items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      onClick={() => (action ? action() : navigate(path))}
    >
      {<Icon className="text-gray-300" />}
      <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
    </li>
  );
};

export default MenuItem;
