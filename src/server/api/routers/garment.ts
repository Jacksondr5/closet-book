import { z } from "zod";
import { desc, eq, and } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { garments, garmentTypes, seasons } from "~/server/db/schema";
import { createGarmentInputSchema } from "~/server/api/zod";

// Input validation schemas
const getGarmentsInputSchema = z.object({
  type: z.enum(garmentTypes).optional(),
  weatherSeasons: z.enum(seasons).array().optional(),
  styleSeasons: z.enum(seasons).array().optional(),
});

export const garmentRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(getGarmentsInputSchema)
    .query(async ({ ctx, input }) => {
      const conditions = [];

      if (input.type) {
        conditions.push(eq(garments.type, input.type));
      }
      if (input.weatherSeasons) {
        conditions.push(eq(garments.weatherSeasons, input.weatherSeasons));
      }
      if (input.styleSeasons) {
        conditions.push(eq(garments.styleSeasons, input.styleSeasons));
      }

      return await ctx.db.query.garments.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        orderBy: [desc(garments.id)],
      });
    }),

  create: publicProcedure
    .input(createGarmentInputSchema)
    .mutation(async ({ ctx, input }) => {
      const [garment] = await ctx.db.insert(garments).values(input);

      return garment.insertId;
    }),
});
