import {
  index,
  int,
  mysqlTableCreator,
  varchar,
  mysqlEnum,
  date,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `closet-book_${name}`);

export const seasons = ["spring", "summer", "fall", "winter"] as const;
export const garmentTypes = [
  "suit",
  "jacket",
  "trousers",
  "tie",
  "pocket_square",
  "shirt",
  "shoe",
] as const;

export const garments = createTable(
  "garment",
  {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    type: mysqlEnum("garment_type", garmentTypes).notNull(),
    color: varchar("color", { length: 7 }).notNull(),
    quantity: int("quantity").notNull(),
    styleSeason: mysqlEnum("style_season", seasons).notNull(),
    weatherSeason: mysqlEnum("weather_season", seasons).notNull(),
  },
  (garment) => [
    index("garment_type_idx").on(garment.type),
    // index("garment_color_idx").on(garment.color),
    index("garment_style_season_idx").on(garment.styleSeason),
    index("garment_weather_season_idx").on(garment.weatherSeason),
  ],
);

export const outfits = createTable("outfit", {
  id: int("id").primaryKey().autoincrement(),
  jacketId: int("jacket_id").references(() => garments.id),
  trousersId: int("trousers_id").references(() => garments.id),
  shirtId: int("shirt_id").references(() => garments.id),
  tieId: int("tie_id").references(() => garments.id),
  pocketSquareId: int("pocket_square_id").references(() => garments.id),
  shoeId: int("shoe_id").references(() => garments.id),
});

export const entries = createTable(
  "entries",
  {
    id: int("id").primaryKey().autoincrement(),
    outfitId: int("outfit_id").references(() => outfits.id),
    date: date("date").notNull(),
  },
  (entry) => [
    index("outfit_id_idx").on(entry.outfitId),
    index("date_idx").on(entry.date),
  ],
);
