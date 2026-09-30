"use client";

import Link from "next/link";

export default function GlobalError() {
  return (
    <html>
      <body>
        <h1>Um erro ocorreu.</h1>
        <Link href={"/"}>Voltar</Link>
      </body>
    </html>
  );
}
