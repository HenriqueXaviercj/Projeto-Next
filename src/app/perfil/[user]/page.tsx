export default function UserPage({ params }: { params: { user: string } }) {
  return (
    <main>
      <h1>Usuário: {params.user}</h1>
    </main>
  );
}
