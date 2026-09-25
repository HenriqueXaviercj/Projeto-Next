import statsGet from "@/actions/stats-get";
import Loading from "@/components/helper/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatisticas"),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  console.log(data);
  if (!data) return null;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
