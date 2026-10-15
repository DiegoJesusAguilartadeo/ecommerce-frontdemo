import type { Product } from "@/app/services/productService"; // Ajusta la ruta si es necesario

interface ProductGridProps {
  products: Product[];
}

// Usamos "export function" en lugar de "export default"
export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-gray-500 py-4">
        No hay productos disponibles o la API de Laravel no está respondiendo.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.categoria}
          </span>
          
          <h2 className="text-xl font-semibold mt-2 text-gray-800">
            {product.nombre}
          </h2>
          
          <p className="text-gray-900 font-bold text-lg mt-2">
            ${product.precio.toFixed(2)}
          </p>
          
          <p className="text-gray-500 text-sm mt-1">
            Disponibles: <span className="font-medium text-gray-700">{product.existencia}</span>
          </p>
        </div>
      ))}
    </div>
  );
}