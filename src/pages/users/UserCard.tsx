import { type rolUser, type Usuario, type estadoUsuario } from "@/types/ty";

const roleColors: Record<rolUser, string> = {
  Administrador: "bg-blue-100 text-blue-800",
  Vendedor: "bg-purple-100 text-purple-800",
  Almacenista: "bg-orange-100 text-orange-800",
};

const statusColors: Record<estadoUsuario, string> = {
  Activo: 'bg-green-100 text-green-800',
  Inactivo: 'bg-red-100 text-red-800',
};

const UsuarioCard = ({usuario}:{usuario: Usuario})=>{
    return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"> 
      <div className="text-center">
        <h3 className="font-bold text-xl text-gray-800">{usuario.nombre}</h3>
        <p className="text-sm text-gray-500 mb-4">{usuario.email}</p>
      </div>
      <div className="flex gap-2 mb-4">
        <span 
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${roleColors[usuario.rol]}`}
        >
          {usuario.rol}
        </span>
        <span 
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[usuario.estado]}`}
        >
          {usuario.estado}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Último acceso: {usuario.ultimoAcceso}
      </p>

      <div className="flex gap-4 w-full">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Editar
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
          Permisos
        </button>
      </div>
    </div>
  );
}
export default UsuarioCard;