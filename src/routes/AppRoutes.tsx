import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Main_layout from "@/components/layout/m_layout";
const Wait = () => {
  return <div>cargando pagina, porfavor espere un momento..</div>;
};
const Categories = lazy(() => import("@/pages/categories/Categories"));
const Devoluciones = lazy(() => import("@/pages/devoluciones/Devoluciones"));
const Login = lazy(() => import("@/pages/login/Login"));
const Products = lazy(() => import("@/pages/products/Product"));
const Register = lazy(() => import("@/pages/register/Register"));
const Shopp = lazy(() => import("@/pages/shopp/Shopp"));
const Transaction = lazy(() => import("@/pages/transactions/Transaction"));
const User = lazy(() => import("@/pages/users/User"));
const Home = lazy(()=> import("@/pages/inicio/Homepage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Wait />}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Main_layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/devoluciones" element={<Devoluciones />} />
          <Route path="/products" element={<Products />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/shopps" element={<Shopp />} />
          <Route path="/usuarios" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
