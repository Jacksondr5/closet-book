import { z } from "zod";
import { desc, eq, and } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { garments, garmentType, season } from "~/server/db/schema";

// Input validation schemas
const getGarmentsInputSchema = z.object({
  type: z.enum(garmentType.enumValues).optional(),
  weatherSeason: z.enum(season.enumValues).optional(),
  styleSeason: z.enum(season.enumValues).optional(),
});

const createGarmentInputSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.enum(garmentType.enumValues),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Must be a valid hex color"),
  quantity: z.number().int().positive(),
  styleSeason: z.enum(season.enumValues),
  weatherSeason: z.enum(season.enumValues),
});

export const garmentRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(getGarmentsInputSchema)
    .query(async ({ ctx, input }) => {
      const conditions = [];

      if (input.type) {
        conditions.push(eq(garments.type, input.type));
      }
      if (input.weatherSeason) {
        conditions.push(eq(garments.weatherSeason, input.weatherSeason));
      }
      if (input.styleSeason) {
        conditions.push(eq(garments.styleSeason, input.styleSeason));
      }

      return await ctx.db.query.garments.findMany({
        where: conditions.length > 0 ? and(...conditions) : undefined,
        orderBy: [desc(garments.id)],
      });
    }),

  create: publicProcedure
    .input(createGarmentInputSchema)
    .mutation(async ({ ctx, input }) => {
      const [garment] = await ctx.db.insert(garments).values(input).returning();

      return garment;
    }),
});
