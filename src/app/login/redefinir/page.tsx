import LoginRedefinirForm from "@/components/login/login-redefinir-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redefinir a senha | Dogs",
  description: "Redefina a sua senha",
};

type RedefinirSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default function RedefinirPage({ searchParams }: RedefinirSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Redefinir</h1>
      <LoginRedefinirForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
