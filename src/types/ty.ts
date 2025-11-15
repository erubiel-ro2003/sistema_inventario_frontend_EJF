export interface Category {
  id: number;
  name: string;
  descripcion: string;
  conteoProducto: number;
  status: boolean;
}

export interface ElementoCompra {
  id: number;
  name: string;
  cantidad: string;
}

export interface Compra {
  id: string;
  provedor: string;
  date: string;
  status: "Completada" | "Pendiente" | "Cancelada";
  items: ElementoCompra[];
  total: string;
}
export interface Producto {
  id: number;
  name: string;
  category: string;
  precio: string;
  fechaExpiracion: string;
  provedor: string;
  cantidadStock: number;
}

export type tipoMovimiento = "Entrada" | "Salida" | "Ajuste";

export interface Movimiento {
  id: number;
  type: tipoMovimiento;
  productName: string;
  razon: string;
  cantidadCambiar: string;
  user: string;
}
export type DevolucionEstado = "Pendiente" | "Aprobada" | "Rechazada";
export interface Devolucion {
  id: string;
  estado: DevolucionEstado;
  cliente: string;
  date: string;
  product: string;
  cantidad: string;
  razon: string;
  amount: string;
}
export type rolUser = "Administrador" | "Vendedor" | "Almacenista";
export type estadoUsuario = "Activo" | "Inactivo";

/*
register
http://localhost:1337/api/auth/local/register
{
    "username":"julian",
    "email":"julian@gmail.com",
    "password":"12345678"
}*/
/*
login
 http://localhost:1337/api/auth/local
 {
    "identifier":"july",
    "password": "12345"
}
*/
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: rolUser;
  estado: estadoUsuario;
  ultimoAcceso: string;
}

//tenants
/*
{
    "data":{
        "nombre":"huembe",
        "direccion":"el chilamate",
        "telefono":"78787898",
        "correo":"huembe@gmail.com",
        "estado":"activo",
        "empresa_id":"comercial-huembesillo"
    }
}
*/
export interface Tenant {
  nombre:string,
  direccion:string,
  telefono:string,
  correo:string,
  estado:string,
  empresa_id:string
}