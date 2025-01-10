import React from "react";
import LayoutRecoil from "./layout.recoil";
import Providers from "@/styles/ThemeProvider";
import GlobalStyles from "@/styles/GlobalStyles";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <Providers>
          <LayoutRecoil>{children}</LayoutRecoil>
        </Providers>
      </body>
    </html>
  );
}
