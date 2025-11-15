import { useEffect, useState } from "react";
import { type Movimiento } from "@/types/ty";
import MovimientoCard from "@/pages/transactions/TransactionCard";
const Transaction = () => {
  const [movimiento, setMovimiento] = useState<Movimiento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tu-api.com/movements")
      .then((res) => res.json())
      .then((data) => {
        setMovimiento(data);
        setLoading(false);
      }).catch(()=>{
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>cargando movimientos de inventario..</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Movimientos de inventario</h1>
      <div className="mb-6">
        <button className="w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700">
          Registrar movimiento
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movimiento.map((mov) => (
          <MovimientoCard key={mov.id} movimiento={mov} />
        ))}
      </div>
    </div>
  );
};
export default Transaction;
