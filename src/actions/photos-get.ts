"use server";

import { PHOTOS_GET } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export default async function photoGet({
  page = 1,
  total = 6,
  user = 0,
}: PhotosGetParams) {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const res = await fetch(
      "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0",
      {
        next: { revalidate: 10, tags: ["photos"] },
      },
    );

    if (!res.ok) throw new Error("Erro ao pegar as fotos");

    const data = (await res.json()) as Photo[];
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
