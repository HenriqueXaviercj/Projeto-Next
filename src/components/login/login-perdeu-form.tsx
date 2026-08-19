"use client";

import Button from "../forms/button";
import { useFormState, useFormStatus } from "react-dom";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";
import passowrdLost from "@/actions/password-lost";
import { useEffect, useState } from "react";

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

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuário" name="login" type="text" />
        <input type="hidden" value={url} />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: "#4c1" }}>Email enviando.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
