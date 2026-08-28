import userGet from "@/actions/user-get";

export default async function ContaPage() {
  const { data } = await userGet();
  return (
    <main>
      <h1>Conta: {data?.nome}</h1>
    </main>
  );
}
