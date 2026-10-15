export interface Product {
  id: number;
  nombre: string;
  precio: number;
  existencia: number;
  promocionado: number;
  categoria: string;
}

export interface LaravelProductsResponse {
  data: Product[];
  meta: {
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products", {
      // Revalida los datos automáticamente cada 60 segundos en segundo plano (ISR)
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los productos de la API de Laravel");
    }

    const json = await response.json();

    // Como Laravel devuelve un objeto paginado, extraemos el arreglo de data.data
    if (json && Array.isArray(json.data)) {
      return json.data;
    }

    // Por si en algún endpoint futuro Laravel devuelve un arreglo plano directamente
    if (Array.isArray(json)) {
      return json;
    }

    return [];
  } catch (error) {
    console.error("Error en productService:", error);
    return [];
  }
}