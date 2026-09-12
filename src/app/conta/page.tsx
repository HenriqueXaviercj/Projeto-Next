"use client";

import { useUser } from "@/context/user-contents";

export default function ContaPage() {
  const { user } = useUser();
  return (
    <main>
      <h1>Conta: {user?.email}</h1>
    </main>
  );
}
