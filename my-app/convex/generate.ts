"use node"
import Replicate from "replicate";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

export const generate = internalAction(
    async (
      {
        runMutation
      },
      {
        sketchId,
        prompt,
        image,
      }: { sketchId: string; prompt: string; image: string }
    ) => {
      const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN!,
      });
  
      const input = {
        image:
          "https://replicate.delivery/pbxt/IJE6zP4jtdwxe7SffC7te9DPHWHW99dMXED5AWamlBNcvxn0/user_1.png",
        prompt: "a photo of a brightly colored turtle",
      };
  
      const output = (await replicate.run(
        "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117",
        {
          input: {
            image,
            scale: 7,
            prompt,
            image_resolution: "512",
            n_prompt:  "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
          },
        }
      )) as [string,string]
  
      await runMutation(internal.sketches.updateStetchResult,{
        sketchId,
        result:output[1]
      })
      console.log(output);
      //=> ["https://replicate.delivery/pbxt/aNV6gZDqqiJiPddvDfV9jkA...
    }
  );