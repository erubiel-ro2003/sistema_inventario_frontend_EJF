import DevolucionCard from "@/pages/devoluciones/DevolucionesCard";
import { useEffect, useState } from "react";
import { type Devolucion } from "@/types/ty";
const Devoluciones = () => {
  const [devoluciones, setDevoluciones] = useState<Devolucion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tu-api.com/devoluciones")
      .then((res) => res.json())
      .then((data) => {
        setDevoluciones(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>cargando devoluciones..</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Gestión de Devoluciones
      </h1>
    
    <div className="mb-6">
        <button className="w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700">Nueva devolucion</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devoluciones.map(dev=>(
            <DevolucionCard key={dev.id} devolucionData={dev}/>
        ))}
    </div>
    </div>
  );
};
export default Devoluciones;
