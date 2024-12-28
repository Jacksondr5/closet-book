import { z } from "zod";
import { desc, and, gte, lte, sql } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { entries } from "~/server/db/schema";

const PAGE_SIZE = 20;

// Input validation schemas
const getEntriesInputSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  page: z.number().int().min(1).default(1),
});

const createEntryInputSchema = z.object({
  outfitId: z.number(),
  date: z.date(),
});

export const entryRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(getEntriesInputSchema)
    .query(async ({ ctx, input }) => {
      const conditions = [];

      if (input.startDate) {
        conditions.push(gte(entries.date, input.startDate));
      }
      if (input.endDate) {
        conditions.push(lte(entries.date, input.endDate));
      }

      const offset = (input.page - 1) * PAGE_SIZE;

      const [entriesData, totalCount] = await Promise.all([
        ctx.db.query.entries.findMany({
          where: conditions.length > 0 ? and(...conditions) : undefined,
          orderBy: [desc(entries.date), desc(entries.id)],
          limit: PAGE_SIZE,
          offset,
          with: {
            outfit: {
              with: {
                jacket: true,
                trousers: true,
                shirt: true,
                tie: true,
                pocketSquare: true,
                shoe: true,
              },
            },
          },
        }),
        ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(entries)
          .where(conditions.length > 0 ? and(...conditions) : undefined)
          .then((result) => Number(result[0]?.count ?? 0)),
      ]);

      return {
        entries: entriesData,
        pagination: {
          currentPage: input.page,
          totalPages: Math.ceil(totalCount / PAGE_SIZE),
          totalItems: totalCount,
          hasMore: offset + entriesData.length < totalCount,
        },
      };
    }),

  create: publicProcedure
    .input(createEntryInputSchema)
    .mutation(async ({ ctx, input }) => {
      const [entry] = await ctx.db.insert(entries).values({
        date: input.date,
        outfitId: input.outfitId,
      });
      return entry.insertId;
    }),
});
