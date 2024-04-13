"use client";

// context to allow app to use NextUI

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function NextUIContext({ children }) {
  return <NextUIProvider className="h-full w-full">{children}</NextUIProvider>;
}
