"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

//const convex = new ConvexReactClient("https://quiet-gnat-966.convex.cloud");


export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>
    {children}
    </ConvexProvider>;
}