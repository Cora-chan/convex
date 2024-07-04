import { scheduler } from "timers/promises";
import { internalAction, internalMutation, mutation, query } from "./_generated/server";
import { api, internal } from "../convex/_generated/api";
import {v} from "convex/values"
import { Id } from "./_generated/dataModel";
import Replicate from "replicate";
import { generate } from "./generate";

export const saveSketch = mutation(
  async (
    { db, scheduler },
    { prompt, image }: { prompt: string; image: string }
  ) => {
    const sketch = await db.insert("sketches", {
      prompt,
    });

    await scheduler.runAfter(0, internal.generate.generate, {
      sketchId: sketch,
      prompt,
      image,
    });

    return sketch;
  }
);

export const getSketch = query(({db},{sketchId}:{sketchId:string})=>{
  if(!sketchId) return null
  return db.get(<Id>sketchId);
}) 

export const getSketches = query(async ({ db }) => {
  const sketches = await db.query("sketches").collect();
  console.log(sketches);
  return sketches;
});



export const updateStetchResult = internalMutation(
  async({db},{sketchId,result}:{sketchId:string; result:string}  
  )=> {
    await db.patch(<Id>sketchId, {
      result,
    })
});
