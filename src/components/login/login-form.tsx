"use client";

import login from "@/actions/login";
import Button from "../forms/button";
import { useFormState, useFormStatus } from "react-dom";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button disabled={pending} type="submit">
        {pending ? "Enviando..." : "Entrar"}
      </Button>
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" name="username" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
