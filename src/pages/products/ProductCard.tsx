import { type Producto } from "@/types/ty";
const ProductoCard = ({ producto }: { producto: Producto }) => {
  let bg = "bg-green-100 text-green-800";
  if (producto.cantidadStock <= 50) {
    bg = "bg-orange-100 text-orange-800";
  }

  if (producto.cantidadStock < 10) {
    bg = "bg-red-100 text-red-800";
  }
  return ( 
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-gray-800">{producto.name}</h3>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${bg}`}>
          {producto.cantidadStock} unidades
        </span>
      </div>

      <div className="flex justify-between flex-grow mb-4"> 
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">{producto.category}</span>
          <span className="text-2xl font-bold text-green-700">{producto.precio}</span>
          <span className="text-sm text-gray-500 mt-2">
            Proveedor: {producto.provedor}
          </span>
        </div>

        <div className="flex flex-col items-end text-sm text-gray-500">
          <span>Vence: {producto.fechaExpiracion}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Editar
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
          Ver Detalles
        </button>
      </div>
    </div>
  )
};
export default ProductoCard;