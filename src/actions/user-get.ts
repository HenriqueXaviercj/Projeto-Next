"use server";

import { USER_GET } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { cookies } from "next/headers";
// import { cache } from "react";

export type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function userGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Token não encontrado");
    const { url } = USER_GET();

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) throw new Error("Erro ao pegar usuário.");
    const data = (await res.json()) as User;
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}

//Pode ser util caso você tenha alguma função com calculos muito complexos
// const userGetCache = cache(userGet);
// export default userGetCache;
