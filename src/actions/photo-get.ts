"use server";

import { PHOTO_GET } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { Photo } from "./photos-get";

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const res = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ["photos", "comment"],
      },
    });

    if (!res.ok) throw new Error("Erro ao pegar a foto.");

    const data = (await res.json()) as PhotoData;
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
