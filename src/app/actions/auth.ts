"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // En tu Server Action (ej. src/actions/auth.ts)
const data = await response.json();

// Extraemos 'access_token' tal como lo devuelve tu API de Laravel
const token = data.access_token; 

if (token) {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

  } catch (error: any) {
    throw new Error(error.message || "Error al iniciar sesión");
  }

  redirect("/");
}