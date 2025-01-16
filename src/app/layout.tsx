import React from "react";
import LayoutRecoil from "./layout.recoil";
import StyleProviders from "@/styles/ThemeProvider";
import GlobalStyles from "@/styles/GlobalStyles";
import LayoutTanstack from "./layout.tanstack";

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
        <StyleProviders>
          <LayoutTanstack>
            <LayoutRecoil>{children}</LayoutRecoil>
          </LayoutTanstack>
        </StyleProviders>
      </body>
    </html>
  );
}
