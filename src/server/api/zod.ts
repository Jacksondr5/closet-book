import { z } from "zod";
import { garmentTypes, seasons } from "../db/schema";

export const createGarmentInputSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.enum(garmentTypes),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Must be a valid hex color"),
  quantity: z.number().int().positive(),
  styleSeasons: z.enum(seasons).array(),
  weatherSeasons: z.enum(seasons).array(),
});
