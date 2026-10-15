import { cookies } from "next/headers";
import Link from "next/link";

export async function AuthHeader() {
  // El componente se encarga de su propia validación de cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const isAuthenticated = !!token;

  return (
    <div className="flex items-center justify-between py-4 border-b mb-6">
      <div>
        <span className="text-xl font-bold">Mi Tienda</span>
      </div>

      <div>
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-green-600 font-medium">¡Estás autenticado!</span>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Iniciar Sesión
          </Link>
        )}
      </div>
    </div>
  );
}