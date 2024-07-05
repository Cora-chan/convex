"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api"
import { useForm } from "react-hook-form";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";

export default function Home() {
  const [sketchId, setSketchId] = useState("");
  const { reset, register, handleSubmit, formState: { errors } } = useForm<{prompt:string}>();
  const saveSketchMutation = useMutation(api.sketches.saveSketch);
  const sketchQuery = useQuery(api.sketches.getSketch, {sketchId })
  const canvasRef = useRef<ReactSketchCanvasRef>(null)
  const handleClear = () => {
    canvasRef.current?.clearCanvas(); 
  }
  type DefaultValues = {
    prompt:string;
  };
  useEffect (()=>{
    const defaultValues:DefaultValues = { prompt: "draw a tree"};
    reset(defaultValues);
  }, [])
 

 
  function resetCanvas(canvasRef: RefObject<ReactSketchCanvasRef>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="grid grid-col-2 gap-4">
      <form
        className="flex flex-col gap-2" 
        onSubmit={handleSubmit(async(formData)=>{
          if (!canvasRef.current) return;
          const image = await canvasRef.current?.exportImage("jpeg");
          const results = await saveSketchMutation({...formData, image});
          console.log(results)
          setSketchId(results)        
      })}>
      <p>Prompt</p>
      <input className="text-black h-10 text-xl border-solid border-2 border-[#9c9c9c]" {...register("prompt", {required:true})} />
      {errors.prompt && <span>This field is required</span>}
      <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md">Submit</button>
      <button type="reset" onClick={()=>
        handleClear()} 
        className="bg-[#9c9c9c] text-white py-2 px-4 rounded-md">Clear</button>
      <p>Scribble it!</p>
      <ReactSketchCanvas
      ref={canvasRef}
      style={{width: 256, height: 256, border:"2px solid #9c9c9c"}}
      strokeWidth={4}
      strokeColor="black" />
      {sketchQuery && <img className="mt-3" height={256} width={256} src={sketchQuery.result}/>}
    </form>
    </div>
    </main>
  );
}