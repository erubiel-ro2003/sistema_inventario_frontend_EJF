import { useEffect, useState } from "react";
import CategoryCard from "@/pages/categories/CategorieCard";
import {type Category} from "@/types/ty";
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://tu-api.com/categories")
      .then((r) => r.json())
      .then((d) => {
        setCategories(d);
        setCargando(false);
      })
      .catch(() => {
        setCargando(false);
      });
  }, []);
  if (cargando) {
    return <div>cargando categorias..</div>;
  }
  return (
    <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestion de categorias</h1>
      <div className="mb-6">
        <button className="w-full bg-green-600 text-white font-bold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 justify-center">
          agregar categoria
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((categoria) => (
          <CategoryCard key={categoria.id} category={categoria} />
        ))}
      </div>
    </div>
  );
};
export default Categories;
