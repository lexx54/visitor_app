import MenuItem from "../components/MenuItem";

// icons
import { FaUsers, FaHome, FaSignInAlt } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

import useAuth from "../store/auth.store";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className="z-40 min-w-64 h-screen transition-transform"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {user !== null ? (
              <MenuItem path="/" label="Principal" Icon={FaHome} />
            ) : null}
            {user !== null ? (
              <MenuItem path="/list" label="Visitantes" Icon={FaUsers} />
            ) : null}
            {user !== null ? (
              <MenuItem
                path=""
                label="Cerrar session"
                Icon={RiLogoutCircleLine}
                action={handleSignOut}
              />
            ) : null}
            {user === null ? (
              <MenuItem
                path="/create"
                label="Registrarse"
                Icon={PiNotePencilBold}
              />
            ) : null}
            {user === null ? (
              <MenuItem
                path="/login"
                label="Iniciar sesion"
                Icon={FaSignInAlt}
              />
            ) : null}

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Menu;
