export default function FotoIdPage({ params }: { params: { id: number } }) {
  return (
    <main>
      <h1>Foto Id: {params.id}</h1>
    </main>
  );
}
