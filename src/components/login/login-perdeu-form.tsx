"use client";

import login from "@/actions/login";
import Button from "../forms/button";
import { useFormState, useFormStatus } from "react-dom";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import styles from "./login-form.module.css";
import passowrdLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button disabled={pending} type="submit">
        {pending ? "Enviando..." : "Enviar Email"}
      </Button>
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passowrdLost, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuário" name="login" type="text" />
        <input type="hidden" value={`${window.location.href.replace("perdeu", "resetar")}`} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
