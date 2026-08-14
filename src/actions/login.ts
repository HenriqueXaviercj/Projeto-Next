"use server";

import { TOKEN_POST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { cookies } from "next/headers";

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  console.log(username, password);

  try {
    if (!username || !password)
      throw new Error("Dados incompletos. Preencha os campos.");

    const { url } = TOKEN_POST();

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Senha ou usuário inválidos");

    const data = await res.json();

    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
