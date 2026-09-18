import photoGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default async function ContaPage() {
  const {data: } = 
  const { data } = await photoGet();
  return (
    <main>
      <Feed />
    </main>
  );
}
