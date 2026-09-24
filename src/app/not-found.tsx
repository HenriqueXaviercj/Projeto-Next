import Link from "next/link";

export default function NotFount() {
  return (
    <section className="container">
      <h1 className="title">Página não encontrada</h1>
      <Link
        className="button"
        href={"/"}
        style={{ marginBottom: "1rem", display: "inline-block" }}
      >
        Voltar para a home.
      </Link>
    </section>
  );
}
