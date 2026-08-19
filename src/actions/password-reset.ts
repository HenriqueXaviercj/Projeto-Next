"use server";

import { PASSWORD_RESET } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { redirect } from "next/navigation";

export default async function passowordReset(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!login || !key || !password)
      throw new Error("Dados incompletos. Preencha os campos.");

    const { url } = PASSWORD_RESET();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Não autorizado");
  } catch (error: unknown) {
    return apiError(error);
  }
  redirect("/login");
}
