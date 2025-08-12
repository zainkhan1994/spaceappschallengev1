"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <pre style={{ color: "red" }}>{error?.message}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
