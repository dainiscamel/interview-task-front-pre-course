"use client";

import { ThemeProvider } from "@emotion/react";
import baseTheme from "./theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
}
