import { mutation, query } from "./_generated/server";

export const saveSketch = mutation(
  async ({ db }, { prompt }: { prompt: string }) => {
    await db.insert("sketches", {
      prompt,
    });

    return {
      message: "success",
    };
  }
);

export const getSketches = query(async ({ db }) => {
  const sketches = await db.query("sketches").collect();
  console.log(sketches);
  return sketches;
});

// export const get = query({
//   args: {},
//   handler: async (ctx: any) => {
//     return await ctx.db.query("sketches").collect();
//     console.log("success")
//   },
// });

