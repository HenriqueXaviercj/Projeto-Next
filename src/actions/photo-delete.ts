"use server";

import { PHOTO_DELETE } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;

  try {
    if (!token) throw new Error("Token inválido.");
    const { url } = PHOTO_DELETE(id);

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) throw new Error("Erro ao deletar a foto");
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/");
}
