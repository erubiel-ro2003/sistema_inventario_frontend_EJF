import { Outlet } from "react-router-dom";
import NavBar from "@/components/layout/navbar";
// import styles  from '@/pages/inicio/Inicio.module.css'
const Main_layout = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <span className="flex items-center gap-2 font-bold text-xl">
          Sistema inventario
        </span>
        <button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md px-4 py-2">
          cerrar sesion
        </button>
      </header>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
export default Main_layout;
