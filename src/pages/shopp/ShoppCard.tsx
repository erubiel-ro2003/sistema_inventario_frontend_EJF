import { type Compra } from "@/types/ty";
const statusColors = {
  Completada: "bg-green-100 text-green-800",
  Pendiente: "bg-orange-100 text-orange-800",
  Cancelada: "bg-red-100 text-red-800",
};
const CompraCard = ({ compra }: { compra: Compra }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Compra {compra.id}</h3>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            statusColors[compra.status]
          }`}
        >
          {compra.status}
        </span>
      </div>

      <div className="flex-grow">
        <p className="font-semibold text-gray-700">{compra.provedor}</p>
        <p className="text-sm text-gray-500 mb-4">Fecha: {compra.date}</p>

        <div className="space-y-2 mb-4">
          {compra.items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-600">{item.name}</span>
              <span className="text-gray-800">{item.cantidad}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 mt-4 flex justify-between items-center">
        <span className="text-gray-600">Total:</span>
        <span className="font-bold text-lg text-green-700">{compra.total}</span>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Ver Detalles
        </button>

        {compra.status === "Pendiente" ? (
          <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Cancelar
          </button>
        ) : (
          <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Imprimir
          </button>
        )}
      </div>
    </div>
  );
};
export default CompraCard;
