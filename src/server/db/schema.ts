import {
  index,
  integer,
  pgTableCreator,
  varchar,
  pgEnum,
  date,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `closet-book_${name}`);

export const garmentType = pgEnum("garment_type", [
  "suit",
  "jacket",
  "trousers",
  "tie",
  "pocket_square",
  "shirt",
  "shoe",
]);

export const season = pgEnum("season", ["spring", "summer", "fall", "winter"]);

export const garments = createTable(
  "garment",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    type: garmentType("type").notNull(),
    color: varchar("color", { length: 7 }).notNull(),
    quantity: integer("quantity").notNull(),
    styleSeason: season("style_season").array().notNull(),
    weatherSeason: season("weather_season").array().notNull(),
  },
  (garment) => [
    index("garment_type_idx").on(garment.type),
    // index("garment_color_idx").on(garment.color),
    index("garment_style_season_idx").on(garment.styleSeason),
    index("garment_weather_season_idx").on(garment.weatherSeason),
  ],
);

export const outfits = createTable("outfit", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  jacketId: integer("jacket_id").references(() => garments.id),
  trousersId: integer("trousers_id").references(() => garments.id),
  shirtId: integer("shirt_id").references(() => garments.id),
  tieId: integer("tie_id").references(() => garments.id),
  pocketSquareId: integer("pocket_square_id").references(() => garments.id),
  shoeId: integer("shoe_id").references(() => garments.id),
});

export const entries = createTable(
  "entries",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    outfitId: integer("outfit_id").references(() => outfits.id),
    date: date("date").notNull(),
  },
  (entry) => [
    index("outfit_id_idx").on(entry.outfitId),
    index("date_idx").on(entry.date),
  ],
);
