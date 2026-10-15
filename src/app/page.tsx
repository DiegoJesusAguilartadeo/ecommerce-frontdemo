import { Suspense } from "react";
import { AuthHeader } from "@/app/components/ui/AuthHeader";
import { getProducts } from "@/app/services/productService";
import { ProductGrid } from "@/app/components/products/ProductGrid";
export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <Suspense fallback={<div className="py-4 text-gray-400">Cargando cabecera...</div>}>
        <AuthHeader />
      </Suspense>

      <section className="mt-8">
        <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}