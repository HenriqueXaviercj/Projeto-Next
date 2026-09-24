"use server";

import { COMMENT_POST } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { Comment } from "./photo-get";

export default async function commentPost(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const comment = formData.get("comment") as string | null;
  const id = formData.get("id") as string | null;

  try {
    if (!token || !comment || !id)
      throw new Error("Dados incompletos. Preencha os campos.");
    const { url } = COMMENT_POST(id);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    console.log(res.status, res.statusText);
    
    if (!res.ok) throw new Error("Erro ao postar");

    const data = (await res.json()) as Comment;
    revalidateTag("comment");
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
