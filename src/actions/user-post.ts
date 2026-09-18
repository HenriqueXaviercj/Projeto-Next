"use server";

import { USER_POST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import login from "./login";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password)
      throw new Error("Dados incompletos. Preencha os campos.");
    if (password.length < 6) throw new Error("A senha deve ter no mínimo 6 caracteres")
    const { url } = USER_POST();

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Email ou usuário já cadastrado");

    const { ok } = await login({ ok: true, error: "" }, formData);
    if (!ok) throw new Error("Erro ao logar.");

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
