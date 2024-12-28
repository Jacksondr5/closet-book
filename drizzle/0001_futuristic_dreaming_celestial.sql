ALTER TABLE "closet-book_garment" 
  ALTER COLUMN "style_season" TYPE season[] USING ARRAY[style_season]::season[];--> statement-breakpoint
ALTER TABLE "closet-book_garment" 
  ALTER COLUMN "weather_season" TYPE season[] USING ARRAY[weather_season]::season[];