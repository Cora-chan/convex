"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<{prompt:string}>();
  const saveSketchMutation = useMutation(api.sketches.saveSketch)
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit((formData)=>{
        console.log(formData)
        saveSketchMutation(formData);
      })}>
    
      <input className="text-black" defaultValue="Draw a plane" {...register("prompt", {required:true})} />
      {errors.prompt && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </main>
  );
}