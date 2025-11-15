import { type DevolucionEstado, type Devolucion } from "@/types/ty";

const statusColors: Record<DevolucionEstado, string> = {
  Pendiente: "bg-orange-100 text-orange-800",
  Aprobada: "bg-green-100 text-green-800",
  Rechazada: "bg-red-100 text-red-800",
};

const DevolucionCard = ({ devolucionData }: { devolucionData: Devolucion }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Devolucion {devolucionData.id}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            statusColors[devolucionData.estado]
          }`}
        >
          {devolucionData.estado}
        </span>
      </div>

      <div className="flex-grow text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold text-gray-800">Cliente:</span>{" "}
          {devolucionData.cliente}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Fecha:</span>{" "}
          {devolucionData.date}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Producto:</span>{" "}
          {devolucionData.product}
        </p>
        <p>
          <span className="font-bold text-gray-800">Cantidad:</span>{" "}
          {devolucionData.cantidad}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Motivo:</span>{" "}
          {devolucionData.razon}
        </p>
      </div>

      <div className="flex  border-t pt-4 mt-4 justify-between items-center">
        <span className="text-gray-600">Monto:</span>
        <span className="font-bold text-lg text-gray-800x">
          {devolucionData.amount}
        </span>
      </div>

      <div className="flex gap-4 mt-6">
        {devolucionData.estado === "Pendiente" && (
          <>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Aprobar
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
              Rechazar
            </button>
          </>
        )}

        {devolucionData.estado === 'Aprobada' && (
          <>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Ver Detalles
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
              Imprimir
            </button>
          </>
        )}

        {devolucionData.estado === 'Rechazada' && (
          <>
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Ver Detalles
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
              Reconsiderar
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default DevolucionCard;
