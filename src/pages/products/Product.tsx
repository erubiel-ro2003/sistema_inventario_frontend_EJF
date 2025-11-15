import ProductoCard from "@/pages/products/ProductCard";
import { useState, useEffect } from "react";
import { type Producto } from "@/types/ty";
const Product = ()=> {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://tu-api.com/products')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setProductos(data);
        })
        .catch(()=>{
            setLoading(false);
        })
    },[]);

    if(loading){
        return <div>cargando productos..</div>
    }
    return (
        <div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion de productos</h1>
            <div className="mb-6">
                <button className="w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700">Agregar producto</button>
            </div>
            <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productos.map(p=>(
                    <ProductoCard key={p.id} producto={p}/>
                ))}
            </div>
        </div>
    )
}
export default Product;