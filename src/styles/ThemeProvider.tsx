"use client";

import { ThemeProvider } from "@emotion/react";
import baseTheme from "./theme";

export default function StyleProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
}
