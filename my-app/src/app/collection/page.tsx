"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

// import { api } from ".."

export default function Home() {
  
  const saveSketchMutation = useQuery(api.sketches.getSketches)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {
            saveSketchMutation?.map((item)=><div key={item._id}>{item.prompt}</div>)
        }
    </main>
  );
}