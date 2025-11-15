import { type Movimiento, type tipoMovimiento } from "@/types/ty";

const tempColors: Record<tipoMovimiento, string> = {
  Entrada: "bg-green-100 text-green-800",
  Salida: "bg-red-100 text-red-800",
  Ajuste: "bg-yellow-100 text-yellow-800",
};

const cantidadColors: Record<tipoMovimiento, string> = {
  Entrada: "text-green-700",
  Salida: "text-red-700",
  Ajuste: "text-gray-800",
};
const MovimientoCard = ({ movimiento }: { movimiento: Movimiento }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <div className="mb-2">
        <span
          className={`text-xs font-medium py-0.5 rounded-full ${
            tempColors[movimiento.type]
          }`}
        >
          {movimiento.type}
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-xl texty-gray-800">
          {movimiento.productName}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{movimiento.razon}</p>
        <p className={`font-bold text-lg ${cantidadColors[movimiento.type]}`}>
          {movimiento.cantidadCambiar}
        </p>
      </div>
      <div className="border-t pt-4 mt-4">
        <span className="text-sm text-gray-500 mb-4 block">
          Usuario: {movimiento.user}
        </span>
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            ver detalles
          </button>
          <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            imprimir detalles
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovimientoCard;
