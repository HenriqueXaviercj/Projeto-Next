"use server";

import { PHOTO_POST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const nome = formData.get("nome") as string | null;
  const idade = formData.get("idade") as string | null;
  const peso = formData.get("peso") as string | null;
  const img = formData.get("img") as File;

  // console.log(token, nome, idade, peso, img);

  try {
    if (!token || !nome || !idade || !peso || img.size === 0)
      throw new Error("Dados incompletos. Preencha os campos.");
    const { url } = PHOTO_POST();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Erro ao postar");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/");
}
