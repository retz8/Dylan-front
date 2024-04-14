"use client";

import { SessionProvider as Provider } from "next-auth/react";

export function SessionContext({ children, session }) {
  return <Provider>{children}</Provider>;
}
