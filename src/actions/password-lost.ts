"use server";

import { PASSWORD_LOST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";

export default async function passowrdLost(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null;
  const urlPerdeu = formData.get("url") as string | null;

  try {
    if (!login) throw new Error("Dados incompletos. Preencha os campos.");

    const { url } = PASSWORD_LOST();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, url: urlPerdeu }),
    });

    if (!res.ok) throw new Error("Email ou usuário não cadastrado");

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
