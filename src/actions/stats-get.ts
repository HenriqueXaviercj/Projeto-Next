"use server";

import { PHOTOS_GET, STATS_GET } from "@/utils/functions/api";
import apiError from "@/utils/functions/api-error";
import { cookies } from "next/headers";

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export default async function statsGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) throw new Error("Acesso negado.");

    const { url } = STATS_GET();
    const res = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar os dados.");

    const data = (await res.json()) as StatsData[];
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
