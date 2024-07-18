/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

interface IMenuItem {
  Icon: any;
  label: string;
  path: string;
  action?: () => void;
  notify?: number;
}

const MenuItem = ({ Icon, label, path, action, notify }: IMenuItem) => {
  const navigate = useNavigate();
  return (
    <li
      className="flex items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      onClick={() => (action ? action() : navigate(path))}
    >
      {<Icon className="text-gray-300" />}
      <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
      {notify ? (
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {notify}
        </span>
      ) : null}
    </li>
  );
};

export default MenuItem;
