"use client";

import { useUser } from "@/context/user-contents";

export default function ContaPage() {
  const data = useUser();
  return (
    <main>
      <h1>Conta: {data?.user?.nome}</h1>
    </main>
  );
}
