import {type Category} from "@/types/ty";
const CategoryCard = ({ category }: { category: Category }) => {
  const estadoCategory = category.status
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
      <div className="flex-grow">
        <h3 className="font-bold text-xl mb-1">{category.name}</h3>
        <p className="text-gray-600 text-sm">{category.descripcion}</p>
      </div>
      <div className="flex justify-between items-center my-4">
        <span className="text-gray-500 text-sm">
          {category.conteoProducto} productos
        </span>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${estadoCategory}`}
        >
          {category.status ? "Activa" : "Inactivo"}
        </span>
      </div>
      <div className="flex gap-4">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          editar
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
          ver productos
        </button>
      </div>
    </div>
  );
};
export default CategoryCard;
