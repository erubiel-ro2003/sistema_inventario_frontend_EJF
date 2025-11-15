import { NavLink } from "react-router-dom";
const NavBar = () => {
const linkClass = "px-3 py-2 rounded-md hover:bg-gray-100";
  const activeLinkClass = "font-bold text-blue-600"; 
  return (
    <nav className="bg-white shadow-md flex gap-4 p-2">
      <NavLink 
        to="/"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Inicio
      </NavLink>

      <NavLink 
        to="/products"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Productos
      </NavLink>

      <NavLink 
        to="/categories"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Categorías
      </NavLink>
      
      
      <NavLink 
        to="/shopps"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Compras
      </NavLink>

      <NavLink 
        to="/transactions"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Movimientos
      </NavLink>
      
      <NavLink 
        to="/devoluciones"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
        Devoluciones
      </NavLink>
      <NavLink 
        to="/usuarios"
        className={({ isActive }) => 
          isActive ? `${linkClass} ${activeLinkClass}` : linkClass
        }
      >
       Usuarios 
      </NavLink>
    </nav>
  );
};
export default NavBar;
