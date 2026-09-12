import ContaHeader from "@/components/conta/conta-header";

export default function LayoutConta({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
