"use client";

import { loginAction } from "@/app/actions/auth";
export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form action={loginAction} className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Correo</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input 
            type="password" 
            name="password" 
            required 
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}