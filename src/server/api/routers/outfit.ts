import { z } from "zod";
import { desc, eq, and } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { outfits } from "~/server/db/schema";

// Input validation schemas
const getOutfitsInputSchema = z.object({
  jacketId: z.number().optional(),
  trousersId: z.number().optional(),
  shirtId: z.number().optional(),
  tieId: z.number().optional(),
  pocketSquareId: z.number().optional(),
  shoeId: z.number().optional(),
});

const createOutfitInputSchema = z.object({
  jacketId: z.number(),
  trousersId: z.number(),
  shirtId: z.number(),
  tieId: z.number(),
  pocketSquareId: z.number(),
  shoeId: z.number(),
});

export const outfitRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(getOutfitsInputSchema)
    .query(async ({ ctx, input }) => {
      const conditions = [];

      // Add conditions for each optional filter
      if (input.jacketId) {
        conditions.push(eq(outfits.jacketId, input.jacketId));
      }
      if (input.trousersId) {
        conditions.push(eq(outfits.trousersId, input.trousersId));
      }
      if (input.shirtId) {
        conditions.push(eq(outfits.shirtId, input.shirtId));
      }
      if (input.tieId) {
        conditions.push(eq(outfits.tieId, input.tieId));
      }
      if (input.pocketSquareId) {
        conditions.push(eq(outfits.pocketSquareId, input.pocketSquareId));
      }
      if (input.shoeId) {
        conditions.push(eq(outfits.shoeId, input.shoeId));
      }

      return await ctx.db.query.outfits.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        orderBy: [desc(outfits.id)],
        with: {
          jacket: true,
          trousers: true,
          shirt: true,
          tie: true,
          pocketSquare: true,
          shoe: true,
        },
      });
    }),

  create: publicProcedure
    .input(createOutfitInputSchema)
    .mutation(async ({ ctx, input }) => {
      const [outfit] = await ctx.db.insert(outfits).values(input).returning();

      return outfit;
    }),
});
