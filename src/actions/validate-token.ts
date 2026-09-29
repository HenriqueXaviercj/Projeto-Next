"use server";

import { STATS_GET, TOKEN_VALIDATE_POST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { cookies } from "next/headers";

export default async function validateToken() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Acesso negado.");

    const { url } = TOKEN_VALIDATE_POST();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) throw new Error("Erro ao validar token.");

    const data = await res.json();
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
