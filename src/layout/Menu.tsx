import MenuItem from "../components/MenuItem";

// icons
import { FaUsers, FaHome, FaSignInAlt } from "react-icons/fa";
import { FaIdCardClip } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { RiLogoutCircleLine } from "react-icons/ri";

import useAuth from "../store/auth.store";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const localUser = localStorage.getItem("userAuth");
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
            {user !== null || localUser ? (
              <MenuItem path="/" label="Principal" Icon={FaHome} />
            ) : null}
            {user !== null || localUser ? (
              <MenuItem
                path="/list"
                label="Visitantes"
                Icon={FaUsers}
                notify={5}
              />
            ) : null}
            {user !== null || localUser ? (
              <MenuItem
                path="/create"
                label="Agregar visita"
                Icon={FaIdCardClip}
              />
            ) : null}
            {user !== null || localUser ? (
              <MenuItem
                path=""
                label="Cerrar session"
                Icon={RiLogoutCircleLine}
                action={handleSignOut}
              />
            ) : null}
            {user === null && !localUser ? (
              <MenuItem
                path="/create"
                label="Registrarse"
                Icon={PiNotePencilBold}
              />
            ) : null}
            {user === null && !localUser ? (
              <MenuItem
                path="/login"
                label="Iniciar sesion"
                Icon={FaSignInAlt}
              />
            ) : null}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Menu;
