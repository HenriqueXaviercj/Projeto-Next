"use client";

import Button from "../forms/button";
import { useFormState, useFormStatus } from "react-dom";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";
import passowordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button disabled={pending} type="submit">
        {pending ? "Redefinindo..." : "Redefinir Senha"}
      </Button>
    </>
  );
}

export default function LoginRedefinirForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passowordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Nova Senha" type="password" name="password" />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
