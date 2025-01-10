"use client";

import { useEffect, useState } from "react";

export const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMsw = async () => {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        if (typeof window !== "undefined") {
          const { worker } = await import("@/mock/browser");
          await worker.start({ onUnhandledRequest: "bypass" });
          setMswReady(true);
        }
      }
    };

    initMsw();
  }, []);

  return <>{children}</>;
};
