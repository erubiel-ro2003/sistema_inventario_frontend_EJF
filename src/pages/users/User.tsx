import { useEffect, useState } from "react";
import { type Usuario } from "@/types/ty";
import UsuarioCard from "./UserCard";
const User = () =>{
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://tu-api.com/users')
        .then(res=>res.json())
        .then(data=>{
            setUsuarios(data);
            setLoading(false);
        }).catch(()=>{
            setLoading(false);
        })
    },[]);

    if(loading){
        return <div>cargando..</div>
    }

    return(
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion de usuarios</h1>

            <div className="mb-6">
                <button className="w-full bg-green-600 text-white font-bold px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700">
                    Agregar usuario
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usuarios.map(user=>(
                    <UsuarioCard key={user.id} usuario={user}/>
                ))}
            </div>
        </div>
    )
}
export default User;
