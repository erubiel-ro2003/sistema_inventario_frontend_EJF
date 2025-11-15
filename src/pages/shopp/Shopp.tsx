import { useState, useEffect } from "react";
import { type Compra } from "@/types/ty";
import CompraCard from "@/pages/shopp/ShoppCard";
const Shopping = () => {
    const [compra,setCompra] = useState<Compra[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://tu-api.com/compras')
        .then(res=>res.json())
        .then(data=>{
            setCompra(data);
            setLoading(false);
        })
        .catch(()=>{
            setLoading(false);
        })
    },[])

    if(loading){
        return <div>cargando compras</div>
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion de compras</h1>
            <div className="mb-6">
                <button className="w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md flex items-center gap-2 justify-center hover:bg-green-700">
                    nueva compra
                </button>
            </div>
            <div className="grid grid-cols1 md:grid-cols2 lg:grid-cols-3 gap-6">
                {compra.map(c=>(
                    <CompraCard key={c.id} compra={c}/>
                ))}
            </div>
        </div>
    )
}
export default Shopping;